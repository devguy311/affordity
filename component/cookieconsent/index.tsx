/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import CookieConsentApp from "react-cookie-consent";
import { setAnalyticsCollectionEnabled } from "firebase/analytics";
import { analytics } from "../../firebase/index";
import Link from "next/link";

export default function CookieConsent() {
    const [cookies, setCookie] = useCookies(["analyticsConsent"]);

    useEffect(() => {
        analytics && setAnalyticsCollectionEnabled(analytics, true);
    }, []);

    const handleAccept = () => {
        setCookie("analyticsConsent", true);
        analytics && setAnalyticsCollectionEnabled(analytics, true);
    };

    const handleDecline = () => {
        setCookie("analyticsConsent", false);

        analytics && setAnalyticsCollectionEnabled(analytics, false);

        setCookie("analyticsConsent", null);
    };
    const { t } = useTranslation("common");

    return (
        <CookieConsentApp
            location="bottom"
            declineButtonText={t("cookieDecline")}
            buttonText={t("cookieAccept")}
            cookieName="analyticsConsent"
            style={{
                background: "#ffffff",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            }}

            declineButtonStyle={{
                background: "#ffffff",
                color: "#C93716",
                fontWeight: 400,
                fontSize: "14px",
                borderRadius: "32px",
                padding: "8px 20px",
            }}

            buttonStyle={{
                background: "#000",
                color: "white",
                fontWeight: 600,
                fontSize: "14px",
                borderRadius: "32px",
                padding: "8px 20px",
            }}

            expires={150}
            enableDeclineButton
            onAccept={handleAccept}
            onDecline={handleDecline}

        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    color: "#000000",
                }}
            >
                <h1 style={{ fontSize: "18px", fontWeight: 700, textAlign: "left" }}>
                    {t("cookieTitle")}
                </h1>

                <p style={{ fontSize: "14px" }}>
                    {t("cookieDescription")} <Link href={"/privacy"}>{t("cookieyButton")}</Link>
                </p>
            </div>
        </CookieConsentApp>
    );
}
