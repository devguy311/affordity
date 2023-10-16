import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks";
import { useState } from "react";
import { SoonTagStyle } from "../../footer/style";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { selectLanguage } from "../../../redux/language";

import Essentials from "./Essentials";

const Essentials2 = () => {
  const ruleRef = useRef<HTMLDivElement | null>(null);
  const { mobileView, tabView } = useWindowSize();
  const [selectedRule, setSelectedRule] = useState("Timeline");
  const { t } = useTranslation("homepage");
  const { lang } = useSelector(selectLanguage);
  return (
    <>
      <Grid
        container
        mb={"100px"}
        px={["20px", "64px"]}
        pt={"58px"}
        columnSpacing={"59px"}
      >
        <Grid
          item
          display={["none", "none", "block"]}
          maxWidth={["100%", "100%", "30%"]}
        ></Grid>

        <Grid item xs={12} mt={"0px"}>
          <Box display={"flex"} gap={"40px"} justifyContent={"center"}>
            <DescriptionText2
              onClick={() => {
                setSelectedRule("Timeline");
                ruleRef.current?.scroll({
                  behavior: "smooth",
                  left: 0,
                });
              }}
              textsize={mobileView ? "14px" : "18px"}
              textcolor={
                selectedRule === "Timeline" ? "#000" : "rgba(0, 0, 0, 0.50)"
              }
              textweight={500}
              style={{ cursor: "pointer" }}
            >

              {t("tab1")}

            </DescriptionText2>
            <DescriptionText2
              onClick={() => {
                setSelectedRule("GoalTracking");
                ruleRef.current?.scroll({
                  behavior: "smooth",
                  left: mobileView
                    ? ruleRef.current.offsetWidth
                    : ruleRef.current.offsetWidth / 3,
                });
              }}
              textsize={mobileView ? "14px" : "18px"}
              textcolor={
                selectedRule === "GoalTracking" ? "#000" : "rgba(0, 0, 0, 0.50)"
              }
              textweight={500}
              style={{ cursor: "pointer" }}
            >
              {t("tab2")}
              <SoonTagStyle px={"0px"} py={"3px"}>
                {t("soon")}
              </SoonTagStyle>
            </DescriptionText2>
            <DescriptionText2
              onClick={() => {
                setSelectedRule("Benchmarking");
                ruleRef.current?.scroll({
                  behavior: "smooth",
                  left: ruleRef.current.scrollWidth,
                });
              }}
              textsize={mobileView ? "14px" : "18px"}
              textcolor={
                selectedRule === "Benchmarking" ? "#000" : "rgba(0, 0, 0, 0.50)"
              }
              textweight={500}
              style={{ cursor: "pointer" }}
            >
              {t("tab3")}
              <SoonTagStyle px={"0px"} py={"3px"}>
                {t("soon")}
              </SoonTagStyle>
            </DescriptionText2>
          </Box>
        </Grid>
        <Grid item xs={12} mt={"50px"}>
          <Box display={"flex"} ref={ruleRef} gap={"44px"} overflow={"hidden"}>
            <Box
              width={mobileView ? `${window.innerWidth - 40}px` : "894px"}
              height={"100%"}
            >
              <Essentials
                title={t("essentialTitle1")}
                description={t("essentialDesc1")}
                image={
                  lang == "en"
                    ? "redesign/essential-graph-1.webp"
                    : "redesign/essential-graph-1-fr.webp"
                }
              />
            </Box>
            <Box
              width={mobileView ? `${window.innerWidth - 40}px` : "894px"}
              height={"100%"}
            >
              <Essentials
                title={t("essentialTitle2")}
                description={t("essentialDesc2")}
                image={
                  lang == "en"
                    ? "redesign/essential-graph-2.webp"
                    : "redesign/essential-graph-2-fr.webp"
                }
              />
            </Box>
            <Box
              width={mobileView ? `${window.innerWidth - 40}px` : "894px"}
              height={"100%"}
            >
              <Essentials
                title={t("essentialTitle3")}
                description={t("essentialDesc3")}
                image={
                  lang == "en"
                    ? "redesign/essential-graph-3.webp"
                    : "redesign/essential-graph-3-fr.webp"
                }
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Essentials2;
