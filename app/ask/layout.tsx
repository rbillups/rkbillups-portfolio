import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask About My Work | Reginald Key'Shawn Billups",
  description:
    "Ask questions about Reginald Key'Shawn Billups' portfolio, projects, skills, and engineering background using his public portfolio assistant.",
  alternates: {
    canonical: "/ask",
  },
};

export default function AskLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
