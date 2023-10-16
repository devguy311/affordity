/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectLanguage } from "../redux/language";

// @mui
import { Dialog, TextField, Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// component
import { PrimaryContainedButton } from "./commoncomponent/Button";

// utils
import { getAssetUrl } from "../util/SiteUtil";

// assets
import CloseIcon from "@mui/icons-material/Close";

// network
import { subscription } from "../constant/apiConstant";
import { useTranslation } from "react-i18next";

const IconWrapper = styled(CloseIcon)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
  cursor: "pointer",
}));

const Content = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  paddingBlock: theme.spacing(5),
  paddingInline: theme.spacing(2),
  textAlign: "center",
}));

// ----------------------------------------------------------------------

export default function SubscribeDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");


  useEffect(() => {
    const timeout = setTimeout(handleClickOpen, 15000); // Show the Pop-Up after 15 seconds

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => { };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOpen = () => {

    if (!open) setOpen(true);
  };

  const handleClose = () => {


    setOpen(false);
  };

  const subscriberHandler = async () => {
    const { t } = useTranslation("subscribe");
    const { lang } = useSelector(selectLanguage);


    if (email && fullName) {
      toast.loading(t("pleasewaitMessage"));
      const response: any = await axios.post(

        subscription,
        { email, full_name: fullName, lang },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.dismiss();

      if (response.status === 200) {
        toast.success(t("subscribeMessage1"));
      } else {
        toast.error(t("subscribeMessage2"));
      }

      handleClose();
    } else {
      toast.error(t("subscribeMessage3"));
    }
  };
  const { t } = useTranslation("subscribe");

  return (

    <Dialog
      open={open}
      maxWidth={"sm"}
      fullWidth
      sx={{ "& .MuiDialogContent-root": { padding: 0 } }}
    >
      <Grid container>
        <Grid item xs={12} md={6} sx={{ display: ["none", "none", "block"] }}>
          <img
            src={getAssetUrl("redesign/shoppingBack.webp")}
            alt={"affordify"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <IconWrapper onClick={handleClose} />

          <Content>
            <Typography variant="h5" fontWeight={700} lineHeight={1.2}>
              {t("title")}
            </Typography>
            <Typography variant="body1" fontSize={14} lineHeight={1.2} mt={2}>
              {t("description")}
            </Typography>
            <TextField
              autoFocus
              fullWidth
              type="text"
              // margin="dense"
              variant="outlined"
              label={t("fullname")}
              sx={{ mt: 4 }}
              size="small"
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
            />
            <TextField
              fullWidth
              type="email"
              margin="dense"
              variant="outlined"
              label={t("email")}
              sx={{ my: 1 }}
              size="small"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Grid item xs={12} mt={"12px"}>
              <PrimaryContainedButton
                fullWidth
                size="small"
                onClick={subscriberHandler}
              >
                {t("signupButton")}
              </PrimaryContainedButton>
            </Grid>
          </Content>
        </Grid>
      </Grid>
    </Dialog>
  );
}
