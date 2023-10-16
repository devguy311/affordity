/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { Description1, HomepageHeader, SecondaryButton1 } from "../../commoncomponent/Style";
import { useRouter } from "next/router";
import { useWindowSize } from "../../../hooks";
import CTAMyfinance from "../../dashboard/component";

const Header = () => {
  const router = useRouter();
  const { mobileView } = useWindowSize();
  const { t } = useTranslation("homepage");
  return (
    <>
      <Grid
        container
        columnSpacing={["0px", "0px", "79px"]}
        mt={"0px"}
        p={"24px"}
        pb={"80px"}
        height={"100%"}
        gap={"40px"}
        flexWrap={["wrap", "wrap", "nowrap"]}
        alignItems={"center"}
        pt={["0px", "0px", "0px"]}

      >
        <Grid item xs={12} mt={["40px", "40px", "80px"]}>
          <HomepageHeader textsize={mobileView ? "28px" : "56px"} align="center"  >
            {t("headingTitle")}
          </HomepageHeader>
          <Box display={"flex"} mt={"0px"} justifyContent={"center"}>
            <Box width={["100%", "100%", "60%"]}>
              <Description1 align="center" mt={"30px"} textcolor="rgba(0, 0, 0, 0.75)">
                {t("headingDescription")}
              </Description1>
            </Box>
          </Box>
          <Box
            gap={"15px"}
            display={"flex"}
            mt={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={["wrap", "wrap", "nowrap"]}
          >
            <CTAMyfinance />


            <SecondaryButton1 style={{ cursor: "pointer" }} onClick={() => { router.push("/myfinance-overview"); }}>
              {t("learnMore")}
            </SecondaryButton1>


          </Box>
        </Grid>
      </Grid >
    </>
  );
};

export default Header;