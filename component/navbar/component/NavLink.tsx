import React, { useEffect, useRef, useState } from "react";
import { TFunction } from "i18next";
import { StyledNavTitle } from "../Style";
import { useClickOutside } from "../../../hooks";
import { Box } from "@mui/material";
import { SolutionMenu } from "../Style";
import { useRouter } from "next/router";
import { DesktopNavLinkType } from "../type";
import NavInfo from "./NavInfo";

type Props = {
  t: TFunction<"navbar", undefined, "navbar">;
  lang: string;
  navLinks: DesktopNavLinkType;
  index: number;
  activeMenusIndex: null | number;
  setActiveMenusIndex: React.Dispatch<React.SetStateAction<null | number>>;
  mobileView: boolean;
};

const NavLink: React.FC<Props> = ({
  t,
  navLinks,
  activeMenusIndex,
  setActiveMenusIndex,
  index,
}) => {
  const [opened, setOpened] = useState(false);
  const solutionsRef = useRef(null);
  useClickOutside(solutionsRef, () => {
    setOpened(false);
    setActiveMenusIndex(null);
  });
  const navigate = useRouter();
  const openSubMenus = () => {
    setActiveMenusIndex(index);
    setOpened(true);
  };

  const handleCloseSubMenus = () => {
    setOpened(false);
    setActiveMenusIndex(null);
  };

  useEffect(() => {
    setOpened((prev) => activeMenusIndex === index && prev);
  }, [activeMenusIndex, index]);

  return (
    <div onMouseEnter={openSubMenus}>
      <StyledNavTitle
        isactive={opened ? 1 : 0}
        key={opened.toString()}
        onClick={() => navLinks.url && navigate.push(navLinks.url)}
      >
        {t(navLinks.label)}
      </StyledNavTitle>
      {opened && <Box position={"relative"} top={"25px"} />}
      {navLinks.info && (
        <SolutionMenu
          isdatavisible={opened ? 1 : 0}
          ref={solutionsRef}
          onMouseLeave={handleCloseSubMenus}
        >
          <NavInfo info={navLinks.info} />
        </SolutionMenu>
      )}
    </div>
  );
};

export default NavLink;
