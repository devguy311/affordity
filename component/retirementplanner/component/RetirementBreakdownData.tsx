import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { useWindowSize } from "../../../hooks";
import { Description1 } from "../../commoncomponent/Style";
import { CardContainer } from "../../investment/style";
import { RetirementTableType } from "../type";

type RetirementBreakdownDataProps = {
  investmentData: RetirementTableType;
  invText: string;
};
const RetirementBreakdownData: FC<RetirementBreakdownDataProps> = ({
  investmentData,
  invText,
}) => {
  const { mobileView } = useWindowSize();
  const { t } = useTranslation("retirementplanner");


  return (
    <CardContainer height={"100%"} p={["20px", "20px", "50px"]}>
      <Grid container alignItems={"center"} columnSpacing={"55px"}>
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
                  {t("stock")}
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
                  {t("bonds")}
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
                  {t("cash")}
                </DescriptionText2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={"20px"} pb={"15px"}>
          <Grid
            container
            justifyContent={"space-between"}
            borderBottom={"1px solid #E6E6E6"}
            pb={"10px"}
          >
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
                {t("etfname")}
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
                {investmentData.stock.name}
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
                {investmentData.bonds.name}
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
                {investmentData.cash.name}
              </DescriptionText2>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={"15px"} pb={"15px"}>
          <Grid
            container
            justifyContent={"space-between"}
            borderBottom={"1px solid #E6E6E6"}
            pb={"10px"}
          >
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
                {t("pastReturn")}
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
                {investmentData.stock.expectedReturn}%
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
                {investmentData.bonds.expectedReturn}%
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
                {investmentData.cash.expectedReturn}%
              </DescriptionText2>
            </Grid>
          </Grid>
        </Grid>
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
              >
                {t("pastVolatility")}
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
                {investmentData.stock.expectedVolatility}%
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
                {investmentData.bonds.expectedVolatility}%
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
                {investmentData.cash.expectedVolatility}%
              </DescriptionText2>
            </Grid>
          </Grid>
        </Grid>
        <Grid item pl={"20px"} xs={12} mt={"31px"}>
          <Description1 textAlign={"left"} textcolor="#4B8F8F">
            {invText}
          </Description1>
        </Grid>
      </Grid>
    </CardContainer>
  );
};

export default RetirementBreakdownData;
