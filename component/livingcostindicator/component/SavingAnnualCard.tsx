import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { SavingAnnualCardContainer } from "../style";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { ComparatorResultType } from "../type";
import ComporatorGraph from "./ComparatorGraph";

type SavingAnnualCardProps = {
  comparatorResult: ComparatorResultType;
  selectedItem: string;
  selectedFilter: string;
};
const SavingAnnualCard: FC<SavingAnnualCardProps> = ({
  comparatorResult,
  selectedItem,
  selectedFilter,
}) => {
  const renderItem = () => {
    if (selectedItem === "income") {
      return comparatorResult.incomeIndicator;
    }
    if (selectedItem === "savings") {
      return comparatorResult.savingsIndicator;
    }
    if (selectedItem === "holidays") {
      return comparatorResult.holidaysIndicator;
    }
    if (selectedItem === "carMaintenance") {
      return comparatorResult.carMaintainanceIndicator;
    }
    if (selectedItem === "houseRent") {
      return comparatorResult.houseRentIndicator;
    }
    if (selectedItem === "houseMaintenance") {
      return comparatorResult.houseMaintenanceIndicator;
    }
    if (selectedItem === "health") {
      return comparatorResult.healthIndicator;
    }
    if (selectedItem === "clothing") {
      return comparatorResult.clothingIndicator;
    }
    if (selectedItem === "food") {
      return comparatorResult.foodIndicator;
    }
    if (selectedItem === "gasAndElectricity") {
      return comparatorResult.electricityGasIndicator;
    }
    if (selectedItem === "hotelsAndRestaurants") {
      return comparatorResult.restaurantAndHotelsIndicator;
    }
  };
  const { t } = useTranslation("livingcostindicator");

  return (
    <SavingAnnualCardContainer p={["24px", "24px", "64px"]}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={4}>
          <DescriptionText2
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            textsize="14px"
            align="center"
            textweight={700}
            justifyContent={"center"}
            textcolor="#534F59"
          >
            <NextImage
              src={getAssetUrl("redesign/bill.svg")}
              height="24px"
              width={"24px"}
              alt={"bill"}
            />{" "}
            {t("average")} ({selectedFilter === "yearly" ? t("yearly") : t("monthly")})
          </DescriptionText2>
          <DescriptionText2
            textcolor="#7A7A7A"
            style={{ lineHeight: "150%" }}
            align="center"
            textsize="14px"
            mt={"8px"}
          >
            {t("resultcardsubTitle")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"90px"}>
          <ComporatorGraph
            selectedFilter={selectedFilter}
            comparatorResult={renderItem()}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <DescriptionText2
                display={"flex"}
                gap={"10px"}
                textcolor="#7A7A7A"
                mt={"20px"}
                alignItems={"center"}
                textsize="14px"
              >
                <NextImage
                  src={getAssetUrl("redesign/wallet_icon.svg")}
                  height="20px"
                  width="26.65px"
                  alt="wallet"
                />
                {selectedFilter === "yearly"
                  ? renderItem()?.textCustomYear?.explanation
                  : renderItem()?.textCustomMonth?.explanation}
              </DescriptionText2>
            </Grid>
            <Grid item>
              {selectedFilter === "yearly"
                ? renderItem()?.textCustomYear?.details?.map((item, index) => (
                  <Box
                    display={"flex"}
                    gap={"10px"}
                    key={`textCustomYear-${index}`}
                  >
                    <DescriptionText2
                      key={item}
                      mt={"10px"}
                      textsize="14px"
                      textcolor="#7A7A7A"
                      textweight={700}
                    >
                      {item.split(":")[0]}
                      <span style={{ fontWeight: 400 }}>
                        {item.split(":")[1]}
                      </span>
                    </DescriptionText2>
                  </Box>
                ))
                : renderItem()?.textCustomMonth?.details?.map((item, index) => (
                  <Box
                    display={"flex"}
                    gap={"10px"}
                    key={`textCustomMonth-${index}`}
                  >
                    <DescriptionText2
                      key={item}
                      mt={"20px"}
                      textsize="12px"
                      textcolor="#7A7A7A"
                      textweight={700}
                    >
                      {item.split(":")[0]}
                      <span style={{ fontWeight: 400 }}>
                        {item.split(":")[1]}
                      </span>
                    </DescriptionText2>
                  </Box>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SavingAnnualCardContainer>
  );
};

export default SavingAnnualCard;
