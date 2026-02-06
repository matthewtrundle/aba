import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATX ABA — Austin Behavior Analysis",
  description:
    "ATX ABA is a TxABA Special Interest Group uniting behavior analysts across the greater Austin area through networking, CEU events, article discussions, and our annual conference.",
  keywords: [
    "ABA",
    "Austin",
    "behavior analysis",
    "BCBA",
    "RBT",
    "CEU",
    "conference",
    "TxABA",
    "networking",
  ],
  openGraph: {
    title: "ATX ABA — Austin Behavior Analysis",
    description:
      "Join Austin's premier behavior analysis community. Networking, CEU events, and our 5th Annual Conference.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
