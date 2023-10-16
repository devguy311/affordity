import React, { FC } from "react";
import { NavInfoType } from "../type";
import { Box, Grid } from "@mui/material";
import { Description1, Heading1 } from "../../commoncomponent/Style";
import HeaderNavLink from "./HeaderNavLink";

type NavInfoProps = {
  info: NavInfoType;
};
const NavInfo: FC<NavInfoProps> = ({ info }) => {
  return (
    <Grid container px={"100px"} py={"20px"}>
      <Grid item xs={12}>
        <Heading1 textsize="24px" textcolor="#515151">
          {info.title}
        </Heading1>
      </Grid>
      <Grid item xs={12}>
        <Box maxWidth={"800px"}>
          <Description1 mt={"6px"} textcolor="#4d4d4d">
            {info.description}
          </Description1>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container mt={"18px"} columnSpacing={"20px"}>
          {info.links.map((item) => (
            <Grid item xs={4} key={item.label}>
              <Grid container>
                <Grid item xs={12} mb={"0px"}>
                  <Heading1 textsize="24px">{item.label}</Heading1>
                </Grid>
                {item.nestedLinks.map((link) => (
                  <HeaderNavLink
                    key={link.id}
                    mobileView={false}
                    navInfo={link}
                  />
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavInfo;