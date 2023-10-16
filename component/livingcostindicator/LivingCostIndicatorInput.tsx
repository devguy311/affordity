import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../../util/SiteUtil";
import Image from "next/image";
import { useWindowSize } from "../../hooks";
import LivingForm from "./component/LivingForm";
import { livingCostFormHelpData } from "./util";
import { DescriptionText2 } from "../commoncomponent/Text";

const LivingCostIndicatorInput = () => {
    const { mobileView } = useWindowSize();
    const { t } = useTranslation("livingcostindicator");
    return (
        <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
            <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
                <Grid container columnSpacing={"80px"}>
                    <Grid item xs={12} mt={"35px"} mb={"42px"}>
                        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                            <Box width={"24px"} height={"24px"} position={"relative"}>
                                <Image

                                    alt={"Living Costs Indicator"}
                                    src={getAssetUrl("/redesign/livingcostindicator_32_black.svg")}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </Box>
                            <DescriptionText2 textweight={700}>
                                {t("header")}
                            </DescriptionText2>

                        </Box>
                    </Grid>
                    <Grid item xs={12} px={"24px"} pb={"120px"}>
                        <LivingForm
                            helpData={livingCostFormHelpData(t)}
                            hideShoppingHelp={mobileView}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default LivingCostIndicatorInput;