import React, { FC } from "react";
import { ShoppingTabButton } from "../../style";
import Grid from "@mui/material/Grid";
import { DescriptionText2 } from "../../../commoncomponent/Text";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

type TabCardProps = {
  isActive: boolean;
  setSelectedTab: () => void;
  title: string;
  description: string;
};
const TabCard: FC<TabCardProps> = ({
  isActive,
  setSelectedTab,
  title,
  description,
}) => {
  return (
    <ShoppingTabButton
      width={["214px", "214px", "331px"]}
      onClick={setSelectedTab}
      height={"100%"}
      isactive={isActive ? 1 : 0}
    >
      <Grid container alignItems={"center"}>
        <Grid
          item
          width={["100%", "100%", "80%"]}
          pr={"24px"}
          borderRight={"1px solid rgba(255, 255, 255, 0.15)"}
        >
          <DescriptionText2 textcolor={isActive ? "#FFFFFF" : "#000"}>
            {title}
          </DescriptionText2>
          <DescriptionText2
            mt={"12px"}
            textcolor={isActive ? "#FFFFFF80" : "rgba(0, 0, 0, 0.5)"}
            textsize="12px"
          >
            {description}
          </DescriptionText2>
        </Grid>
        <Grid item width={["0%", "0%", "20%"]}>
          <ArrowRightAltIcon
            style={{
              color: isActive ? "#FFFFFF" : "#000",
            }}
          />
        </Grid>
      </Grid>
    </ShoppingTabButton>
  );
};

export default TabCard;
