import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../../../util/SiteUtil";
import { Heading1 } from "../../commoncomponent/Style";
import AssistantForm from "./component/AssistantForm";
import ReadyToGetStarted from "../../commoncomponent/ReadyToGetStarted";
import { helpData } from "../util";
import { useWindowSize } from "../../../hooks";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import AssistantHelp from "../../commoncomponent/AssistantHelp";
import { useAppSelector } from "../../../redux/hooks";
import { selectAuth } from "../../../redux/auth";


type ShoppingAssistantFormProps = {
  forExtension?: boolean;
};
const ShoppingAssistantForm: FC<ShoppingAssistantFormProps> = ({
  forExtension,
}) => {
  const { mobileView } = useWindowSize();
  const { auth } = useAppSelector(selectAuth);
  const { t } = useTranslation("shoppingassistant");
  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <Grid container columnSpacing={"80px"}>

          <Grid item xs={12} mt={"35px"} mb={"42px"}>
            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={"0px"}>

              <NextImage
                height="20px"
                width="16px"
                alt="Shopping-assistant"
                src={getAssetUrl("/redesign/shopping_black.svg")}
              />
              <DescriptionText2 textweight={700}>
                {t("header")}
              </DescriptionText2>
            </Box>
            <Box mt={"32px"}>
              <Heading1
                style={{ textAlign: "left" }}
                textsize={mobileView ? "24px" : "32px"}
              >
                {t("title")}
              </Heading1>
            </Box>
          </Grid>
          <Grid item xs={12} mt={"40px"}>
            <Grid container>
              <Grid
                item
                xs={12}
                order={[2, 2, 1]}
                md={7}
                borderRight={["none", "none", "1px dashed rgba(0, 0, 0, 0.2)"]}
              >
                <AssistantForm forExtension={forExtension} />
              </Grid>
              <Grid
                display={["none", "none", "block"]}
                item
                xs={12}
                md={5}
                order={[1, 1, 2]}
              >
                <AssistantHelp
                  title={t("shoppingHelpTitle")}
                  helpData={helpData(t)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        px={"24px"}
        mt={"80px"}
        bgcolor={"rgba(0, 0, 0, 0.05)"}
      >
        {!auth.authenticated && (
          <ReadyToGetStarted />
        )}
      </Grid>
    </Grid>
  );
};

export default ShoppingAssistantForm;
