import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  authenticate,
  loginFacebook,
  loginGoogle,
  logout,
  selectAuth,
} from "../../redux/auth";
import { useRouter } from "next/router";
import { firebaseAuth } from "../../firebase/index";
import CookieConsent from "../cookieconsent";
import ScrollToTop from "../scrolltotop";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import { setAxiosInterceptor } from "./util";
import Subscribe from "../homepage/component/Subscribe";

import Navbar from "../navbar";
// import Footer from '../footer'

// const Navbar = dynamic(import("../navbar"), { ssr: false });
const Footer = dynamic(import("../footer"), { ssr: false });

const Authentication = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const route = useRouter();

  const refreshLoginFacebook = useCallback(
    async (user) => {
      return dispatch(loginFacebook(user));
    },
    [dispatch]
  );

  setAxiosInterceptor();

  const refreshLoginGoogle = useCallback(
    async (user) => {
      return dispatch(loginGoogle(user));
    },
    [dispatch]
  );

  const authenticateUser = useCallback(
    async (user) => {
      return dispatch(authenticate(user));
    },
    [dispatch]
  );

  useEffect(() => {
    const checkAuthentication = async () => {
      firebaseAuth.onAuthStateChanged(async (user) => {
        if (user && !auth.authenticated) {
          if (
            user.providerData?.length &&
            user.providerData.some((provider) =>
              provider.providerId.includes("facebook")
            )
          ) {
            return await refreshLoginFacebook(user);
          } else if (
            user.providerData?.length &&
            user.providerData.some((provider) =>
              provider.providerId.includes("google")
            )
          ) {
            return await refreshLoginGoogle(user);
          } else {
            return await authenticateUser(user);
          }

          // return await refreshLogin(user.displayName, user.email);
        }
        if (!user && auth.authenticated) {
          dispatch(logout());
          route.push("/");
        }

        if (!user) {
          await authenticateUser(null);
        }
      });
    };
    checkAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hideNavBar = ["/login", "/signup", "/login-info"];
  return (
    <Box flexGrow={1} textAlign={"center"} color={"#666"}>
      <CookieConsent />
      {!hideNavBar.includes(route.pathname) && <Navbar />}

      <ScrollToTop />

      {children}

      {!hideNavBar.includes(route.pathname) && !auth.authenticated && (
        <Subscribe />
      )}

      {!hideNavBar.includes(route.pathname) && <Footer />}
      <Toaster />
    </Box>
  );
};

export default Authentication;
