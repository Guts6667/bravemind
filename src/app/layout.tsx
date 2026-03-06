import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/shared/AppShell";

export const metadata: Metadata = {
  title: "BraveMind",
  description: "CBT-based journaling and reflection app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppShell> {children} </AppShell>
      </body>
    </html>
  );
}
