/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DescriptionText } from "../../commoncomponent/CommonStyle";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { ImageContainer, NavContainer, SoonTag } from "../Style";
import { NestedLinkType, NestedNavLinkType } from "../type";

type Props = {
  navInfo: NestedLinkType | NestedNavLinkType;
  setNavOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  mobileView: boolean;
  handleClose?: () => void;
};

const HeaderNavLink = ({
  navInfo,
  setNavOpen,
  mobileView,
  handleClose,
}: Props) => {
  const navigate = useRouter();
  const { pathname } = navigate;
  const { t } = useTranslation("navbar");

  return (
    <Grid item xs={12}>
      <NavContainer
        mobileview={mobileView ? 1 : 0}
        onClick={() => {
          if (navInfo.url) {
            navigate.push(navInfo.url);
            setNavOpen && setNavOpen(false);
            handleClose && handleClose();
          }
        }}
        isactive={navInfo.url !== "" && pathname.includes(navInfo.url) ? 1 : 0}
      >
        <Grid container flexWrap={"nowrap"} spacing={"15px"}>
          <Grid item height="50px">
            <ImageContainer
              alignItems={mobileView ? "center" : "inherit"}
              isactive={
                navInfo.url !== "" && pathname.includes(navInfo.url) ? 1 : 0
              }
            >
              {!mobileView && <img src={navInfo.icon} alt={navInfo.label} />}

              {mobileView && (
                <img
                  src={(navInfo as NestedNavLinkType).iconMobile}
                  alt={navInfo.label}
                />
              )}
            </ImageContainer>
          </Grid>
          <Grid item>
            <Box>
              <DescriptionText
                textweight={700}
                textsize={"14px"}
                textheight={"28px"}
              >
                {navInfo.label}
                {navInfo.isSoon && (
                  <SoonTag style={{ marginLeft: 10 }}>{t("soon")}</SoonTag>
                )}
              </DescriptionText>
              <DescriptionText
                textweight={250}
                textsize={"14px"}
                textheight={"21px"}
                className="descriptionText"
              >
                {(navInfo as NestedLinkType).description ||
                  (navInfo as NestedNavLinkType).descriptionText}
              </DescriptionText>
            </Box>
          </Grid>
        </Grid>
      </NavContainer>
    </Grid>
  );
};

export default HeaderNavLink;