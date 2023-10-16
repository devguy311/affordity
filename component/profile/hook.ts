/* eslint-disable no-unused-vars */
import {
  updateEmail,
  updatePassword,
  User,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

import { useState } from "react";
import { useRouter } from "next/router";

import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { firebaseAuth } from "../../firebase/index";
import { selectAuth, deleteUserAccount } from "../../redux/auth";
import { updateUser } from "../../redux/user";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { MyDetailType } from "./type";

export const useUserProfile = (
  setAlertMessage?: React.Dispatch<
    React.SetStateAction<{ severity: string; message: string } | null>
  >
) => {
  const { t } = useTranslation("account");

  const router = useRouter();

  const { user } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [authProvider, setAuthProvider] = useState("firebase");

  const prefferedCurrency = user?.profileData?.prefferedCurrency ?? "USD";

  const handleOpen = () => {
    const currentUser = firebaseAuth.currentUser as User;

    setAuthProvider(currentUser.providerData[0].providerId);

    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChangeInfo = (data: MyDetailType) => {
    const hasUsernameChanged = user.displayName !== data.displayName;
    const hasEmailChanged = user.email !== data.email;

    if (hasUsernameChanged) {
      handleChangeUsername(data);
    } else if (hasEmailChanged) {
      handleChangeEmail({
        email: data.email,
        password: data.password,
      });
    } else {
      setAlertMessage?.({
        severity: "warning",
        message: t("noValueChangedMessage")!,
      });
    }
  };

  const handleChangeUsername = async (value: { displayName: string }) => {
    try {
      toast.loading("loading...", { position: "bottom-right" });

      const userData = {
        ...user,
        displayName: value.displayName,
      };

      await dispatch(updateUser(userData));

      toast.dismiss();

      setAlertMessage?.({
        severity: "success",
        message: t("successResultMessage")!,
      });
    } catch (err) {
      toast.dismiss();

      setAlertMessage?.({
        severity: "error",
        message: t("errorResultMessage")!,
      });
    }
  };

  const handleChangeEmail = async (value: {
    email: string;
    password: string;
  }) => {
    try {
      if (!value.password) {
        setAlertMessage?.({
          severity: "error",
          message: "Please also enter your password.",
        });

        return;
      }

      toast.loading("loading...", { position: "bottom-right" });

      const currentUser = firebaseAuth.currentUser as User;

      const credential = EmailAuthProvider.credential(
        currentUser.email as string,
        value.password
      );

      // re authenticate
      await reauthenticateWithCredential(currentUser, credential);

      await updateEmail(currentUser, value.email);

      const userData = {
        ...user,
        email: value.email,
      };

      await dispatch(updateUser(userData));

      toast.dismiss();

      setAlertMessage?.({
        severity: "success",
        message: t("successResultMessage")!,
      });
    } catch (err: any) {
      toast.dismiss();

      setAlertMessage?.({
        severity: "error",
        message: err.message,
      });
    }
  };

  const handleChangePassword = async (value: {
    oldPassword: string;
    newPassword: string;
  }) => {
    try {
      toast.loading("loading...", { position: "bottom-right" });

      const currentUser = firebaseAuth.currentUser as User;

      const credential = EmailAuthProvider.credential(
        currentUser.email as string,
        value.oldPassword
      );

      // re authenticate
      await reauthenticateWithCredential(currentUser, credential);

      await updatePassword(currentUser, value.newPassword);

      toast.dismiss();

      setAlertMessage?.({
        severity: "success",
        message: t("successResultMessage")!,
      });
    } catch (err: any) {
      toast.dismiss();

      setAlertMessage?.({
        severity: "error",
        message: t("errorResultMessage")!,
      });
    }
  };

  const handleUpdateGeneralSettings = async (values: any) => {
    const userData = {
      ...user,
      profileData: {
        ...user?.profileData,
        ...values,
      },
    };

    try {
      toast.loading("loading...", { position: "bottom-right" });

      await dispatch(updateUser(userData));

      toast.dismiss();

      setAlertMessage?.({
        severity: "success",
        message: t("successResultMessage")!,
      });
    } catch (err) {
      toast.dismiss();

      setAlertMessage?.({
        severity: "error",
        message: t("errorResultMessage")!,
      });
    }
  };

  const handleDeleteUser = async (password?: string) => {
    try {
      let subscriptionId: string | null = null;

      if (
        user?.subscription?.status === "active" ||
        user?.subscription?.status === "trialing"
      ) {
        subscriptionId = user.subscription.id;
      }

      await dispatch(deleteUserAccount({ password, subscriptionId }));
      handleClose();

      router.push("/");
    } catch (err: any) {
      console.error(err.message);
      toast.error(`Unable to delete account ${err.message}`);
    }
  };

  return {
    isOpen,
    user,
    prefferedCurrency,
    authProvider,
    handleChangeUsername,
    handleUpdateGeneralSettings,
    handleChangeEmail,
    handleChangePassword,
    handleChangeInfo,
    handleDeleteUser,
    handleClose,
    handleOpen,
  };
};
