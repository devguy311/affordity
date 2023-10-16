import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { HeadingText, DescriptionText2 } from "../../commoncomponent/Text";

// mui
import { Grid, Stack, Box, Alert } from "@mui/material";

// icons
import { CartIcon, FinanceIcon, ArrowRightIcon, ChromeIcon } from "../../icons";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

// utils
import { postData } from "../../../util/common-function";
import { getWebViewRedirectURL } from "../../myfinance/util";

// hook
import { selectAuth } from "../../../redux/auth";
import { useAppSelector } from "../../../redux/hooks";

const ManageButtonRoot = Styled(Box)`
  max-width: 330px;
  padding: 20px 32px;

  position: relative;
  
  display: flex;
  align-items: center;
  gap: 16px;
  
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.15);
  color: black;

  transition: background 0.25s ease, color 0.25s ease-in,;
  cursor: pointer;
  
  svg {
    flex-shrink: 0;
    color: inherit;
  }

  p {
    font-size: 12px;
    line-height: 1.2;

    color: inherit;
  }

  &:hover {
    color: white;
    background: #000000;
  }
`;

export default function ManagaSubscription() {
  const { user } = useAppSelector(selectAuth);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation("account");

  const handleCustomerPortal = async () => {
    try {
      toast.loading("Redirecting to Portal...", {
        position: "bottom-right",
      });

      const { url } = await postData({
        url: "/api/create-portal-link",
        data: { customerId: user.customerId },
      });

      router.push(url);
    } catch (error: any) {
      console.error(error.message);

      toast.dismiss();

      setError(error.message);
    }
  };

  const handleConnectedBanks = async () => {
    try {
      toast.loading("loading...", {
        position: "bottom-right",
      });

      const response = await getWebViewRedirectURL();

      toast.dismiss();
      toast.loading("Redirecting...", {
        position: "bottom-right",
      });

      router.push(response.webview_url);
    } catch (error: any) {
      toast.error(error.message, {
        position: "bottom-right",
      });
    } finally {
      toast.dismiss();
    }
  };

  const ContactUs = async () => {
    try {
      toast.loading("loading...", {
        position: "bottom-right",
      });

      router.push("/contact");
    } catch (error: any) {
      toast.error(error.message, {
        position: "bottom-right",
      });
    } finally {
      toast.dismiss();
    }
  };

  return (
    <>
      {error && (
        <Box mb={2}>
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        </Box>
      )}

      <Grid container spacing={3} >
        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={12} mt={"20px"}>
            <ManageButton
              icon={<CartIcon width={24} height={24} />}
              title={t("ManageSubscriptionTitle")}
              description={t("ManageSubscriptionDesc")}
              handleClick={handleCustomerPortal}
            />
          </Grid>
          <Grid item xs={12} md={12} mt={"20px"}>
            <ManageButton
              icon={<ChromeIcon width={24} height={24} />}
              title={t("ConnectAccountTitle")}
              description={t("ConnectAccountDesc")}
              handleClick={handleConnectedBanks}
            />
          </Grid>
          <Grid item xs={12} md={12} mt={"20px"}>
            <ManageButton
              icon={<LocalOfferOutlinedIcon width={24} height={24} />}
              title={t("DiscountTitle")}
              description={t("DiscountDesc")}
              handleClick={ContactUs}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            justifyContent={"center"}
          >
            <FinanceIcon width={"50%"} height={"50%"} />
          </Grid>
          <Grid container spacing={"5px"} mt={"25px"} justifyContent={"center"}>
            <HeadingText textsize="24px">
              {t("picTitle")}
              <span style={{ color: "#4B8F8F", display: "inline-block" }}>
                {t("picTitle2")}
              </span>
            </HeadingText>
            <Grid container mt={"10px"} justifyContent={"center"}>
              <DescriptionText2 textsize="14px" textcolor="#4F5459" align="center">
                {t("picDesc")}
                <span
                  style={{
                    fontWeight: 700,
                    cursor: "pointer",
                    marginRight: 5,
                  }}
                  onClick={() => window.open("https://www.powens.com/privacy-policy/", "_blank")}
                >
                  {t("powensRead")}
                </span>
              </DescriptionText2>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    </>
  );
}

interface IProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  handleClick: () => void;
}
function ManageButton({ icon, title, description, handleClick }: IProps) {
  return (
    <ManageButtonRoot onClick={handleClick}>
      {icon}
      <Stack
        spacing={0.5}
        sx={{
          borderRightWidth: 1,
          borderRightStyle: "solid",
          borderRightColor: "inherit",
        }}
      >
        <HeadingText textsize="21px" textweight={700} >
          {title}
        </HeadingText>
        <DescriptionText2 textsize="16px">
          {description}
        </DescriptionText2>
      </Stack>
      <ArrowRightIcon width={24} height={24} />
    </ManageButtonRoot>
  );
}
