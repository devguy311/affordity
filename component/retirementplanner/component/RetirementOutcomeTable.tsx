import React, { FC } from "react";
import { GraphCard } from "../style";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks";
import Grid from "@mui/material/Grid";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { InvetmentReturnGraphType } from "../type";

type RetirementOutcomeTableProps = {
  investmentOutcomeData: InvetmentReturnGraphType;
  prefferedCurrency?: string;
};
const RetirementOutcomeTable: FC<RetirementOutcomeTableProps> = ({
  investmentOutcomeData,
  prefferedCurrency,
}) => {
  const { t } = useTranslation("retirementplanner");

  const { mobileView } = useWindowSize();

  return (
    <GraphCard p={"52px"}>
      <Grid container>
        <Grid item xs={12}>
          <Grid item xs={12} mt={"15px"} pb={"15px"}>
            <Grid container justifyContent={"space-between"}>
              <Grid
                item
                width={["90px", "175px"]}
                style={{ wordBreak: "break-all" }}
              >
                <DescriptionText2
                  textsize={mobileView ? "10px" : "16px"}
                  textweight={700}
                  textcolor="#5C5963"
                  style={{ wordBreak: "break-word" }}
                ></DescriptionText2>
              </Grid>
              <Grid
                item
                width={["60px", "fit-content"]}
                style={{ wordBreak: "break-all" }}
              >
                <DescriptionText2
                  style={{
                    fontSize: mobileView ? "12px" : "16px",
                  }}
                  textweight={600}
                  textcolor={"#45B386"}
                >
                  {t("aggressive")}
                </DescriptionText2>
              </Grid>
              <Grid
                item
                width={["60px", "fit-content"]}
                display={"flex"}
                justifyContent={"flex-end"}
                style={{ wordBreak: "break-all" }}
              >
                <DescriptionText2
                  style={{ fontSize: mobileView ? "12px" : "16px" }}
                  textweight={600}
                  textcolor={"#2B8363"}
                >
                  {t("conservative")}
                </DescriptionText2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          mt={"20px"}
          pb={"15px"}
          borderBottom={"1px solid #E6E6E6"}
        >
          <Grid container flexWrap={"nowrap"} justifyContent={"space-between"}>
            <Grid
              item
              width={["98px", "175px"]}
              style={{ wordBreak: "break-all" }}
            >
              <DescriptionText2
                textcolor="#5C5963"
                textweight={700}
                textsize={mobileView ? "10px" : "16px"}
                style={{ wordBreak: "break-word" }}
              >
                {t("todatInvestment")} {prefferedCurrency}
              </DescriptionText2>
            </Grid>
            <Grid
              item
              width={["60px", "fit-content"]}
              style={{ wordBreak: "break-all" }}
            >
              <DescriptionText2
                textweight={700}
                textsize={mobileView ? "10px" : "16px"}
                display={"flex"}
                flexWrap={"wrap"}
                textcolor="#5C5963"
              >
                {investmentOutcomeData.aggressive.totalInvestment}{" "}
              </DescriptionText2>
            </Grid>
            <Grid
              item
              width={["60px", "fit-content"]}
              display={"flex"}
              justifyContent={"flex-end"}
              style={{ wordBreak: "break-all" }}
            >
              <DescriptionText2
                textweight={700}
                textsize={mobileView ? "10px" : "16px"}
                display={"flex"}
                flexWrap={"wrap"}
                textcolor="#5C5963"
              >
                {investmentOutcomeData.conservative.totalInvestment}{" "}
              </DescriptionText2>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={"15px"} pb={"15px"}>
          <Grid container flexWrap={"nowrap"} justifyContent={"space-between"}>
            <Grid
              item
              width={["90px", "175px"]}
              style={{ wordBreak: "break-all" }}
            >
              <DescriptionText2
                textsize={mobileView ? "10px" : "16px"}
                textweight={700}
                textcolor="#5C5963"
                style={{ wordBreak: "break-word" }}
              >
                {t("retirementIncome")}
              </DescriptionText2>
            </Grid>
            <Grid
              item
              width={["60px", "fit-content"]}
              style={{ wordBreak: "break-all" }}
            >
              <DescriptionText2
                textweight={700}
                textsize={mobileView ? "10px" : "16px"}
                display={"flex"}
                flexWrap={"wrap"}
                textcolor="#5C5963"
              >
                {investmentOutcomeData.aggressive.retirementIncome}{" "}
              </DescriptionText2>
            </Grid>
            <Grid
              item
              width={["60px", "fit-content"]}
              display={"flex"}
              justifyContent={"flex-end"}
              style={{ wordBreak: "break-all" }}
            >
              <DescriptionText2
                textsize={mobileView ? "10px" : "16px"}
                textweight={700}
                display={"flex"}
                flexWrap={"wrap"}
                textcolor="#5C5963"
              >
                {investmentOutcomeData.conservative.retirementIncome}{" "}
              </DescriptionText2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </GraphCard>
  );
};

export default RetirementOutcomeTable;
