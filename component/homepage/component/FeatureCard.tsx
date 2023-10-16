import React, { FC } from "react";
import { FeatureType } from "../type";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { FinanceCardContainer } from "../../myfinance/style";
import { useWindowSize } from "../../../hooks";
import { Description1, Heading1 } from "../../commoncomponent/Style";

type FeatureCardProps = {
  info: FeatureType;
};
const FeatureCard: FC<FeatureCardProps> = ({ info }) => {
  const { mobileView } = useWindowSize();
  return (
    <Grid
      container
      style={{
        height: "100%",
        width: "300px",
        padding: 16,
        borderRadius: 16,
        gap: 0,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid rgba(0, 0, 0, 0.10)",
        background: "#FFF",
        boxShadow: "0px 0px 18px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <Grid
        display={"flex"}
        alignItems={["left", "left"]}
        justifyContent={["left", "left"]}
        item
        gap={1}
        xs={12}
      >
        <Box position={"relative"} width={"24px"} height={"24px"}>
          <Image
            alt={info.title}
            src={info.image}
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Heading1 mt={"8px"} textsize="14px" textAlign={["left", "left"]}>
          {info.title}
        </Heading1>
      </Grid>
      <Grid display={"flex"} justifyContent={["left", "left"]} item xs={12}>
        <Description1
          mt={"8px"}
          textsize="14px"
          align={mobileView ? "left" : "left"}
          textcolor="rgba(0, 0, 0, 0.50)"
        >
          {info.description}
        </Description1>
      </Grid>
    </Grid>
  );
};

export default FeatureCard;
