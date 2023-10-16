import React, { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks";
import { getAssetUrl } from "../../../util/SiteUtil";
import Image from "next/image";
import { Description1, Heading1 } from "../../commoncomponent/Style";
import Styled from "@emotion/styled";

type EssentialsProps = {
    title: string;
    description: string;
    image: string;
};

export const LargeCard = Styled(Box)`
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 0px 8px 0px 24px;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;

    @media (max-width: 900px) {
        display: flex;

        height: 680px;
        width: fit-content;
        height: fit-content;
        padding:  16px 16px 16px 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0px;


    }
`;


const Essentials: FC<EssentialsProps> = ({
    title,
    description,
    image,

}) => {

    const { t } = useTranslation("homepage");
    const { mobileView } = useWindowSize();

    return (

        <LargeCard >


            <Grid
                container
                xs={12}
                display={"flex"}
                alignItems={"center"}
                flexWrap={["wrap", "wrap", "nowrap"]} >
                <Grid item display="flex" width="288px" height="195px" flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"16px"} flexShrink={0} >
                    <Grid display={"flex"} justifyContent={"left"} item xs={12}>
                        <Heading1 mt={"16px"} textsize="24px" textweight="700" textAlign={"left"}>
                            {title}
                        </Heading1>
                    </Grid>
                    <Grid display={"flex"} justifyContent={"left"} item xs={12}>
                        <Description1 mt={"8px"} textsize="14px" textweight="500" style={{ color: "rgba(0, 0, 0, 0.41)" }} align='left' textcolor="rgba(0, 0, 0, 0.50)">
                            {description}
                        </Description1>
                    </Grid>
                </Grid>


                <Box width={["100%", "326px"]} height={mobileView ? "254px" : "333px"} position={"relative"} mt={["20px", "20px"]} >

                    <Image
                        alt={"essential charts"}
                        src={getAssetUrl(image)}
                        layout="fill"
                        objectFit="contain"
                    />
                </Box>
            </Grid >
        </LargeCard >

    );
};

export default Essentials;