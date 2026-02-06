"use client";

import { MegaMenu } from "./MegaMenu";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <MegaMenu />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
