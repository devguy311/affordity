import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize, useClickOutside } from "../../hooks";
import { logout, selectAuth } from "../../redux/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearCookie, flushTokenFromCookies, setCookie } from "../../util/common-function";
import { EXPIRES, LOWER_TOKEN, REFRESH_TOKEN, USER_AUTH_TOKEN, USER_AUTH_UID } from "../../util/const";
import { useRouter } from "next/router";
import { firebaseAuth } from "../../firebase/index";

export const useNavbar = () => {
  const [user, setUser] = useState<any>(null);
  const route = useRouter();
  const { auth } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const { mobileView } = useWindowSize();

  const appLogout = () => {
    dispatch(logout());
    route.push("/");
    flushTokenFromCookies()
    clearCookie(USER_AUTH_TOKEN)
    clearCookie(USER_AUTH_UID)
  };
  const { t } = useTranslation("navbar");

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user: any) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (user) {
      user?.getIdToken(true).then((idToken: any) => {
        localStorage.setItem(LOWER_TOKEN, idToken);
        localStorage.setItem(EXPIRES, user.stsTokenManager.expirationTime);
        localStorage.setItem(REFRESH_TOKEN, user.stsTokenManager.refreshToken);

        setCookie(USER_AUTH_TOKEN, idToken, 7);
        setCookie(USER_AUTH_UID, user?.uid, 7);
      });
    }
  }, [user]);

  return {
    auth,
    route,
    appLogout,
    t,
    dispatch,
    mobileView
  }
}