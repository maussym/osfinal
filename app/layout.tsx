import type { Metadata } from "next";
import "./globals.css";

export const viewport = { themeColor: "#111410", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  title: "OS Final Prep",
  description: "Understand Operating Systems with bilingual notes, previous exam questions, flashcards, Bash examples and saved practice.",
  applicationName: "OS Final Prep",
  icons: {
    icon: "/mark.svg",
    shortcut: "/mark.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
