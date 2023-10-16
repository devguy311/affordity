import { TFunction } from "i18next";
import { useRouter } from "next/router";
import { AuthLink } from "../Style";
import Box from "@mui/material/Box";
import LanguageSelector from "./LanguageSelector";
import { ChevronRight } from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { toggleLoginModal, toggleSignupModal } from "../../../redux/auth";

type Props = {
  authenticated: boolean;
  logout: () => void;
  t: TFunction<"navbar", undefined, "navbar">;
};

const AuthView = ({ authenticated, logout, t }: Props) => {
  const navigate = useRouter();

  const dispatch = useDispatch();

  return (
    <Box display={"flex"} alignItems={"center"} gap={"40px"}>
      {authenticated ? (
        <>
          <AuthLink
            onClick={() => {
              navigate.push("/profile");
            }}
          >
            {t("profile")}
          </AuthLink>
          <AuthLink
            onClick={() => {
              logout();
            }}
          >
            {t("logout")}
          </AuthLink>
          <LanguageSelector />
        </>
      ) : (
        <>
          <AuthLink
            onClick={() => {
              if (window.dataLayer) {
                window.dataLayer.push({ event: "click-login" });
              }

              // navigate.push("/login");
              dispatch(toggleLoginModal());
            }}
          >
            {t("login")}
          </AuthLink>
          <AuthLink
            onClick={() => {
              if (window.dataLayer) {
                window.dataLayer.push({ event: "click-sign-up" });
              }
              // navigate.push("/signup");

              dispatch(toggleSignupModal());
            }}
          >
            {t("signUp")} <ChevronRight style={{ fontSize: 16 }} />
          </AuthLink>
          <LanguageSelector />
        </>
      )}
    </Box>
  );
};

export default AuthView;
