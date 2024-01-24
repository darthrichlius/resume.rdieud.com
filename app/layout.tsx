import { Theme } from "@radix-ui/themes";

import { Header, Footer } from "@@src/components";

import "@radix-ui/themes/styles.css";
import "@@/assets/styles/globals.css";
import { WindowProvider } from "@@src/context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"font-body"}>
        <Theme appearance="dark">
          <WindowProvider
            breakpoints={{
              isLandScape: 1104,
              isLgVertical: 1104,
            }}
          >
            <header className="flex justify-center fixed  bg-[#111113] z-40 w-full py-16 px-24 md:px-32 xl:px-1">
              <Header />
            </header>
            <main className="px-24 md:px-32 xl:px-1">{children}</main>
            <footer className="py-28 px-24 md:px-32 xl:px-1">
              <Footer />
            </footer>
          </WindowProvider>
        </Theme>
      </body>
    </html>
  );
}
