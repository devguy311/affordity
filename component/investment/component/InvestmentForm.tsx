import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ShoppingAssistantHelpType } from "../../shoppingassistantform/type";
import Grid from "@mui/material/Grid";
import { Tabs } from "@mui/material";
import { LockIcon, UserIcon } from "../../icons";
import { useWindowSize } from "../../../hooks";
import { HeadingText } from "../../commoncomponent/Text";
import InvestmentFormInput from "./InvestmentFormInputs";
import AssistantHelp from "../../commoncomponent/AssistantHelp";
import DetailedForm from "./DetailedForm";
import { StyleTabContainer, StyledTab } from "../style";

type InvestmentFormProps = {
  helpData: ShoppingAssistantHelpType[];
  hideShoppingHelp?: boolean;
};

const InvestmentForm: FC<InvestmentFormProps> = ({
  helpData,
  hideShoppingHelp,
}) => {
  const { mobileView } = useWindowSize();

  const [selectedTab, setSelectedTab] = useState("quick-way");

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
  const { t } = useTranslation("investmentviewoverview");

  return (
    <Grid container justifyContent={"center"}>
      <Grid item maxWidth={["100%", "1144px"]}>
        <Grid container>
          <Grid item xs={12} mb={"40px"}>
            <HeadingText
              style={{ lineHeight: "125%" }}
              textsize={mobileView ? "24px" : "32px"}
            >
              {t("titleInput")}
            </HeadingText>
          </Grid>

          <Grid item xs={12} mb={5}>
            <StyleTabContainer>
              <Tabs value={selectedTab} onChange={handleChange}>
                <StyledTab
                  label={t("quickway")}
                  value="quick-way"
                  isactive={selectedTab === "quick-way" ? 1 : 0}
                  icon={<UserIcon />}
                />
                <StyledTab
                  label={t("detailway")}
                  value="detailed-way"
                  isactive={selectedTab === "detailed-way" ? 1 : 0}
                  icon={<LockIcon />}
                />
              </Tabs>
            </StyleTabContainer>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            order={[2, 2, 1]}
            borderRight={["none", "none", "1px dashed rgba(0, 0, 0, 0.2)"]}
          >
            {selectedTab === "quick-way" && <InvestmentFormInput />}
            {selectedTab === "detailed-way" && <DetailedForm />}
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

export default InvestmentForm;
