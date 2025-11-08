import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Designer Portfolio",
  description: "3D Animated Portfolio Showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
