/* eslint-disable @next/next/no-css-tags */

import { ServerStyleSheets } from "@mui/styles";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import Script from "next/script";
import React from "react";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.getStyleElement(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      Object.seal(sheet);
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="facebook-domain-verification"
            content="y58jzlt8mepdjvsb79ygo42mulu6z2"
          />

          <link rel="icon" href="/favicons/favicon.ico" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link
            rel="favicon-180x180"
            sizes="180x180"
            href="/favicons/favicon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          {/* <link rel="manifest" href="/site.webmanifest" /> */}

          {/* <!-- LANDING PAGE css START --> */}
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/icofont.css" />
          <link rel="stylesheet" href="/css/meanmenu.min.css" />
          {/* <!-- <link rel="stylesheet" href="/css/slick.css" />--> */}

          {/* <!-- <link rel="stylesheet" href="/css/magnific-popup.css" />--> */}
          <link rel="stylesheet" href="/css/animated-headlines.css" />
          <link rel="stylesheet" href="/css/shortcode/shortcodes.css" />

          <link rel="stylesheet" href="/css/responsive.css" />
          {/* <!-- LANDING PAGE css END --> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
            integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />

          {/* google tag manager */}
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-W4J436G" />
          <script id={"gtag"} dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag() {dataLayer.push(arguments);} gtag("js", new Date());`}} /> */}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "affordify",
                "url": "https://affordify.io",
                "logo": "",
                "sameAs": [
                  "https://www.facebook.com/affordify.io",
                  "https://www.instagram.com/affordify.io/",
                  "https://www.linkedin.com/company/affordify/"
                ]
                }`,
            }}
            id={"application/ld+json"}
          />
          <script
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `!(function(c, h, i, m, p) {
      (m = c.createElement(h)),
        (p = c.getElementsByTagName(h)[0]),
        (m.async = 1),
        (m.src = i),
        p.parentNode.insertBefore(m, p);
    })(
      document,
      'script',
      'https://chimpstatic.com/mcjs-connected/js/users/de81dc15aedad1e49103592f0/6e7cca71e5008f596a0452ef0.js'
    );`,
            }}
          />

          <script async src="https://js.stripe.com/v3/pricing-table.js" />

          {/* <!-- Meta Pixel Code --> */}
          <script
            id="Meta-pixel"
            dangerouslySetInnerHTML={{
              __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '286533540983079');
          fbq('track', 'PageView');`,
            }}
          />

          <noscript
            id="Meta-pixel-2"
            dangerouslySetInnerHTML={{
              __html: ` <noscript><img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=286533540983079&ev=PageView&noscript=1"
              /></noscript>`,
            }} />

          {/* <!-- End Meta Pixel Code --> */}


        </Head>
        <body>
          <Main />
          <NextScript />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W4J436G" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </body>
      </Html>
    );
  }
}
