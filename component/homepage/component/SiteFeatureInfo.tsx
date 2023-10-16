/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { SiteFeatureType } from "../type";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Description1, Heading1 } from "../../commoncomponent/Style";
import { SiteFeatureCardContainer } from "../style";
import Image from "next/image";
import { getAssetUrl } from "../../../util/SiteUtil";
import { Divider } from "@mui/material";

type SiteFeatureInfoProps = {
  title: string;
  description: string;
  info: SiteFeatureType[];
  isMobile: boolean;
  navigateTo: (url: string) => void;
  notHomePage?: boolean;
};

const SiteFeatureInfo: FC<SiteFeatureInfoProps> = ({
  description,
  info,
  title,
  isMobile,
  navigateTo,
  notHomePage = false,
}) => {
  return (
    <Grid container mt={["64px", "64px", "64px"]} justifyContent={"center"}>
      {isMobile && (
        <Grid item xs={10} my={"32px"}>
          <Divider />
        </Grid>
      )}
      <Grid item xs={10} md={12}>
        <Description1 textAlign={"left"} textcolor="##878787">
          {title.toUpperCase()}
        </Description1>
        <Heading1
          textsize="32px"
          textAlign={"left"}
          mt={"15px"}
        >
          {description}
        </Heading1>
      </Grid>
      <Grid item xs={11} md={12}>
        <Grid
          container
          mt={"30px"}
          gap={"20px"}
          justifyContent={notHomePage ? "flex-start" : "center"}
          flexDirection={"row"}
          overflow={"auto"}
          flexWrap={"nowrap"}
        >
          {info.map((item) => (
            <SiteFeatureCardContainer
              p={"24px"}
              bgimage={item.backImage}
              width={["100%", "331px"]}
              key={item.id}
              onClick={() => item.url && navigateTo(item.url)}>

              <Grid
                container
                height={"100%"}
                width={["100%", "331px"]}
                flexDirection={["row", "row", "column"]}
                justifyContent={"space-between"}
              >
                <Grid
                  display={"flex"}
                  justifyContent={"center"}
                  item
                  width={["300px"]}
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
                      Learn More{" "}
                      <img
                        src={getAssetUrl("redesign/arrowleft.svg")}
                        alt={"arrowleft"}
                      />
                    </Description1>
                  </Box>
                </Grid>
              </Grid>
            </SiteFeatureCardContainer>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SiteFeatureInfo;
