import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { HeadingText, ColorText, DescriptionText2 } from "../../commoncomponent/Text";
import { useWindowSize } from "../../../hooks";
import { getAssetUrl } from "../../../util/SiteUtil";
import Image from "next/image";

import CTAMyfinance from "../../dashboard/component";

const Coverage = () => {
    const { mobileView } = useWindowSize();
    const { t } = useTranslation("homepage");

    return (


        <Grid
            container
            mt={"0px"}
            p={"24px"}
            flexWrap={["wrap", "wrap", "nowrap"]}
            alignItems={mobileView ? "center" : "left"}
            pt={["0px", "0px", "0px"]}
            xs={12}

        >
            <Grid item flexDirection={"column"} alignItems={mobileView ? "center" : "left"} xs={12}>
                <Grid item xs={12} mt={["40px", "40px", "10px"]}>
                    <HeadingText
                        textsize={mobileView ? "32px" : "48px"}
                        align={mobileView ? "center" : "left"}
                        justifyContent={mobileView ? "center" : "left"}>

                        {t("titleBank")} <ColorText style={{ lineHeight: "130%", fontWeight: 400, color: "#C0C0C0" }}> {t("titleBankB")}</ColorText>
                    </HeadingText>
                </Grid>
                <Box display={"flex"} mt={"20px"} alignSelf={"stretch"} justifyContent={mobileView ? "center" : "left"}>

                    <DescriptionText2 align={mobileView ? "center" : "left"} textcolor="#838383" textsize={mobileView ? "24px" : "32px"}>
                        {t("descBank")}
                    </DescriptionText2 >
                </Box>
                <Box gap={"15px"}
                    display={"flex"}
                    mt={"20px"}
                    alignItems={mobileView ? "center" : "left"}
                    justifyContent={mobileView ? "center" : "left"}>
                    <CTAMyfinance />
                </Box>
            </Grid>





            {mobileView ? (<>
                <Grid item xs={12}
                    p={"24px"}>
                    <img
                        src={getAssetUrl("redesign/banks-mobile.webp")}
                        alt="affordify"
                    />
                </Grid>
            </>)
                :
                (<>
                    <Box
                        mt={"0px"}
                        position={"relative"}
                        height={"300px"}
                        width={"300px"}

                    >
                        <Image
                            src={getAssetUrl("redesign/Banks-desktop.webp")}
                            layout="fill"
                            objectFit="contain"
                            alt="affordify"
                        />
                    </Box >
                </>)}
        </Grid >
    );
};

export default Coverage