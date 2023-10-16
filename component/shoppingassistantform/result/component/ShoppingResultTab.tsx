import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ShoopingTab } from "../../util";
import TabCard from "./TabCard";
import { DescriptionText2 } from "../../../commoncomponent/Text";

type ShoppingResultTabProps = {
  selectedTab: string;
  setSelecteTab: (tab: string) => void;
};
const ShoppingResultTab: FC<ShoppingResultTabProps> = ({
  selectedTab,
  setSelecteTab,
}) => {
  const { t } = useTranslation("shoppingassistantresult");
  return (
    <Box>
      <DescriptionText2 textsize="20px">
        {t("subTitle")}
      </DescriptionText2>

      <Grid
        container
        flexWrap={["nowrap", "nowrap", "wrap"]}
        rowSpacing={"30px"}
        overflow={["auto", "auto", "inherit"]}
        gap={["40px", "40px", "0px"]}
        mt={"10px"}
      >
        {ShoopingTab(t).map((item) => (
          <Grid item width={["214px", "214px", "331px"]} key={item.id}>
            <TabCard
              isActive={item.tab === selectedTab}
              description={item.description}
              setSelectedTab={() => setSelecteTab(item.tab)}
              title={item.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShoppingResultTab;
