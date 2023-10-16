import React, { FC } from "react";
import { InfoCardType } from "./type";
import { CardInfoContainer } from "./style";
import Box from "@mui/material/Box";
import Image from "next/image";
import { DescriptionText2 } from "../Text";

type InfoCardProps = {
  cardInfo: InfoCardType;
};
const InfoCard: FC<InfoCardProps> = ({ cardInfo }) => {
  return (
    <CardInfoContainer>
      <Box display={"flex"} justifyContent={"center"}>
        <Box position={"relative"} height={"24px"} width={"24px"}>
          <Image
            alt={cardInfo.title}
            src={cardInfo.logo}
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Box>
      <Box display={"flex"} mt={"8px"} justifyContent={"center"}>
        <DescriptionText2 align={"center"}>
          {cardInfo.title}
        </DescriptionText2>
        
      </Box>
      <Box display={"flex"} mt={"8px"} justifyContent={"center"}>
      <DescriptionText2
          textsize="12px"
          textcolor="rgba(0, 0, 0, 0.5)"
          align={"center"}
          style={{lineHeight: '150%'}}
        >
          {cardInfo.description}
        </DescriptionText2>

      </Box>
    </CardInfoContainer>
  );
};

export default InfoCard;
