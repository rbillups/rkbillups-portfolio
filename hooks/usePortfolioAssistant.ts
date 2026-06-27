"use client";

import { useCallback, useState } from "react";
import {
  PORTFOLIO_ASSISTANT_UNAVAILABLE_MESSAGE,
  askPortfolioAssistant,
  createMessageId,
  type PortfolioChatMessage,
} from "@/lib/portfolio-assistant";

export function usePortfolioAssistant() {
  const [messages, setMessages] = useState<PortfolioChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const askQuestion = useCallback(async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || isLoading) return;

    const userMessage: PortfolioChatMessage = {
      id: createMessageId(),
      role: "user",
      content: trimmed,
      status: "complete",
    };

    const loadingMessageId = createMessageId();
    const loadingMessage: PortfolioChatMessage = {
      id: loadingMessageId,
      role: "assistant",
      content: "Searching my portfolio...",
      status: "loading",
    };

    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    setIsLoading(true);

    try {
      const response = await askPortfolioAssistant(trimmed);

      setMessages((prev) =>
        prev.map((message) =>
          message.id === loadingMessageId
            ? {
                id: loadingMessageId,
                role: "assistant",
                content: response.answer,
                status: "complete",
                citations: response.citations,
                insufficientContext: response.insufficient_context,
                policyBlocked: response.policy_blocked,
              }
            : message,
        ),
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : PORTFOLIO_ASSISTANT_UNAVAILABLE_MESSAGE;

      setMessages((prev) =>
        prev.map((item) =>
          item.id === loadingMessageId
            ? {
                id: loadingMessageId,
                role: "assistant",
                content: message,
                status: "error",
              }
            : item,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return {
    messages,
    isLoading,
    askQuestion,
  };
}
