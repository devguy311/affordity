import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useUserProfile } from "./hook";
import { useWindowSize } from "../../hooks";

import { HeadingText } from "../commoncomponent/Text";
import ProfileTab from "./component/ProfileTab";
import GeneralDetails from "./component/GeneralDetails";
import ChangePassword from "./component/ChangePassword";
import MyDetails from "./component/MyDetails";
import DashboardBilling from "./component/DashboardBilling";

const ProfileView = () => {
  const [alertMessage, setAlertMessage] = useState<{
    severity: string;
    message: string;
  } | null>(null);

  const {
    user,
    handleChangeInfo,
    handleChangePassword,
    handleUpdateGeneralSettings,
  } = useUserProfile(setAlertMessage);

  const [selectedTab, setSelectedTab] = useState("details");
  const { mobileView } = useWindowSize();

  useEffect(() => {
    let timeoutId;

    if (alertMessage) {
      timeoutId = setTimeout(() => {
        setAlertMessage(null);
      }, 1500);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [alertMessage]);

  const renderView = () => {
    if (selectedTab === "general") {
      return (
        <GeneralDetails
          handleUpdateGeneralSettings={handleUpdateGeneralSettings}
          user={user}
          alertMessage={alertMessage}
        />
      );
    }

    if (selectedTab === "password") {
      return (
        <ChangePassword
          alertMessage={alertMessage}
          handleChangePassword={handleChangePassword}
        />
      );
    }

    if (selectedTab === "dashboard") {
      return <DashboardBilling />;
    }

    return (
      <MyDetails
        user={user}
        alertMessage={alertMessage}
        handleChangeInfo={handleChangeInfo}
      />
    );
  };

  const { t } = useTranslation("account");

  return (
    <Grid
      container
      px={"20px"}
      py={["30px", "30px", "30px"]}
      justifyContent={"center"}
    >
      <Grid item width={"100%"} maxWidth={"1280px"}>
        <Grid container>
          <Grid item xs={12} mb={"56px"}>
            <HeadingText textsize={mobileView ? "32px" : undefined}>
              {t("title")}, {user?.displayName || ""}
            </HeadingText>
          </Grid>
          <Grid
            item
            xs={12}
            md={selectedTab !== "dashboard" ? 6 : 4}
            sx={{ overflowX: "hidden" }}
          >
            <ProfileTab
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </Grid>
          <Grid
            item
            xs={12}
            mt={["32px", "32px", "0px"]}
            md={selectedTab !== "dashboard" ? 6 : 8}
          >
            {renderView()}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileView;
