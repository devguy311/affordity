import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import { getAssetUrl } from "../../util/SiteUtil";
import { Description1 } from "../commoncomponent/Style";
import { getNavLinks } from "../navbar/util";
import { SoonTagStyle } from "./style";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { resourcesLink } from "./util";
import { useWindowSize } from "../../hooks";
import Divider from "@mui/material/Divider";

const Footer = () => {
  const navigate = useRouter();
  const { t } = useTranslation("navbar");

  const { mobileView } = useWindowSize();

  return (
    <Grid px={"64px"} pt={"97px"} pb={"48px"} container bgcolor={"#000"}>
      <Grid item xs={12}>
        <Box position={"relative"} height={"32px"} width={"139px"}>
          <Image
            alt="lifecycle"
            src={getAssetUrl("redesign/whitelogo.svg")}
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Grid>
      <Grid item xs={12} mt={"35px"}>
        <Grid container spacing={"20px"}>
          <Grid item xs={12} md={7}>
            <Description1 textAlign={"left"} textcolor="#fff">
              Applications
            </Description1>
            <Grid container mt={"20px"}>
              {getNavLinks(t, false)?.allNavLinks?.map((link) =>
                link.nestedLinks.map((item) => (
                  <Grid item xs={12} md={4} key={item.label}>
                    <Description1
                      onClick={() => navigate.push(item.url)}
                      gap={"10px"}
                      alignItems={"center"}
                      display={"flex"}
                      textsize={"14px"}
                      style={{
                        fontWeight: 300,
                        lineHeight: "40px",
                        cursor: "pointer",
                      }}
                      textcolor={"rgba(255, 255, 255, 0.7)"}
                    >
                      {item.label}{" "}
                      {item.isSoon && (
                        <SoonTagStyle px={"7px"} py={"3px"}>
                          {t("soon")}
                        </SoonTagStyle>
                      )}
                    </Description1>
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Description1 textAlign={"left"} textcolor="#fff">
              {t("resources")}
            </Description1>
            <Grid container mt={"20px"}>
              {resourcesLink(t)?.map((item) => (
                <Grid item xs={12} md={6} key={item.label}>
                  <Description1
                    onClick={() => navigate.push(item.url)}
                    gap={"10px"}
                    alignItems={"center"}
                    display={"flex"}
                    textsize={"14px"}
                    style={{
                      fontWeight: 300,
                      lineHeight: "40px",
                      cursor: "pointer",
                    }}
                    textcolor={"rgba(255, 255, 255, 0.7)"}
                  >
                    {item.label}{" "}
                  </Description1>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {mobileView && (
            <Grid my={"40px"} item xs={12}>
              <Divider
                style={{
                  borderColor: "rgba(255, 255, 255, 0.25)",
                }}
              />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            md={1}
            display={"flex"}
            flexDirection={"column-reverse"}
          >
            <Box
              display={"flex"}
              gap={["20px", "20px", "0px"]}
              justifyContent={["center", "center", "space-between"]}
            >
              <Box
                style={{ cursor: "pointer" }}
                position={"relative"}
                height={"18.1px"}
                width={"10.46px"}
              >
                <Image
                  src={getAssetUrl("redesign/fb_white.webp")}
                  layout="fill"
                  objectFit="contain"
                  alt={"facebook"}
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/affordify.io",
                      "_blank"
                    )
                  }
                />
              </Box>
              <Box
                style={{ cursor: "pointer" }}
                position={"relative"}
                height={"18.06px"}
                width={"18.06px"}
              >
                <Image
                  src={getAssetUrl("redesign/insta_white.webp")}
                  layout="fill"
                  objectFit="contain"
                  alt={"instagram"}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/affordify.io/",
                      "_blank"
                    )
                  }
                />
              </Box>
              <Box
                position={"relative"}
                height={"18.06px"}
                width={"21.68px"}
              >
                {/* <Image
                  src={getAssetUrl("redesign/twitter.webp")}
                  layout="fill"
                  objectFit="contain"
                  alt={"twitter"}
                  onClick={() =>
                    window.open("https://twitter.com/affordify_io", "_blank")
                  }
                /> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={"59px"}>
        <Description1
          textsize="12px"
          style={{ fontWeight: 300 }}
          textcolor="rgba(255, 255, 255, 0.3);"
        >
          Affordify together with its logo is a brand owned by Blue Lantern LLC.
          Blue Lantern LLC is registered in Switzerland.
        </Description1>
      </Grid>
      <Grid item xs={12}>
        <Description1
          textsize="12px"
          style={{ fontWeight: 300 }}
          textcolor="rgba(255, 255, 255, 0.3);"
        >
          ©️ Affordify 2023. All rights reserved
        </Description1>
      </Grid>
    </Grid>
  );
};

export default Footer;
