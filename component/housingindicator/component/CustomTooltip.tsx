import React, { FC } from "react";
import Slider from "@mui/material/Slider";
import { useTranslation } from "react-i18next";
import {
  CustomTooltipContainer,
  CustomTooltipTextContainer,
  ThumbContainer,
} from "../style";
import { getTransformTooltip } from "../util";
import { formatAmountWithGap } from "../../../helpers/currencyHelper";
import { DescriptionText2 } from "../../commoncomponent/Text";

type Props = {
  lowValue: number;
  userValue: number;
  medianValue: number;
  highValue: number;
  currency: string;
};
const CustomTooltip: FC<Props> = ({
  lowValue,
  userValue,
  medianValue,
  highValue,
  currency,
}) => {
  const { t } = useTranslation("housingResult");

  function valuetext(value: number) {
    return (
      <CustomTooltipTextContainer
        transformTooltip={getTransformTooltip(
          value,
          userValue,
          medianValue || 0
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
          {t("median")}
        </DescriptionText2>
        <DescriptionText2
          textsize="12px"
          textcolor="#7A7A7A"
          style={{ opacity: 1 }}
        >
          {formatAmountWithGap(value)} {currency}
        </DescriptionText2>
        <ThumbContainer
          transformTooltip={getTransformTooltip(
            value,
            userValue || 0,
            medianValue || 0
          )}
          bgcolor={"#2E86A1"}
        />
      </CustomTooltipTextContainer>
    );
  }
  return (
    <CustomTooltipContainer isshowfirstactive={userValue === 0 ? 0 : 1}>
      <Slider
        min={lowValue}
        value={medianValue}
        max={highValue}
        valueLabelDisplay="on"
        valueLabelFormat={valuetext}
      />
    </CustomTooltipContainer>
  );
};

export default CustomTooltip;
