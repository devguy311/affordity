import Grid from "@mui/material/Grid";
import React, { FC, useState } from "react";
import { NavTitle } from "../util";
import { NavSimpleText } from "../Style";
import { NavLinkType } from "../type";
import MobileNavLink from "./MobileNavLink";
import { TFunction } from "i18next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toggleLoginModal, toggleSignupModal } from "../../../redux/auth";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { getAssetUrl } from "../../../util/SiteUtil";

type MobileMenuNavProps = {
  navTitles: NavTitle[];
  navLinks: {
    [key: string]: NavLinkType;
  };
  t: TFunction<"navbar", undefined, "navbar">;
  isAuthenticated?: boolean;
  handleClose: () => void;
  logout: () => void;
};
const MobileMenuNav: FC<MobileMenuNavProps> = ({
  navTitles,
  navLinks,
  isAuthenticated,
  t,
  handleClose,
  logout,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [selectedNav, setSelectedNav] = useState("");

  const handleSelectedNav = (title: string) => {
    if (title !== selectedNav) {
      setSelectedNav(title);
    } else {
      setSelectedNav("");
    }
  };

  return (
    <Grid
      p={"32px"}
      position={"absolute"}
      zIndex={9999}
      container
      bgcolor={"white"}
      top="64px"
      sx={{
        boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`,
      }}
    >
      <Grid item xs={12}>
        <MobileNavLink
          navLinks={[]}
          title={t("dashboard")}
          t={t}
          linkUrl="/myfinance-overview"
          onLinkClick={() => {
            handleClose();
            router.push("/myfinance-overview");
          }}
        />
      </Grid>

      {!isAuthenticated && (
        <Grid item xs={12}>
          <MobileNavLink
            navLinks={[]}
            title={t("pricing")}
            t={t}
            linkUrl="/pricing"
            onLinkClick={() => {
              handleClose();
              router.push("/pricing");
            }}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        {!isAuthenticated ? (
          <MobileNavLink
            navLinks={[]}
            title={t("login")}
            t={t}
            linkUrl="/login"
            onLinkClick={() => {
              handleClose();
              dispatch(toggleLoginModal());
            }}
          />
        ) : (
          <MobileNavLink
            navLinks={[]}
            title={t("profile")}
            t={t}
            linkUrl="/profile"
            onLinkClick={() => {
              handleClose();
              router.push("/profile");
            }}
          />
        )}
      </Grid>
      <Grid item xs={12}>
        {!isAuthenticated ? (
          <MobileNavLink
            navLinks={[]}
            title={t("signUp")}
            t={t}
            linkUrl="/signup"
            onLinkClick={() => {
              handleClose();
              dispatch(toggleSignupModal());
            }}
          />
        ) : (
          <MobileNavLink
            navLinks={[]}
            title={t("logout")}
            t={t}
            linkUrl="#"
            onLinkClick={() => {
              handleClose();
              logout();
            }}
          />
        )}
      </Grid>

      {navTitles.map((title, index) => {
        const titleNavLinks = navLinks[title];
        return (
          <Grid item xs={12} key={title}>
            <MobileNavLink
              navLinks={titleNavLinks?.nestedLinks || []}
              title={title}
              t={t}
              isOpen={selectedNav === title}
              handleSelectedNav={handleSelectedNav}
              handleClose={handleClose}
              linkUrl={titleNavLinks?.url || ""}
              onLinkClick={() => {
                if (titleNavLinks.url) {
                  handleClose();
                  router.push(titleNavLinks.url);
                }
              }}
            />
          </Grid>
        );
      })}



      <Grid
        item
        xs={12}
        mt={"30px"}
        md={1}
        display={"flex"}
        flexDirection={"column-reverse"}
      >
        <Box
          display={"flex"}
          gap={["20px", "20px", "0px"]}
          justifyContent={["center", "center", "space-between"]}
        >
          <Box
            style={{ cursor: "pointer" }}
            position={"relative"}
            height={"18.1px"}
            width={"10.46px"}
          >
            <Image
              src={getAssetUrl("redesign/fb.webp")}
              layout="fill"
              objectFit="contain"
              alt={"facebook"}
              onClick={() =>
                window.open("https://www.facebook.com/affordify.io", "_blank")
              }
            />
          </Box>
          <Box
            style={{ cursor: "pointer" }}
            position={"relative"}
            height={"18.06px"}
            width={"18.06px"}
          >
            <Image
              src={getAssetUrl("redesign/insta.webp")}
              layout="fill"
              objectFit="contain"
              alt={"instagram"}
              onClick={() =>
                window.open("https://www.instagram.com/affordify.io/", "_blank")
              }
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MobileMenuNav;
