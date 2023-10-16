import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ShoppingAssistantHelpType } from "../../shoppingassistantform/type";
import { useWindowSize } from "../../../hooks";
import Grid from "@mui/material/Grid";
import { HeadingText } from "../../commoncomponent/Text";
import RetirementInputForm from "./RetirementInputForm";
import AssistantHelp from "../../commoncomponent/AssistantHelp";

type RetirementFormProps = {
  helpData: ShoppingAssistantHelpType[];
  hideShoppingHelp?: boolean;
};

const RetirementForm: FC<RetirementFormProps> = ({
  helpData,
  hideShoppingHelp,
}) => {
  const { mobileView } = useWindowSize();
  const { t } = useTranslation("retirementplanneroverview");
  return (
    <Grid container justifyContent={"center"}>
      <Grid item maxWidth={["100%", "1144px"]}>
        <Grid container>
          <Grid item xs={12} mb={"40px"}>
            <HeadingText
              style={{ lineHeight: "125%" }}
              textsize={mobileView ? "24px" : "32px"}
            >
              {t("inputTitle")}
            </HeadingText>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            order={[2, 2, 1]}
            borderRight={["none", "none", "1px dashed rgba(0, 0, 0, 0.2)"]}
          >
            <RetirementInputForm />
          </Grid>
          {!hideShoppingHelp && (
            <Grid item xs={12} md={5} order={[1, 1, 2]}>
              <AssistantHelp
                title={t("helpTitle")}
                helpData={helpData}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RetirementForm;
