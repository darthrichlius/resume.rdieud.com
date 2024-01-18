import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";

import { Header, Footer } from "@@src/components";

import "@radix-ui/themes/styles.css";
import "@@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"font-body"}>
        <Theme appearance="dark">
          <header className="flex justify-center fixed z-40 w-full py-28 px-24 md:px-32 xl:px-1">
            <Header />
          </header>
          <main className="px-24 md:px-32 xl:px-1">{children}</main>
          <footer className="py-28 px-24 md:px-32 xl:px-1">
            <Footer />
          </footer>
        </Theme>
      </body>
    </html>
  );
}
