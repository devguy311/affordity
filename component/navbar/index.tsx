import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState, useRef } from "react";
import { getAssetUrl } from "../../util/SiteUtil";
import { MobileAuthLink, NavSimpleText, NavbarContainer } from "./Style";
import { getDesktopNavlinks, getNavLinks, simpleNavLink } from "./util";
import { useNavbar } from "./hook";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/language";
import NavLink from "./component/NavLink";
import LoginModal from "../auth/LoginModal";
import { useAppSelector } from "../../redux/hooks";
import {
  loginModalState,
  signupModalState,
  toggleLoginModal,
  toggleSignupModal,
} from "../../redux/auth";
import SignupModal from "../auth/SignupModal";
import AuthView from "./component/AuthView";
import MobileMenuNav from "./component/MobileMenuNav";
import LanguageSelector from "./component/LanguageSelector";
import { styled } from "@mui/material/styles";
import { useClickOutside } from "../../hooks";

const BackDropShadow = styled(Box)(() => ({
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0)",
  backdropFilter: "blur(3px)",
}));

const Navbar = () => {
  const { auth, appLogout, t, dispatch, mobileView, route } = useNavbar();
  const { navTitles, navLinks } = getNavLinks(t, mobileView);
  const [activeMenusIndex, setActiveMenusIndex] = useState<null | number>(null);
  const { lang } = useSelector(selectLanguage);
  const openLoginModal = useAppSelector(loginModalState);
  const openSignUpModal = useAppSelector(signupModalState);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const ref = useRef(null);

  useClickOutside(ref, () => {
    setOpenMobileNav(false);
  });

  if (mobileView) {
    return (
      <>
        <Box
          ref={ref}
          sx={{
            position: "sticky",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            py: "20px",
            zIndex: 999,
          }}
        >
          <LanguageSelector />
          <Link href="/" passHref>
            <Image
              alt="Affordify Logo"
              src={getAssetUrl("redesign/logo.svg")}
              width={104}
              height={24}
              objectFit="contain"
            />
          </Link>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              position: "absolute",
              top: "24px",
              right: "10px",
            }}
          >
            <LoginModal
              handleClose={() => dispatch(toggleLoginModal())}
              isOpen={openLoginModal!}
            />
            <SignupModal
              handleClose={() => dispatch(toggleSignupModal())}
              isOpen={openSignUpModal!}
            />
            <Box position={"relative"} width={"20px"} height={"20px"}>
              {openMobileNav ? (
                <Image
                  alt="Close Icon"
                  src={getAssetUrl("/redesign/close.svg")}
                  layout="fill"
                  objectFit="contain"
                  onClick={(e) => {
                    setOpenMobileNav(false);
                  }}
                />
              ) : (
                <Image
                  alt="Open Menu Icon"
                  src={getAssetUrl("/redesign/menu.svg")}
                  layout="fill"
                  objectFit="contain"
                  onClick={() => {
                    setOpenMobileNav(true);
                  }}
                />
              )}
            </Box>
            <MobileAuthLink></MobileAuthLink>
          </Box>
          {openMobileNav && (
            <MobileMenuNav
              handleClose={() => {
                setOpenMobileNav(false);
              }}
              navLinks={navLinks}
              navTitles={navTitles}
              isAuthenticated={auth.authenticated}
              logout={appLogout}
              t={t}
            />
          )}
        </Box>

        {openMobileNav && <BackDropShadow />}
      </>
    );
  }

  return (
    <NavbarContainer
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"84px"}
      container
      bgcolor="white"
      height={"64px"}
      flexWrap={"nowrap"}
    >
      <LoginModal
        handleClose={() => dispatch(toggleLoginModal())}
        isOpen={openLoginModal!}
      />
      <SignupModal
        handleClose={() => dispatch(toggleSignupModal())}
        isOpen={openSignUpModal!}
      />
      <Grid item display={"flex"} gap={"56px"}>
        <Box
          onClick={() => route.push("/")}
          width={"130px"}
          height={"32px"}
          position={"relative"}
        >
          <Image
            alt="Affordify Logo"
            src={getAssetUrl("/redesign/logo.svg")}
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Grid>
      <Grid item>
        <Box display={"flex"} alignItems={"center"} gap={"40px"}>
          {simpleNavLink(t).map((item) => (
            <NavSimpleText
              key={item.name}
              onClick={() => route.push(item.url)}
              isactive={window.location.pathname.includes(item.url) ? 1 : 0}
            >
              {item.name}
            </NavSimpleText>
          ))}
          {getDesktopNavlinks(t, auth.authenticated)
            .filter((item) => !item?.isHidden)
            .map((item, index) => (
              <Fragment key={item.label}>
                <NavLink
                  navLinks={item}
                  t={t}
                  index={index}
                  lang={lang}
                  activeMenusIndex={activeMenusIndex}
                  setActiveMenusIndex={setActiveMenusIndex}
                  mobileView={mobileView}
                />
              </Fragment>
            ))}
        </Box>
      </Grid>
      <Grid item>
        <AuthView
          authenticated={!!auth.authenticated}
          t={t}
          logout={appLogout}
        />
      </Grid>
    </NavbarContainer>
  );
};

export default Navbar;
