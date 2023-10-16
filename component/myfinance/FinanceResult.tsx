import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";
import { useTranslation } from "react-i18next";
import { useFinanceResult } from "./hook";
import FinanceFilter from "./component/FinanceFilter";
import FilterTransactionList from "./component/FilterTransactionList";
import { DescriptionText2, HeadingText } from "../commoncomponent/Text";
import SwitcherTab from "./component/SwitcherTab";
import FinanceDetailCard from "./component/FinanceDetailCard";
import { getAssetUrl } from "../../util/SiteUtil";
import FinanceGraph from "./component/FinanceGraph";
import { filterLabelText, filterTabOption, PeriodLabelText } from "./util";
import { useWindowSize } from "../../hooks";
import { PrimaryContainedButton } from "../commoncomponent/Button";
import FilterMobileFinance from "./component/FilterMobileFinance";
import { Alert } from "@mui/material";

const FinanceResult = () => {
  const {
    isLoading,
    error,
    leftPanel,
    transactionList,
    setSelectedTabFilter,
    selectedTabFilter,
    dashboardData,
    checkedAccounts,
    setCheckedAccounts,
    handleCheckedAccount,
    openMobileFilter,
    setOpenMobileFilter,
    handleConnectBank,
    setError,
  } = useFinanceResult();

  const { mobileView, tabView } = useWindowSize();
  const { t } = useTranslation("dashboardResult");

  if (isLoading) {
    return (
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "320px", textAlign: "center" }}>
          <LinearProgress color={"primary"} sx={{ width: 1 }} />
        </Box>
      </Box>
    );
  }

  const renderDashboardData = () => {
    if (dashboardData) {
      return (
        <>
          <Grid item xs={12}>
            <Grid
              container
              overflow={"auto"}
              flexWrap={"nowrap"}
              columnSpacing={"20px"}
              alignItems={"stretch"}
            >
              <Grid item xs={12} md={4} height={"100%"}>
                <FinanceDetailCard
                  amount={dashboardData.cards[selectedTabFilter].balance.value}
                  currency={dashboardData.header.currency}
                  description={
                    dashboardData.cards[selectedTabFilter].balance.isNeutral === null ?
                      <>
                        <DescriptionText2
                          align="center"
                          textcolor="#7a7a7a"
                          textsize="14px"
                        >
                          {"No data available for comparison."}

                        </DescriptionText2>
                      </>
                      :

                      dashboardData.cards[selectedTabFilter].balance.isNeutral ? (
                        <>
                          <DescriptionText2
                            align="center"
                            textcolor="#7a7a7a"
                            textsize="14px"
                          >
                            {t("neutral")}
                            {filterLabelText(t)[0][selectedTabFilter]}
                          </DescriptionText2>
                        </>
                      ) : (
                        <DescriptionText2
                          align="center"
                          textcolor="#7a7a7a"
                          textsize="14px"
                        >
                          {dashboardData.cards[selectedTabFilter].balance
                            .isIncrease
                            ? t("increased")
                            : t("decrease")}{" "}
                          <span style={{ fontWeight: 700, color: "#000" }}>
                            {dashboardData.header.currency}{" "}
                            {
                              dashboardData.cards[selectedTabFilter].balance
                                .difference
                            }
                          </span>{" "}
                          {filterLabelText(t)[0][selectedTabFilter]}

                        </DescriptionText2>
                      )
                  }
                  icon={getAssetUrl("redesign/piggy_black.svg")}
                  subTitle={t("today")}
                  title={t("balance")}
                />
              </Grid>
              <Grid item xs={12} md={4} height={"100%"}>
                <FinanceDetailCard
                  currency={dashboardData.header.currency}
                  amount={dashboardData.cards[selectedTabFilter].income.value}
                  description={
                    dashboardData.cards[selectedTabFilter].income.isNeutral === null ?
                      <>
                        <DescriptionText2
                          align="center"
                          textcolor="#7a7a7a"
                          textsize="14px"
                        >
                          {"No data available for comparison"}

                        </DescriptionText2>
                      </>
                      :

                      dashboardData.cards[selectedTabFilter].income.isNeutral ? (
                        <>
                          <DescriptionText2
                            align="center"
                            textcolor="#7a7a7a"
                            textsize="14px"
                          >
                            {t("neutral")}
                            {filterLabelText(t)[0][selectedTabFilter]}
                          </DescriptionText2>
                        </>
                      ) : (
                        <DescriptionText2
                          align="center"
                          textcolor="#7a7a7a"
                          textsize="14px"
                        >
                          {dashboardData.cards[selectedTabFilter].income
                            .isIncrease
                            ? t("increased")
                            : t("decrease")}{" "}
                          <span style={{ fontWeight: 700, color: "#000" }}>
                            {dashboardData.header.currency}{" "}
                            {
                              dashboardData.cards[selectedTabFilter].income
                                .difference
                            }
                          </span>{" "}
                          {filterLabelText(t)[0][selectedTabFilter]}
                        </DescriptionText2>
                      )
                  }
                  icon={getAssetUrl("redesign/wallet_black.svg")}
                  subTitle={`${PeriodLabelText(t)[0][selectedTabFilter]}`}
                  title={t("income")}
                />
              </Grid>
              <Grid item xs={12} md={4} height={"100%"}>
                <FinanceDetailCard
                  currency={dashboardData.header.currency}
                  amount={dashboardData.cards[selectedTabFilter].spending.value}
                  description={
                    dashboardData.cards[selectedTabFilter].spending.isNeutral === null ?
                      <>
                        <DescriptionText2
                          align="center"
                          textcolor="#7a7a7a"
                          textsize="14px"
                        >
                          {"No data available for comparison"}

                        </DescriptionText2>
                      </>
                      :

                      dashboardData.cards[selectedTabFilter].spending
                        .isNeutral ? (
                        <>
                          <DescriptionText2
                            align="center"
                            textcolor="#7a7a7a"
                            textsize="14px"
                          >
                            {t("neutral")}
                            {filterLabelText(t)[0][selectedTabFilter]}
                          </DescriptionText2>
                        </>
                      ) : (
                        <DescriptionText2
                          align="center"
                          textcolor="#7a7a7a"
                          textsize="14px"
                        >
                          {dashboardData.cards[selectedTabFilter].spending
                            .isIncrease
                            ? t("increased")
                            : t("decrease")}{" "}
                          <span style={{ fontWeight: 700, color: "#000" }}>
                            {dashboardData.header.currency}{" "}
                            {
                              dashboardData.cards[selectedTabFilter].spending
                                .difference
                            }
                          </span>{" "}
                          {filterLabelText(t)[0][selectedTabFilter]}
                        </DescriptionText2>
                      )
                  }
                  icon={getAssetUrl("redesign/bag_black.svg")}
                  subTitle={`${PeriodLabelText(t)[0][selectedTabFilter]}`}
                  title={t("spending")}
                />
              </Grid>
            </Grid>
          </Grid>
          {mobileView && (
            <FilterMobileFinance
              handleClose={() => setOpenMobileFilter(false)}
              isOpen={openMobileFilter}
              leftPanel={leftPanel}
              checkedAccounts={checkedAccounts}
              setCheckedAccount={(accountIds) => {
                setCheckedAccounts(accountIds);
                setOpenMobileFilter(false);
              }}
              handleConnectBank={handleConnectBank}
            />
          )}
          <Grid item xs={12} mt={"43px"}>
            <FinanceGraph
              selectedTabFilter={selectedTabFilter}
              graphData={dashboardData}
              setSelectedTab={setSelectedTabFilter}
            />
          </Grid>
        </>
      );
    }
  };

  return (
    <>
      {error && (
        <Box my={2} maxWidth={900} mx="auto">
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        </Box>
      )}

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
        >
          <FinanceFilter
            handleCheckedAccount={handleCheckedAccount}
            handleConnectBank={handleConnectBank}
            checkedAccounts={checkedAccounts}
            filters={leftPanel}
          />
        </Grid>
        {mobileView && (
          <Box
            position={"fixed"}
            style={{
              top: "90vh",
              zIndex: 9,
              display: "flex",
              width: "100%",
              left: 0,
              justifyContent: "center",
            }}
          >
            <PrimaryContainedButton
              onClick={() => setOpenMobileFilter(true)}
              style={{ width: 210, borderRadius: "16px" }}
            >
              {t("mobileFilter")}
            </PrimaryContainedButton>
          </Box>
        )}
        <Grid item maxWidth={["100%", "100%", "70%"]}>
          <Grid container>
            <Grid item xs={12} mb={"52px"}>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid item xs={12} md={5}>
                  <DescriptionText2 textsize="12px">
                    {t("Title")}
                  </DescriptionText2>
                  <DescriptionText2
                    mt={"8px"}
                    textweight={700}
                    textsize={tabView ? "24px" : "32px"}
                  >
                    {t("subTitle")}: {checkedAccounts.length}
                  </DescriptionText2>
                </Grid>
                <Grid item xs={6} display={["none", "none", "block"]}>
                  <SwitcherTab
                    selectedTab={selectedTabFilter}
                    setSelectedtab={setSelectedTabFilter}
                    options={filterTabOption(t)}
                  />
                </Grid>
              </Grid>
            </Grid>
            {renderDashboardData()}
            <Grid item xs={12} mt={"52px"}>
              <FilterTransactionList transactionList={transactionList} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FinanceResult;
