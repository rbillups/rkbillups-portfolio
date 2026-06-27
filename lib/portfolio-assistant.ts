export const PORTFOLIO_ASSISTANT_UNAVAILABLE_MESSAGE =
  "The assistant is temporarily unavailable. Please try again shortly.";

export const PORTFOLIO_ASSISTANT_ENDPOINT_UNAVAILABLE_MESSAGE =
  "The assistant endpoint is unavailable. Please try again shortly.";

export const PORTFOLIO_ASSISTANT_NOT_CONFIGURED_MESSAGE =
  "The portfolio assistant is not configured for this environment.";

export const PORTFOLIO_CHAT_PATH = "/api/v1/public/portfolio/chat";

export const portfolioAssistantStarterPrompts = [
  "What kind of software engineer is Key'Shawn?",
  "What is KnowledgeForge?",
  "What projects has he built?",
  "What technical skills does he use?",
  "What career areas is he focused on?",
] as const;

export const portfolioAssistantWidgetPrompts = [
  portfolioAssistantStarterPrompts[0],
  portfolioAssistantStarterPrompts[2],
  portfolioAssistantStarterPrompts[3],
] as const;

export type PortfolioCitation = {
  title?: string;
  filename?: string;
  excerpt?: string;
};

export type PortfolioChatRequest = {
  question: string;
  retrieval_limit?: number;
};

export type PortfolioChatResponse = {
  answer: string;
  citations: PortfolioCitation[];
  insufficient_context: boolean;
  policy_blocked: boolean;
  model?: string;
};

export type PortfolioChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  status?: "loading" | "complete" | "error";
  citations?: PortfolioCitation[];
  insufficientContext?: boolean;
  policyBlocked?: boolean;
};

export function getPortfolioAssistantApiUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_PORTFOLIO_ASSISTANT_API_URL?.trim();
  return url || null;
}

export function getPortfolioAssistantChatUrl(): string | null {
  const configured = getPortfolioAssistantApiUrl();
  if (!configured) {
    return null;
  }

  try {
    const parsed = new URL(configured);
    const normalizedPath = parsed.pathname.replace(/\/+$/, "");

    if (
      normalizedPath === PORTFOLIO_CHAT_PATH ||
      normalizedPath.endsWith(PORTFOLIO_CHAT_PATH)
    ) {
      return `${parsed.origin}${PORTFOLIO_CHAT_PATH}`;
    }

    return new URL(PORTFOLIO_CHAT_PATH, `${parsed.origin}/`).toString();
  } catch {
    return null;
  }
}

export async function askPortfolioAssistant(
  question: string,
): Promise<PortfolioChatResponse> {
  const requestUrl = getPortfolioAssistantChatUrl();

  if (!requestUrl) {
    throw new Error(PORTFOLIO_ASSISTANT_NOT_CONFIGURED_MESSAGE);
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("[Portfolio Assistant] POST", requestUrl);
  }

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
      retrieval_limit: 5,
    } satisfies PortfolioChatRequest),
  });

  if (response.status === 404) {
    throw new Error(PORTFOLIO_ASSISTANT_ENDPOINT_UNAVAILABLE_MESSAGE);
  }

  if (!response.ok) {
    throw new Error(PORTFOLIO_ASSISTANT_UNAVAILABLE_MESSAGE);
  }

  const data = (await response.json()) as PortfolioChatResponse;

  if (
    typeof data.answer !== "string" ||
    !Array.isArray(data.citations) ||
    typeof data.insufficient_context !== "boolean" ||
    typeof data.policy_blocked !== "boolean"
  ) {
    throw new Error(PORTFOLIO_ASSISTANT_UNAVAILABLE_MESSAGE);
  }

  return data;
}

export function createMessageId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
