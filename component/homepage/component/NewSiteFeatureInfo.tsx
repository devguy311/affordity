/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { SiteFeatureType } from "../type";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Description1, Heading1 } from "../../commoncomponent/Style";
import Image from "next/image";
import { getAssetUrl } from "../../../util/SiteUtil";
import styled from "@emotion/styled";



type SiteFeatureInfoProps = {
  title: string;
  description: string;
  info: SiteFeatureType[];
  isMobile: boolean;
  navigateTo: (url: string) => void;
  notHomePage?: boolean;
};


export const CardContainer = styled(Box) <any>`
  background-image: ${(props) =>
    `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`};
  border-radius: 16px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 432px;
  cursor: pointer;
  &:hover {
    background-image: ${(props) => `url(${props.bgimage})`};
    transition: transform .3s;
    transform: scale(1.05);
  }
`;

const SiteFeatureInfo: FC<SiteFeatureInfoProps> = ({

  description,
  info,
  title,
  isMobile,
  navigateTo,
  notHomePage = false,
}) => {
  const { t } = useTranslation("homepage");
  return (

    <Grid container mt={["64px", "64px", "120px"]} justifyContent={"center"}>
      <Grid item xs={10} md={12}>
        <Description1 textAlign={"left"} textcolor="##878787" textweight="500" >
          {title.toUpperCase()}
        </Description1>
        <Heading1
          textsize={notHomePage ? "32px" : undefined}
          textAlign={"left"}
          mt={"15px"}
        >
          {description}
        </Heading1>
      </Grid>
      <Grid item xs={12} p={"16px"} width={["300px", "350px", "350px"]}>
        <Box>

          <Grid
            container
            flexWrap={["nowrap", "nowrap"]}
            rowSpacing={"40px"}
            overflow={["auto", "auto", "inherit"]}
            gap={["20px", "40px", "0px"]}
            alignItems={"stretch"}
          >
            {info.map((item) => (
              <Grid item xs={12} display={"flex"}>
                <CardContainer
                  p={"24px"}
                  bgimage={item.backImage}
                  // width={["100%", "331px"]}
                  width="300px"
                  maxWidth="330px"
                  key={item.id}
                  onClick={() => item.url && navigateTo(item.url)}
                  display={"flex"}
                  gap={1}
                  xs={12}
                >
                  <Grid
                    container
                    height={"100%"}
                    // width={["100%", "331px"]}
                    flexDirection={["row", "row", "column"]}
                    justifyContent={"space-between"}
                  >
                    <Grid
                      display={"flex"}
                      justifyContent={"center"}
                      item
                      // width={["300px"]}
                      mt={"48px"}
                    >
                      <Box position={"relative"} width={"40px"} height={"40px"}>
                        <Image
                          alt="lifecycle"
                          src={item.logo}
                          layout="fill"
                          objectFit="contain"
                        />
                      </Box>
                    </Grid>
                    <Grid item>
                      <Description1
                        align={isMobile ? "left" : "center"}
                        textcolor="#fff"
                      >
                        {item.title}
                      </Description1>
                      <Description1
                        align={isMobile ? "left" : "center"}
                        textsize="14px"
                        textcolor="rgba(255, 255, 255, 0.8)"
                        textweight="500"
                      >
                        {item.description}
                      </Description1>
                      <Box mt={isMobile ? "50px" : "10px"}>
                        <Description1
                          display={"flex"}
                          textsize="14px"
                          textcolor="#fff"
                          style={{ cursor: "pointer" }}
                          onClick={() => item.url && navigateTo(item.url)}

                        >
                          {t("learnMore")}{" "}
                          <img
                            src={getAssetUrl("redesign/arrowleft.svg")}
                            alt={"arrowleft"}
                          />
                        </Description1>
                      </Box>
                    </Grid>
                  </Grid>

                </CardContainer>
              </Grid>
            ))}

          </Grid>


        </Box >

      </Grid >
    </Grid >

  );
};

export default SiteFeatureInfo;
