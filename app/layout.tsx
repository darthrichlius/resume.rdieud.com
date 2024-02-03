import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import NextScript from "next/script";

import { Header, Footer } from "@@src/components";

import "@radix-ui/themes/styles.css";
import "@@/assets/styles/globals.css";
import { WindowProvider } from "@@src/context";
import { appExtendedThemeParams } from "@@/config/params";

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
        <NextScript
          id="HotjarAnalytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3852158,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </body>
    </html>
  );
}
