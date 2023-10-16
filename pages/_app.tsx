import { Provider } from "react-redux";
import { useRouter } from "next/router";

import "../styles/globals.css";
import { I18nextProvider } from "react-i18next";
import { store } from "../redux/store";
import i18n from "../util/i18n";
import { Suspense, useEffect } from "react";
import Authentication from "../component/auth";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: any) {

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const handleRouteChange = () => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: "pageview" });
    }
  };

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback="...">
          <Authentication>
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-W4J436G');
              `}
            </Script>

            <Component {...pageProps} />
            <Analytics />
          </Authentication>
        </Suspense>
      </I18nextProvider>
    </Provider>
  );
}

export default MyApp;
