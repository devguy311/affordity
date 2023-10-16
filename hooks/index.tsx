import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";

export const useScroll = (handleScroll: () => void) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
};

export const useWindowSize = () => {
  const theme = useTheme();
  const desktopView = useMediaQuery(theme.breakpoints.up(1042));
  const mobileView = useMediaQuery(theme.breakpoints.down(900));
  const tabView = useMediaQuery(theme.breakpoints.between(900, 1300));

  return {
    desktopView,
    mobileView,
    tabView,
  };
};

export const useClickOutside = (ref: any, closeOnOutside: any) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeOnOutside(ref.current.dataset.target);
      }
    }
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref, closeOnOutside]);
};
