import React, { FC } from "react";
import Box from "@mui/material/Box";
import { PresentationType } from "../type";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { useWindowSize } from "../../../hooks";
import { Description1, Heading1 } from "../../commoncomponent/Style";

type FeatureCardProps = {
    info: PresentationType;
};
const PresentCard: FC<FeatureCardProps> = ({ info }) => {
    const { mobileView } = useWindowSize();
    return (
        <Grid container style={{
            display: 'flex',
            width: "330px",
            padding: 24,
            height: "301px",

            alignItems: 'flex-start',
            gap: 20,
            alignSelf: "stretch",
            borderRadius: 16,
            border: '1px solid rgba(0, 0, 0, 0.1)',
            background: '#FFF',

        }}>

            <Grid item xs={12} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} alignSelf={"stretch"} gap={"8px"}  >
                <Grid item xs={12} display={"flex"} alignItems={"flex-end"} gap={"16px"}  >
                    <Box position={"relative"} width={"45px"} height={"45px"} >
                        <Image
                            alt={info.title}
                            src={info.icon_0}
                            layout="fill"
                            objectFit="contain"
                        />
                    </Box>
                    <Heading1 mt={"0px"} textsize={mobileView ? "18px" : "30px"} textAlign={"left"} style={{ fontSize: '24px', fontStyle: "normal", fontWeight: 700 }}>
                        {info.title}
                    </Heading1>

                </Grid>

                <Description1 textsize="14px" textcolor="rgba(0, 0, 0, 0.60)" fontWeight={300} fontStyle={"normal"}>
                    {info.subTitle}
                </Description1>
            </Grid>
            <Grid container display={"flex"} alignItems={"flex-tstart"} gap={"24px"} alignSelf={"stretch"}>
                <Grid display={"flex"} alignItems={"center"} alignSelf={"stretch"} gap={"8px"} item xs={12}>
                    <Box position={"relative"} width={"20px"} height={"20px"} >
                        <Image
                            alt={info.title}
                            src={info.icon_1}
                            layout="fill"
                            objectFit="contain"
                        />
                    </Box>
                    <Grid item xs={12} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} >
                        <Heading1 mt={"8px"} textsize="14px" textAlign={"left"}>
                            {info.title1}
                        </Heading1>
                    </Grid>
                </Grid>

                <Grid display={"flex"} alignItems={"center"} alignSelf={"stretch"} gap={"8px"} item xs={12}>
                    <Box position={"relative"} width={"20px"} height={"20px"} >
                        <Image
                            alt={info.title}
                            src={info.icon_2}
                            layout="fill"
                            objectFit="contain"
                        />
                    </Box>
                    <Grid item xs={12} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} >
                        <Heading1 mt={"8px"} textsize="14px" textAlign={"left"}>
                            {info.title2}
                        </Heading1>

                    </Grid>
                </Grid>

                <Grid display={"flex"} alignItems={"center"} alignSelf={"stretch"} gap={"8px"} item xs={12}>
                    <Box position={"relative"} width={"20px"} height={"20px"} >
                        <Image
                            alt={info.title}
                            src={info.icon_3}
                            layout="fill"
                            objectFit="contain"
                        />
                    </Box>
                    <Grid item xs={12} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} >
                        <Heading1 mt={"8px"} textsize="14px" textAlign={"left"}>
                            {info.title3}
                        </Heading1>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>

    );
};

export default PresentCard;
