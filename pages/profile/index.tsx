import React from "react";

// component
import Seo from "../../component/Seo";
import Profile from "../../component/profile/ProfileView";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("home.title")}
        description={t("home.description") as string}
      />

      <Profile />
    </>
  );
};

export default ProfilePage;
