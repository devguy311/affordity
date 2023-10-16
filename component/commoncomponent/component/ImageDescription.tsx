import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { FC } from "react";
import { ImageDescripiotnInfoType } from "./type";
import { DescriptionText2 } from "../Text";

type ImageDescriptionProps = {
  info: ImageDescripiotnInfoType;
};
const ImageDescription: FC<ImageDescriptionProps> = ({ info }) => {
  return (
    <Grid container columnSpacing={"70px"} alignItems={"center"}>
      <Grid
        item
        order={[1, 2, info.imgDirection === "right" ? 1 : 2]}
        xs={12}
        md={5}
      >
        <Box mt={["24px", "24px", "0px"]}>
          <DescriptionText2
            textsize="12px"
            align="center"
            textweight={700}
            textcolor="rgba(0, 0, 0, 0.5)"
          >
            {info.title}
          </DescriptionText2>
        </Box>
        <Box mt={"8px"}>{info.subTitle}</Box>
        <Box mt={"16px"}>
          <DescriptionText2 textcolor="rgba(0, 0, 0, 0.7)" style={{ lineHeight: '200%' }} align="center" textsize="14px">
            {info.description}
          </DescriptionText2>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        order={[1, 1, info.imgDirection === "right" ? 2 : 1]}
      >
        <img src={info.image} alt={info.title} />
      </Grid>
    </Grid>
  );
};

export default ImageDescription;
