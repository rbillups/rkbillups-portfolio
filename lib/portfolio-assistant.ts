export const PORTFOLIO_ASSISTANT_UNAVAILABLE_MESSAGE =
  "The assistant is temporarily unavailable. Please try again shortly.";

export const PORTFOLIO_ASSISTANT_NOT_CONFIGURED_MESSAGE =
  "The portfolio assistant is not configured for this environment.";

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

export async function askPortfolioAssistant(
  question: string,
): Promise<PortfolioChatResponse> {
  const apiUrl = getPortfolioAssistantApiUrl();

  if (!apiUrl) {
    throw new Error(PORTFOLIO_ASSISTANT_NOT_CONFIGURED_MESSAGE);
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question } satisfies PortfolioChatRequest),
  });

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
