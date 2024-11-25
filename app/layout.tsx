import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";

import { Header, Footer } from "@@src/components";

import "@radix-ui/themes/styles.css";
import "@@/assets/styles/globals.css";
import { WindowProvider } from "@@src/context";
import { appExtendedThemeParams } from "@@/config/params";
import { GoogleAnalyticsScript, HotjarAnalyticsScript, ABTastyTagScript } from "@@src/scripts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ABTastyTagScript />
      <GoogleAnalyticsScript />
      <HotjarAnalyticsScript />
      <body className={"font-body"}>
        <Theme appearance="dark">
          <WindowProvider
            breakpoints={{
              isLandScape: parseInt(appExtendedThemeParams.screens.lg),
              isLgVertical: parseInt(appExtendedThemeParams.screens.lg),
            }}
          >
            <header className="flex justify-center fixed  bg-[#111113] z-40 w-full py-16 px-24 md:px-32 xl:px-1">
              <Header />
            </header>
            <main className="px-24 md:px-32 xl:px-1">{children}</main>
            <footer className="pt-28 px-0 md:px-32 xl:px-1">
              <Footer />
            </footer>
          </WindowProvider>
        </Theme>
        <Toaster />
      </body>
    </html>
  );
}
