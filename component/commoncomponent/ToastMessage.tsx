import Grid from "@mui/material/Grid";
import { FC } from "react";
import { ProgressCardContainer } from "./Style";
import { DescriptionText, Heading2 } from "./CommonStyle";
import { getAssetUrl } from "../../util/SiteUtil";
import { DescriptionText2 } from "./Text";

type ToastMessageProps = {
  type: "success" | "error" | "warning";
  titleMessage?: JSX.Element;
  subDescription?: JSX.Element | string;
};

export const ToastMessage: FC<ToastMessageProps> = ({
  type,
  titleMessage,
  subDescription,
}) => {
  const getIcon = () => {
    if (type === "success") {
      return getAssetUrl("redesign/successicon.svg");
    }
    if (type === "error") {
      return getAssetUrl("redesign/erroricon.svg");
    }
    return getAssetUrl("redesign/warningicon.svg");
  };

  const renderTitleInfo = () => {
    if (type === "success") {
      return (
        <DescriptionText2
          textAlign={"center"}
          textsize="16x"
          textcolor="#45B386"
          textweight={700}
        >
          {titleMessage || "Congrats you can affordi it!"}
        </DescriptionText2>
      );
    }
    if (type === "error") {
      return (
        <DescriptionText2
          align="center"
          textsize={"16px"}
          textcolor="#E45152"
          textweight={700}
          style={{ lineHeight: "25px" }}
        >
          {titleMessage ||
            "Currently, you are not on track to meet your purchasing goal"}
        </DescriptionText2>
      );
    }
    return titleMessage;
  };
  return (
    <ProgressCardContainer type={type}>
      <Grid
        container
        justifyContent={"center"}
        flexWrap={"nowrap"}
        gap={"19px"}
      >
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img style={{ marginBottom: 4 }} src={getIcon()} alt={"toast-icon"} />
          {renderTitleInfo()}
          {subDescription ? subDescription : ""}
        </Grid>
      </Grid>
    </ProgressCardContainer>
  );
};
