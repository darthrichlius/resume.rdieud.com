import React from "react";
import NextScript from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <NextScript
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-97L94XESNS"
      />
      <NextScript id="GoogleAnalytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-97L94XESNS');
        `}
      </NextScript>
    </>
  );
};

export default GoogleAnalyticsScript;
