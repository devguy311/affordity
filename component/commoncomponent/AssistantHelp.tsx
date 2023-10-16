import { Box, Grid } from "@mui/material";
import React, { FC } from "react";
import { Description1 } from "./Style";
import Image from "next/image";

export type AssistantHelpType = {
  id: number;
  title: string;
  description: string;
  logo: string;
};

type AssistantHelpProps = {
  title: string;
  helpData: AssistantHelpType[];
};
const AssistantHelp: FC<AssistantHelpProps> = ({ helpData, title }) => {
  return (
    <Grid container justifyContent={"center"} pl={["0px", "0px", "80px"]}>
      <Grid item xs={12}>
        <Description1 style={{ textAlign: "left" }} textsize="20px">
          {title}
        </Description1>
      </Grid>
      <Grid item xs={12} mt={"40px"}>
        <Grid container rowSpacing={"32px"}>
          {helpData.map((item) => (
            <Grid key={item.id} item xs={12}>
              <Grid container columnSpacing={"24px"} flexWrap={"nowrap"}>
                <Grid item>
                  <Box position={"relative"} height={"24px"} width={"24px"}>
                    <Image
                      alt={item.title}
                      src={item.logo}
                      layout="fill"
                      objectFit="contain"
                    />
                  </Box>
                </Grid>
                <Grid item>
                  <Description1 style={{ textAlign: "left" }} textsize="14px">
                    {item.title}
                  </Description1>
                  <Description1
                    style={{ textAlign: "left" }}
                    mt={"4px"}
                    textsize="12px"
                    textcolor="rgba(0, 0, 0, 0.5)"
                  >
                    {item.description}
                  </Description1>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AssistantHelp;
