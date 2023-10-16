import { Tabs } from "@mui/material";
import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { StyleTabContainer, StyledTab } from "../style";
import { useWindowSize } from "../../../hooks";

import LockIcon from "@mui/icons-material/Lock";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";

type ProfileTabProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};
const ProfileTab: FC<ProfileTabProps> = ({ selectedTab, setSelectedTab }) => {
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const { mobileView } = useWindowSize();
  const { t } = useTranslation("account");

  return (

    <StyleTabContainer>
      <Tabs
        orientation={mobileView ? "horizontal" : "vertical"}
        // variant="scrollable"
        // allowScrollButtonsMobile
        value={selectedTab}
        onChange={handleChange}

      >
        <StyledTab
          icon={<PermIdentityIcon />}
          isactive={selectedTab === "details"}
          label={mobileView ? "" : t("detailsTitle")}
          value={"details"}
        />
        <StyledTab
          icon={<LockIcon />}
          isactive={selectedTab === "password"}
          label={mobileView ? "" : t("passwordTab")}
          value={"password"}
        />
        <StyledTab
          icon={<EditIcon />}
          isactive={selectedTab === "general"}
          label={mobileView ? "" : t("generalTitle")}
          value={"general"}
        />
        <StyledTab
          icon={<HomeIcon />}
          isactive={selectedTab === "dashboard"}
          label={mobileView ? "" : "Dashboard"}
          value={"dashboard"}
        />
      </Tabs>
    </StyleTabContainer>

  );
};

export default ProfileTab;
