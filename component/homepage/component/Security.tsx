import React, { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks";
import { getAssetUrl } from "../../../util/SiteUtil";
import { Description1, Heading1 } from "../../commoncomponent/Style";
import Styled from "@emotion/styled";

type EssentialsProps = {
  title: string;
  description: string;
  image: string;
};

type LargeContainerCardProps = {
  bgimage: string;
};

export const LargeContainerCard = Styled(Box) <LargeContainerCardProps>`
  background-image:  ${(props) => `url(${getAssetUrl(props.bgimage)})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  display: flex;
  width: 100%;
`;

const Security = () => {
  const { t } = useTranslation("homepage");
  const { mobileView } = useWindowSize();

  return (
    <LargeContainerCard
      bgimage={mobileView ? "redesign/lock-mobile.webp" : "redesign/lock-6.webp"}
      height={["606px", "444px", "444px"]}
      pt={["32px", "32px", "0px"]}
      pr={["32px", "32px", "0px"]}
      pl={"32px"}
    >
      <Grid container xs={12}>
        <Grid
          item
          display="flex"
          width={["100%", "327px"]}
          flexDirection={"column"}
          justifyContent={["flex-start", "center"]}
          alignItems={["center", "flex-start"]}
          gap={"14px"}
          flexShrink={0}
        >
          <Box textAlign={["center", "left"]}>
            <Heading1
              textsize="24px"
              textweight="700"
              textAlign={"inherit"}
              textcolor="#FFF"
            >
              {t("securityTitle1")}
            </Heading1>
            <Description1
              mt={1}
              textsize="14px"
              textweight="500"
              style={{ color: "#FFF", lineHeight: 1.2 }}
              align="inherit"
              textcolor="#FFF"
            >
              {t("securityDesc1")}
            </Description1>
          </Box>

          <Box textAlign={["center", "left"]}>
            <Heading1
              textsize="24px"
              textweight="700"
              textAlign={"inherit"}
              textcolor="#FFF"
            >
              {t("securityTitle2")}
            </Heading1>
            <Description1
              mt={1}
              textsize="14px"
              textweight="500"
              style={{ color: "#FFF", lineHeight: 1.2 }}
              align="inherit"
              textcolor="#FFF"
            >
              {t("securityDesc2")}
            </Description1>
          </Box>

          <Box textAlign={["center", "left"]}>
            <Heading1
              textsize="24px"
              textweight="700"
              textAlign={"inherit"}
              textcolor="#FFF"
            >
              {t("securityTitle3")}
            </Heading1>
            <Description1
              mt={1}
              textsize="14px"
              textweight="500"
              style={{ color: "#FFF", lineHeight: 1.2 }}
              align="inherit"
              textcolor="#FFF"
            >
              {t("securityDesc3")}
            </Description1>
          </Box>
        </Grid>
      </Grid>
    </LargeContainerCard>
  );
};

export default Security;
