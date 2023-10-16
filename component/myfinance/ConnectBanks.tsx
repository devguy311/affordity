import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useWindowSize } from "../../hooks";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../../util/SiteUtil";
import { DescriptionText2 } from "../commoncomponent/Text";
import { Description1 } from "../commoncomponent/Style";
import { LinkButton } from "../commoncomponent/Button";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import va from '@vercel/analytics';

import { getWebViewRedirectURL } from "./util";

const ConnectBanks = () => {
  const { t } = useTranslation("dashboardResult");
  const { mobileView } = useWindowSize();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {

    try {
      setIsLoading(true);

      toast.loading("loading...", {
        position: "bottom-right",
      });

      if (window.dataLayer) {
        window.dataLayer.push({ event: "bank-connection" });
      }
      va.track("connect-bank", { location: "/myfinance" });


      const response = await getWebViewRedirectURL();

      toast.dismiss();
      toast.loading("Redirecting...", {
        position: "bottom-right",
      });



      router.push(response.webview_url);
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message, {
        position: "bottom-right",
      });
    } finally {
      toast.dismiss();
      setIsLoading(false);
    }
  };

  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid
        mb={"15vh"}
        mt={"114px"}
        px={"24px"}
        item
        maxWidth={["100%", "1144px"]}
      >
        <Box height={"275px"} position={"relative"}>
          <Image
            alt={"My Budget"}
            src={getAssetUrl("/redesign/finance_circle.webp")}
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box width={"100%"} mt={"40px"}>
          <DescriptionText2
            style={{ lineHeight: "140%" }}
            align="center"
            textsize={mobileView ? "32px" : "48px"}
            textweight={600}
          >
            {t("connectTitleA")}{" "}
            <span style={{ color: "#4B8F8F" }}>{t("connectTitleB")}</span>
          </DescriptionText2>
          <LinkButton
            style={{
              background: "#4B8F8F",
              color: "#fff",
              marginTop: 40,
            }}
            // onClick={() => navigate.push("/finance-result")}
            disabled={isLoading}
            onClick={handleClick}>
            {t("connectButton")} <ChevronRightSharpIcon />
          </LinkButton>
          <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
            <DescriptionText2
              width={"350px"}
              mt={"40px"}
              textcolor="#4F5459"
              align="center"
              textsize="14px"
              textweight={400}
            >
              {t("connectDescription")}
              <span
                style={{
                  fontWeight: 700,
                  cursor: "pointer",
                  marginRight: 5,
                }}
                onClick={() =>
                  window.open(
                    "https://www.powens.com/privacy-policy/",
                    "_blank"
                  )
                }
              >
                {t("powensRead")}
              </span>
            </DescriptionText2>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ConnectBanks;
