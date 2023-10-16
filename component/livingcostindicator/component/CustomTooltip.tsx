import React, { FC } from "react";
import Slider from "@mui/material/Slider";
import { useTranslation } from "react-i18next";
import {
  CustomTooltipContainer,
  CustomTooltipTextContainer,
  ThumbContainer,
} from "../style";
import { getTransformTooltip } from "../util";
// import { DescriptionText } from "../../../component/commoncomponent/CommonStyle";
import { formatAmountWithGap } from "../../../helpers/currencyHelper";
import { DescriptionText2 } from "../../commoncomponent/Text";

type Props = {
  startValue: number;
  userValue: number;
  avgValue: number;
  endValue: number;
  currency: string;
};
const CustomTooltip: FC<Props> = ({
  userValue,
  avgValue,
  startValue,
  endValue,
  currency,
}) => {
  const { t } = useTranslation("livingcostindicator");

  function valuetext(value: number) {
    return (
      <CustomTooltipTextContainer
        transformTooltip={getTransformTooltip(
          value,
          userValue || 0,
          avgValue || 0
        )}
        py={"3px"}
        px={"15px"}
        borderRadius={"10px"}
        bgcolor={"#fff"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <DescriptionText2
          textsize="12px"
          textweight={700}
          style={{ lineHeight: "150%" }}
          textcolor="#7A7A7A"
        >
          {value === avgValue ? t("average") : t("you")}
        </DescriptionText2>
        <DescriptionText2
          textsize="14px"
          textcolor="#7A7A7A"
          style={{ opacity: 1 }}
        >
          {formatAmountWithGap(value)} {currency}
        </DescriptionText2>
        <ThumbContainer
          transformTooltip={getTransformTooltip(
            value,
            userValue || 0,
            avgValue || 0
          )}
          bgcolor={value === avgValue ? "#B0B7B9" : "#000000"}
        />
      </CustomTooltipTextContainer>
    );
  }
  return (
    <CustomTooltipContainer
      transformTooltip={
        Math.abs(userValue || 0) - Math.abs(avgValue || 0) < 3000 ? 1 : 0
      }
      isshowfirstactive={userValue === 0 ? 0 : 1}
    >
      <Slider
        min={startValue < avgValue ? startValue : avgValue}
        value={[userValue || 0, avgValue || 0]}
        max={endValue}
        valueLabelDisplay="on"
        valueLabelFormat={valuetext}
      />
    </CustomTooltipContainer>
  );
};

export default CustomTooltip;
