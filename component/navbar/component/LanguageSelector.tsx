import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import i18next from "i18next";
import { FC, useEffect, useRef } from "react";

import { languagesOptions } from "../../../constant/siteOptions";
import { useAppDispatch } from "../../../redux/hooks";
import { setLang } from "../../../redux/language";
import { StyledLanguageSelector } from "../Style";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

type LanguageSelectorProps = {
  variant?: "primary" | "secondary";
  mobile?: boolean;
};
const LanguageSelector: FC<LanguageSelectorProps> = ({
  variant = "primary",
  mobile,
}) => {
  const dispatch = useAppDispatch();

  const anchorRef = useRef(null);

  const { i18n } = useTranslation();

  const router = useRouter();
  const pathname = router.pathname;
  const locale = router.locale;

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale, () => {
        dispatch(setLang(locale));
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, i18n]);

  if (pathname === "/blog/[id]") return null;

  return (
    <StyledLanguageSelector variant={variant}>
      <Select
        ref={anchorRef}
        MenuProps={
          mobile
            ? {
                disablePortal: true,
                anchorOrigin: {
                  vertical: -40,
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "center",
                },
              }
            : {}
        }
        value={locale}
        onChange={(event) => {
          const newLang = event.target.value;

          router.push(router.pathname, router.asPath, { locale: newLang });

          i18next.changeLanguage(newLang, () => {
            dispatch(setLang(newLang));
          });

          event.stopPropagation();
        }}
        size="small"
        variant="standard"
        disableUnderline
      >
        {languagesOptions.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            <ListItemText primary={item.text} />
          </MenuItem>
        ))}
      </Select>
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
