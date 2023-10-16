import React from "react";
import { useLivingCostIndicatorResult } from "./hook";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import { getAssetUrl } from "../../util/SiteUtil";
import { DescriptionText2, HeadingText } from "../commoncomponent/Text";
import IndicatorCard from "./component/LivingIndicatorCard";
import { formatAmountWithGap } from "../../helpers/currencyHelper";
import SavingAnnualCard from "./component/SavingAnnualCard";
import { SimpleRadioGroup } from "../commoncomponent/form/FormikRadioGroup";
import { costIndicatorOptions } from "../../constant/siteOptions";
import { PrimaryOutlinedButton } from "../commoncomponent/Button";
import { useRouter } from "next/router";


const LivingCostIndicatorResult = () => {
  const {
    comparatorResult,
    navigate,
    selectedFilter,
    selectedItem,
    setSelectedFilter,
    setSelectedItem,
    t,
  } = useLivingCostIndicatorResult();
  const router = useRouter();

  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <Grid container columnSpacing={"80px"}>
          <Grid item xs={12} mt={"35px"} mb={"42px"}>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <Image
                width="24px"
                height="24px"
                alt={"living cost indicator"}
                src={getAssetUrl("/redesign/livingcostindicator_32_black.svg")}
              />
              <DescriptionText2 textweight={700}>
                {t("header")}
              </DescriptionText2>

              <PrimaryOutlinedButton
                onClick={() => router.push("/living-indicator-input")}
                style={{ display: "flex", gap: 1 }}
              > {t("inputsButton")}
              </PrimaryOutlinedButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <HeadingText textsize="32px">
              {t("inputTitle")}
            </HeadingText>
          </Grid>
          <Grid item xs={12}>
            <Box display={"flex"} justifyContent={"end"}>
              <SimpleRadioGroup
                value={selectedFilter}
                setOptionSelect={setSelectedFilter}
                name={"selectedFilter"}
                options={costIndicatorOptions(t)}
                row
              />
            </Box>
          </Grid>
          <Grid item xs={12} mt={"60px"}>

            <SavingAnnualCard
              comparatorResult={comparatorResult}
              selectedFilter={selectedFilter}
              selectedItem={selectedItem}
            />

          </Grid>
          <Grid
            item
            xs={12}
            width={"100%"}
            mt={"64px"}
            display="flex"
            justifyContent={["center"]}
          >
            <Grid
              container
              spacing={"30px"}
              justifyContent={["center", "initial"]}
              maxWidth="1200px"
            >
              <IndicatorCard
                subDescriptionText={`${t("incomeDescription")} (${selectedFilter === "yearly" ? t("yearly") : t("monthly")
                  }).`}
                title={t("income")}
                isactive={selectedItem === "income"}
                handleCardClick={() => setSelectedItem("income")}
                amount={`
                        ${selectedFilter === "yearly"
                    ? formatAmountWithGap(
                      comparatorResult.incomeIndicator
                        ?.rangeYear?.[1] ?? 0
                    )
                    : formatAmountWithGap(
                      comparatorResult.incomeIndicator
                        ?.rangeMonth?.[1] ?? 0
                    )
                  } ${comparatorResult.incomeIndicator.currency}`}
                isHide={
                  selectedFilter === "yearly"
                    ? !comparatorResult.incomeIndicator?.rangeYear?.[1]
                    : !comparatorResult.incomeIndicator?.rangeMonth?.[1]
                }
                cardIcon={getAssetUrl("redesign/costindicatorincome.svg")}
              />
              <IndicatorCard
                subDescriptionText={`${t("savingsDescription")} (${selectedFilter === "yearly" ? t("yearly") : t("monthly")
                  }).`}
                title={t("savings")}
                isactive={selectedItem === "savings"}
                handleCardClick={() => setSelectedItem("savings")}
                amount={`

                        ${selectedFilter === "yearly"
                    ? formatAmountWithGap(
                      comparatorResult.savingsIndicator
                        ?.rangeYear?.[1] ?? 0
                    )
                    : formatAmountWithGap(
                      comparatorResult.savingsIndicator
                        ?.rangeMonth?.[1] ?? 0
                    )
                  } ${comparatorResult.savingsIndicator.currency}`}
                isHide={
                  selectedFilter === "yearly"
                    ? !comparatorResult.savingsIndicator?.rangeYear?.[1]
                    : !comparatorResult.savingsIndicator?.rangeMonth?.[1]
                }
                cardIcon={getAssetUrl("redesign/costindicatorsaving.svg")}
              />
              <IndicatorCard
                subDescriptionText={`${t("holidaysDescription")} (${selectedFilter === "yearly" ? t("yearly") : t("monthly")
                  }).`}
                title={t("holidays")}
                isactive={selectedItem === "holidays"}
                handleCardClick={() => setSelectedItem("holidays")}
                amount={`
                        ${selectedFilter === "yearly"
                    ? formatAmountWithGap(
                      comparatorResult.holidaysIndicator
                        ?.rangeYear?.[1] ?? 0
                    )
                    : formatAmountWithGap(
                      comparatorResult.holidaysIndicator
                        ?.rangeMonth?.[1] ?? 0
                    )
                  } ${comparatorResult.incomeIndicator.currency}`}
                isHide={
                  selectedFilter === "yearly"
                    ? !comparatorResult.holidaysIndicator?.rangeYear?.[1]
                    : !comparatorResult.holidaysIndicator?.rangeMonth?.[1]
                }
                cardIcon={getAssetUrl("redesign/costindicatortravel.svg")}
              />
              <IndicatorCard
                subDescriptionText={`${t("rentDescription")} (${selectedFilter === "yearly" ? t("yearly") : t("monthly")
                  })`}
                title={t("houseRent")}
                isactive={selectedItem === "houseRent"}
                handleCardClick={() => setSelectedItem("houseRent")}
                amount={`
                        ${selectedFilter === "yearly"
                    ? formatAmountWithGap(
                      comparatorResult.houseRentIndicator
                        ?.rangeYear?.[1] ?? 0
                    )
                    : formatAmountWithGap(
                      comparatorResult.houseRentIndicator
                        ?.rangeMonth?.[1] ?? 0
                    )
                  } ${comparatorResult.incomeIndicator.currency}`}
                isHide={
                  selectedFilter === "yearly"
                    ? !comparatorResult.houseRentIndicator?.rangeYear?.[1]
                    : !comparatorResult.houseRentIndicator?.rangeMonth?.[1]
                }
                cardIcon={getAssetUrl("redesign/costindicatorhouserent.svg")}
              />
              <IndicatorCard
                subDescriptionText={`${t("housemaintenanceDescription")} (${selectedFilter === "yearly" ? t("yearly") : t("monthly")
                  }).`}
                title={t("houseMaintenance")}
                isactive={selectedItem === "houseMaintenance"}
                handleCardClick={() => setSelectedItem("houseMaintenance")}
                amount={`
                        ${selectedFilter === "yearly"
                    ? formatAmountWithGap(
                      comparatorResult.houseMaintenanceIndicator
                        ?.rangeYear?.[1] ?? 0
                    )
                    : formatAmountWithGap(
                      comparatorResult.houseMaintenanceIndicator
                        ?.rangeMonth?.[1] ?? 0
                    )
                  } ${comparatorResult.incomeIndicator.currency}`}
                isHide={
                  selectedFilter === "yearly"
                    ? !comparatorResult.houseMaintenanceIndicator
                      ?.rangeYear?.[1]
                    : !comparatorResult.houseMaintenanceIndicator
                      ?.rangeMonth?.[1]
                }
                cardIcon={getAssetUrl("redesign/costindicatorhousemaintenance.svg")}
              />
              <IndicatorCard
                subDescriptionText={`${t("clothingDescription")} (${selectedFilter === "yearly" ? t("yearly") : t("monthly")
                  }).`}
                title={t("clothing")}
                isactive={selectedItem === "clothing"}
                handleCardClick={() => setSelectedItem("clothing")}
                amount={`
                        ${selectedFilter === "yearly"
                    ? formatAmountWithGap(
                      comparatorResult.clothingIndicator
                        ?.rangeYear?.[1] ?? 0
                    )
                    : formatAmountWithGap(
                      comparatorResult.clothingIndicator
                        ?.rangeMonth?.[1] ?? 0
                    )
                  } ${comparatorResult.incomeIndicator.currency}`}
                isHide={
                  selectedFilter === "yearly"
                    ? !comparatorResult.clothingIndicator?.rangeYear?.[1]
                    : !comparatorResult.clothingIndicator?.rangeMonth?.[1]
                }
                cardIcon={getAssetUrl("redesign/costindicatorcloth.svg")}
              />
              <IndicatorCard
                subDescriptionText={`${t("gasandelectricityDescription")} (${selectedFilter === "yearly" ? t("yearly") : t("monthly")
                  }).`}
                title={t("gasAndElectricity")}
                isactive={selectedItem === "gasAndElectricity"}
                handleCardClick={() => setSelectedItem("gasAndElectricity")}
                amount={`
                        ${selectedFilter === "yearly"
                    ? formatAmountWithGap(
                      comparatorResult.electricityGasIndicator
                        ?.rangeYear?.[1] ?? 0
                    )
                    : formatAmountWithGap(
                      comparatorResult.electricityGasIndicator
                        ?.rangeMonth?.[1] ?? 0
                    )
                  } ${comparatorResult.incomeIndicator.currency}`}
                isHide={
                  selectedFilter === "yearly"
                    ? !comparatorResult.electricityGasIndicator?.rangeYear?.[1]
                    : !comparatorResult.electricityGasIndicator?.rangeMonth?.[1]
                }
                cardIcon={getAssetUrl("redesign/costindicatorgaselectricity.svg")}
              />
              <IndicatorCard
                subDescriptionText={`${t("carmaintenanceDescription")} (${selectedFilter === "yearly" ? t("yearly") : t("monthly")
                  }).`}
                title={t("carMaintenance")}
                isactive={selectedItem === "carMaintenance"}
                handleCardClick={() => setSelectedItem("carMaintenance")}
                amount={`
                        ${selectedFilter === "yearly"
                    ? formatAmountWithGap(
                      comparatorResult.carMaintainanceIndicator
                        ?.rangeYear?.[1] ?? 0
                    )
                    : formatAmountWithGap(
                      comparatorResult.carMaintainanceIndicator
                        ?.rangeMonth?.[1] ?? 0
                    )
                  } ${comparatorResult.incomeIndicator.currency}`}
                isHide={
                  selectedFilter === "yearly"
                    ? !comparatorResult.carMaintainanceIndicator?.rangeYear?.[1]
                    : !comparatorResult.carMaintainanceIndicator
                      ?.rangeMonth?.[1]
                }
                cardIcon={getAssetUrl("redesign/costindicatorcar.svg")}
              />
              <IndicatorCard
                subDescriptionText={`${t("foodDescription")} (${selectedFilter === "yearly" ? t("yearly") : t("monthly")
                  })`}
                title={t("food")}
                isactive={selectedItem === "food"}
                handleCardClick={() => setSelectedItem("food")}
                amount={`
                        ${selectedFilter === "yearly"
                    ? formatAmountWithGap(
                      comparatorResult.foodIndicator
                        ?.rangeYear?.[1] ?? 0
                    )
                    : formatAmountWithGap(
                      comparatorResult.foodIndicator
                        ?.rangeMonth?.[1] ?? 0
                    )
                  } ${comparatorResult.incomeIndicator.currency}`}
                isHide={
                  selectedFilter === "yearly"
                    ? !comparatorResult.foodIndicator?.rangeYear?.[1]
                    : !comparatorResult.foodIndicator?.rangeMonth?.[1]
                }
                cardIcon={getAssetUrl("redesign/food.svg")}
              />
              <IndicatorCard
                subDescriptionText={`${t("hotelsandrestaurantsDescription")} (${selectedFilter === "yearly" ? t("yearly") : t("monthly")
                  })`}
                title={t("hotelsAndRestaurants")}
                isactive={selectedItem === "hotelsAndRestaurants"}
                handleCardClick={() => setSelectedItem("hotelsAndRestaurants")}
                amount={`
                        ${selectedFilter === "yearly"
                    ? formatAmountWithGap(
                      comparatorResult.restaurantAndHotelsIndicator
                        ?.rangeYear?.[1] ?? 0
                    )
                    : formatAmountWithGap(
                      comparatorResult.restaurantAndHotelsIndicator
                        ?.rangeMonth?.[1] ?? 0
                    )
                  } ${comparatorResult.incomeIndicator.currency}`}
                isHide={
                  selectedFilter === "yearly"
                    ? !comparatorResult.restaurantAndHotelsIndicator
                      ?.rangeYear?.[1]
                    : !comparatorResult.restaurantAndHotelsIndicator
                      ?.rangeMonth?.[1]
                }
                cardIcon={getAssetUrl("redesign/hotelandrestaurant.svg")}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        mt={"176px"}
        px={"24px"}
        bgcolor={"rgba(0, 0, 0, 0.05)"}
      >

      </Grid>
    </Grid>
  );
};

export default LivingCostIndicatorResult;
