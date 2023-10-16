import { TFunction } from "i18next";
import React, { FC } from "react";
import { NestedNavLinkType } from "../type";
import { NavTitle } from "../util";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AccordianContainer, MobileLinkTitle } from "../Style";
import Image from "next/image";
import { getAssetUrl } from "../../../util/SiteUtil";
import HeaderNavLink from "./HeaderNavLink";

type MobileNavLinkProps = {
  t: TFunction<"navbar", undefined, "navbar">;
  navLinks: NestedNavLinkType[];
  title: NavTitle;
  isOpen?: boolean;
  linkUrl?: string;
  onLinkClick: () => void;
  handleClose?: () => void;
  handleSelectedNav?: (title: string) => void;
};

const MobileNavLink: FC<MobileNavLinkProps> = ({
  navLinks,
  t,
  title,
  isOpen,
  linkUrl,
  onLinkClick,
  handleClose,
  handleSelectedNav,
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <AccordianContainer
          onClick={() => {
            onLinkClick();
            handleSelectedNav?.(title);
          }}
        >
          <MobileLinkTitle>{title}</MobileLinkTitle>
          {!linkUrl && (
            <Box position={"relative"} width={"24px"} height={"24px"}>
              <Image
                alt={isOpen ? "arrow_down" : "arrow up"}
                src={getAssetUrl(
                  `/redesign/${isOpen ? "arrowdown.svg" : "arrowup.svg"}`
                )}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          )}
        </AccordianContainer>
        {isOpen && (
          <Grid>
            {navLinks.map((item) => (
              <Grid container key={item.label}>
                <HeaderNavLink
                  navInfo={item}
                  mobileView
                  handleClose={handleClose}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default MobileNavLink;
