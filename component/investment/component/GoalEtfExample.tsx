import { FC } from "react";
import { useTranslation } from "react-i18next";
import { GoalCardContainer } from "../style";
import Grid from "@mui/material/Grid";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { EtfExampleType } from "../type";
import { useWindowSize } from "../../../hooks";
import { formatAmountWithGap } from "../../../helpers/currencyHelper";

type GoalEtfExampleProps = {
  etfExample: EtfExampleType;
};
const GoalEtfExample: FC<GoalEtfExampleProps> = ({ etfExample }) => {
  const { mobileView } = useWindowSize();

  const isOption1 = !!etfExample.option1;
  const isOption2 = !!etfExample.option2;
  const { t } = useTranslation("investmentdetailedResult");

  return (
    <GoalCardContainer style={{ padding: "32px 40px" }}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <DescriptionText2
            display={"flex"}
            alignItems={"center"}
            textcolor="#534F59"
            textsize="12px"
            textTransform={"uppercase"}
            textweight={700}
            gap={"10px"}
            align={"left"}
          >
            <NextImage
              src={getAssetUrl("redesign/Expense.svg")}
              alt="Calendar"
              height="24px"
              width="24px"
            />
            {t("ETFCardTitle")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"15px"}>
          <DescriptionText2
            textcolor="#4B8F8F"
            textsize="12px"
            textweight={400}
            style={{ lineHeight: "175%" }}
          >
            {t("ETFCardsubTitle")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} md={isOption1 && isOption2 ? 10 : 5}>
          <Grid container>
            <Grid item xs={12}>
              <Grid item xs={12} mt={"50px"} pb={"15px"}>
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
                  {isOption1 && (
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
                        textcolor={"#534F59"}
                      >
                        {t("option1")}
                      </DescriptionText2>
                    </Grid>
                  )}
                  {isOption2 && (
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
                        textcolor={"#534F59"}
                      >
                        {t("option2")}
                      </DescriptionText2>
                    </Grid>
                  )}
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
              <Grid
                container
                flexWrap={"nowrap"}
                justifyContent={"space-between"}
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
                    {t("ETFCardtxt1")}
                  </DescriptionText2>
                </Grid>
                {isOption1 && (
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
                      {etfExample?.option1?.etfName}
                    </DescriptionText2>
                  </Grid>
                )}
                {isOption2 && (
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
                      {etfExample?.option2?.etfName}
                    </DescriptionText2>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              mt={"15px"}
              pb={"15px"}
              borderBottom={"1px solid #E6E6E6"}
            >
              <Grid
                container
                flexWrap={"nowrap"}
                justifyContent={"space-between"}
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
                    {t("ETFCardtxt2")}
                  </DescriptionText2>
                </Grid>
                {isOption1 && (
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
                      {formatAmountWithGap(
                        etfExample?.option1?.finalAmount || 0
                      )}
                    </DescriptionText2>
                  </Grid>
                )}
                {isOption2 && (
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
                      {formatAmountWithGap(
                        etfExample?.option2?.finalAmount || 0
                      )}
                    </DescriptionText2>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              mt={"15px"}
              pb={"15px"}
              borderBottom={"1px solid #E6E6E6"}
            >
              <Grid
                container
                flexWrap={"nowrap"}
                justifyContent={"space-between"}
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
                    {t("ETFCardtxt3")}
                  </DescriptionText2>
                </Grid>
                {isOption1 && (
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
                      {etfExample?.option1?.expectedReturn} %
                    </DescriptionText2>
                  </Grid>
                )}
                {isOption2 && (
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
                      {etfExample?.option2?.expectedReturn} %
                    </DescriptionText2>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} mt={"15px"} pb={"15px"}>
              <Grid
                container
                flexWrap={"nowrap"}
                justifyContent={"space-between"}
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
                    {t("ETFCardtxt4")}
                  </DescriptionText2>
                </Grid>
                {isOption1 && (
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
                      {etfExample?.option1?.expectedVolatility} %
                    </DescriptionText2>
                  </Grid>
                )}
                {isOption2 && (
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
                      {etfExample?.option2?.expectedVolatility} %
                    </DescriptionText2>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </GoalCardContainer>
  );
};

export default GoalEtfExample;
