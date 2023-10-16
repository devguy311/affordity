import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../hooks";
import { UserCases } from "./util";
import { Description1, Heading1 } from "../commoncomponent/Style";
import Image from "next/image";
import { getAssetUrl } from "../../util/SiteUtil";


import Styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LargeCard = Styled(Box)`
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 24px 24px 32px 42px;
    align-items: flex-start;
    gap: 20px;
    flex-shrink: 0;

    @media (max-width: 900px) {
        display: flex;

        height: 680px;
        width: fit-content;
        height: fit-content;
        padding: 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0px;


    }
`;


const UseCase = () => {
    const { t } = useTranslation("dashboardOverview");
    const { mobileView } = useWindowSize();
    return (

        <LargeCard >
            {/* <Box display={"flex"} gap={"50px"} alignItems={"center"}> */}
            <Grid container gap={["20px", "80px"]}>
                <Grid
                    item
                    xs={12}
                    md={4}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"5px"}
                    flexShrink={0}
                    ml={"10px"}
                >
                    {UserCases(t).map((item) => (
                        <Grid item key={item.id}>
                            <Grid display={"flex"} justifyContent={"left"} item xs={12}>
                                <Heading1 mt={"16px"} textsize="14px" textAlign={"left"}>
                                    {item.title}
                                </Heading1>
                            </Grid>
                            <Grid display={"flex"} justifyContent={"left"} item xs={12}>
                                <Description1 mt={"8px"} textsize="14px" align='left' textcolor="rgba(0, 0, 0, 0.50)">
                                    {item.description}
                                </Description1>
                            </Grid>
                        </Grid>

                    ))}
                </Grid>

                <Box width={["100%", "574px"]} height={mobileView ? "204px" : "374px"} position={"relative"} mt={["0px", "20px"]} >

                    <Image
                        alt={"interactive charts"}
                        src={getAssetUrl("/redesign/chart-2.webp")}
                        layout="fill"
                        objectFit="contain"
                    />
                </Box>
            </Grid >

            {/* </Box> */}

        </LargeCard >

    );
};

export default UseCase;
