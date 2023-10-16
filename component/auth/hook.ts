import { useState } from "react";
import {
  login,
  loginFacebook,
  loginGoogle,
  signupUser,
  signupModalState,
  toggleSignupModal,
  toggleLoginModal,
} from "../../redux/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { LoginType } from "./type";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { SignupType } from "./type";
import axios from "axios";
import va from "@vercel/analytics";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/language";

import { subscription } from "../../constant/apiConstant";
import { SignUpInitialValue } from "./util";

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { t } = useTranslation("login");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>("");

  const facebookLogin = () => {
    dispatch(loginFacebook(null)).then((res: any) => {
      if (res.error) {
        return;
      }
      router.push("/");
      dispatch(toggleLoginModal());
    });
  };

  const googleLogin = () => {
    dispatch(loginGoogle(null)).then((res: any) => {
      if (res.error) {
        return;
      }
      router.push("/");
      dispatch(toggleLoginModal());
    });
  };

  const handleLoginUser = (values: LoginType) => {
    va.track("login");
    if (window.dataLayer) {
      window.dataLayer.push({ event: "login-form" });
    }

    setError("");
    dispatch(login({ email: values.email, password: values.password })).then(
      (res: any) => {
        if (res.error) {
          if (res.payload.error.includes("auth/user-not-found")) {
            setError(t("error1"));
          } else if (res.payload.error.includes("auth/invalid-email")) {
            setError(t("error2"));
          } else if (res.payload.error.includes("auth/wrong-password")) {
            setError(t("error3"));
          } else {
            setError(res.payload.error);
          }
          return;
        }
        router.push("/");
        dispatch(toggleLoginModal());
      }
    );
  };

  return {
    showPassword,
    router,
    error,
    setShowPassword,
    googleLogin,
    handleLoginUser,
    facebookLogin,
  };
};

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("signup");
  const router = useRouter();
  const { lang } = useSelector(selectLanguage);

  const openSignUpModal = useAppSelector(signupModalState);

  const [showPassword, setShowPassword] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({
    password: false,
    confirmPassword: false,
  });

  const [error, setError] = useState<string | null>("");

  const [showQuestionary, setShowQuestionary] = useState<boolean>(false);
  const [questionaries, setQuestionaries] = useState<string[]>([]);
  const [formData, setFormData] = useState<SignupType>(SignUpInitialValue);

  const handleQuestionary = (value: string) => {
    if (questionaries.includes(value)) {
      setQuestionaries((prev) => {
        return prev.filter((item) => item !== value);
      });
    } else {
      setQuestionaries((prev) => {
        return [...prev, value];
      });
    }
  };

  const handleFormSubmit = (values: SignupType) => {
    setFormData(values);
    setShowQuestionary(true);
  };

  const facebookLogin = () => {
    dispatch(loginFacebook(null)).then((res: any) => {
      if (res.error) {
        return;
      }

      router.push("/");
      dispatch(toggleSignupModal());
    });
  };

  const googleLogin = () => {
    dispatch(loginGoogle(null)).then((res: any) => {
      if (res.error) {
        return;
      }

      router.push("/");
      dispatch(toggleSignupModal());
    });
  };

  const handleSignup = async () => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: "create-account-form" });
    }
    va.track("create-account");

    axios.post(
      subscription,
      { email: formData.email, full_name: formData.fullName, lang },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setError("");

    dispatch(
      signupUser({
        email: formData.email,
        password: formData.password,
        displayName: formData.fullName,
        getNotification: formData.getNotification,
        questionaries: questionaries,
      })
    ).then((res: any) => {
      if (res.error) {
        if (res.payload.error.includes("auth/invalid-email")) {
          setError(t("error1"));
        } else if (res.payload.error.includes("auth/email-already-in-use")) {
          setError(t("error2"));
        } else {
          setError(res.payload.error);
        }

        return;
      }

      router.push("/myfinance");

      dispatch(toggleSignupModal());
    });
  };

  return {
    t,
    showPassword,
    error,
    facebookLogin,
    setShowPassword,
    showQuestionary,
    questionaries,
    googleLogin,
    handleSignup,
    handleQuestionary,
    handleFormSubmit,
  };
};
