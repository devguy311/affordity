import Box from "@mui/material/Box";
import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useWindowSize } from "../../hooks";
import { PrimaryButton2 } from "../commoncomponent/Style";
import { ChevronRight } from "@mui/icons-material";
import { toggleSignupModal } from "../../redux/auth";
import { selectAuth } from "../../redux/auth";
import { useAppSelector } from "../../redux/hooks";
import va from '@vercel/analytics';



const CTAMyfinance = () => {
    const { mobileView } = useWindowSize();
    const navigate = useRouter();
    const { auth, user } = useAppSelector(selectAuth);
    const dispatch = useDispatch();
    const { t } = useTranslation("dashboardOverview");
    const isActive = user?.subscription?.status === "active" || user?.subscription?.status === "trialing";

    if (auth.authenticated) {
        if (isActive) {
            return <Box display={"flex"} justifyContent={mobileView ? "center" : "flex-start"}>
                {user?.powensConnection ? (
                    <>
                        <PrimaryButton2 onClick={() => {
                            va.track("dashboard", { location: "CTAMyfinance" });
                            if (window.dataLayer) {
                                window.dataLayer.push({ event: "dashboard" });
                            }
                            navigate.push("/myfinance");
                        }}
                            textsize={mobileView ? "14px" : "16px"}
                        >
                            {t("button3")} <ChevronRight style={{ fontSize: 18 }} />
                        </PrimaryButton2>
                    </>
                ) : (
                    <>
                        <PrimaryButton2 onClick={() => {
                            va.track("connect-bank", { location: "CTAMyfinance" });
                            if (window.dataLayer) {
                                window.dataLayer.push({ event: "bank-connection" });
                            }
                            navigate.push("/myfinance");
                        }}
                            textsize={mobileView ? "14px" : "16px"}
                        >
                            {t("button2")} <ChevronRight style={{ fontSize: 18 }} />
                        </PrimaryButton2>
                    </>
                )}
            </Box>
        }
        else {
            return <Box display={"flex"} justifyContent={mobileView ? "center" : "flex-start"}>
                <>
                    <PrimaryButton2 onClick={() => {
                        va.track("stripe-subscription", { location: "CTAMyfinance" });
                        if (window.dataLayer) {
                            window.dataLayer.push({ event: "stripe-subscription" });
                        }
                        navigate.push("/myfinance");
                    }}
                        textsize={mobileView ? "14px" : "16px"}
                    >
                        {t("button")} <ChevronRight style={{ fontSize: 18 }} />
                    </PrimaryButton2>
                </>
            </Box>

        }
    } else {
        return <Box display={"flex"} justifyContent={mobileView ? "center" : "flex-start"}>

            <PrimaryButton2 onClick={() => {
                if (window.dataLayer) {
                    window.dataLayer.push({ event: "click-sign-up" });
                }
                dispatch(toggleSignupModal());
            }}
                textsize={mobileView ? "14px" : "15px"}
            >
                {t("button")} <ChevronRight style={{ fontSize: 16 }} />
            </PrimaryButton2>
        </Box>

    }

};

export default CTAMyfinance