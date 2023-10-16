import React from "react";
import Styled from "@emotion/styled";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { PrimaryContainedButton } from "../../commoncomponent/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTranslation } from "react-i18next";


const CardRoot = Styled(Box)`
  height: 400px;
  padding: 24px;

  position: relative;
  
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  text-align: start;
  
  border-radius: 12px;
  border: 1px solid #CCCCCC;
  backgroudn: #FFFFFF;

  @media (max-width: 900px) {
    height: 100%;
}
`;

const Badge = Styled(Box)`
  height: 24px;
  min-width: 24px;
  padding-inline: 6px;

  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  line-height: 0;
  font-size: 0.75rem;
  font-weight: 700;

  border-radius: 6px;
  background: #2A2A2A;

`;

interface IProps {
  priceId: string;
  plan: string;
  price: string;
  description: string;
  features: string[];
  isDark?: boolean;
  isLoading: boolean;
  isActive?: boolean;
  handleCheckout: (priceId: string) => void;
  handleCustomerPortal?: () => void;
}

export default function PricingCard({
  priceId,
  plan,
  price,
  description,
  features,
  isDark,
  isLoading,
  isActive,
  handleCheckout,
  handleCustomerPortal,
}: IProps) {
  const { t } = useTranslation("dashboardOverview");
  return (
    <CardRoot sx={{ background: isDark ? "#248A8A" : "#FFFFFF" }}>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Inter",
            color: isDark ? "#FFFFFF" : "#333333",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          {plan}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, mt: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Inter",
              color: isDark ? "#FFFFFF" : "#1E1C1C",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {price}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Inter",
              color: isDark ? "#FFFFFF" : "#1E1C1C",
              fontSize: 24,
              fontWeight: 400,
            }}
          >

          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "Inter",
            color: isDark ? "#FFFFFF" : "#737373",
            fontSize: 16,
            fontWeight: 400,
            mt: 2,
          }}
        >
          {description}
        </Typography>
      </Box>

      <List sx={{ minHeight: 120 }}>
        {features.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemIcon sx={{ minWidth: "24px" }}>
              <CheckCircleOutlineIcon
                sx={{
                  width: 16,
                  height: 16,
                  color: isDark ? "#FFFFFF" : "#248A8A",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={item}
              sx={{
                fontWeight: 400,
                color: isDark ? "#FFFFFF" : "#1E1C1C",
                "& > span": { fontFamily: "Inter", fontSize: 16 },
              }}
            />
          </ListItem>
        ))}
      </List>

      {!isActive ? (
        <PrimaryContainedButton
          fullWidth
          onClick={() => handleCheckout(priceId)}
          disabled={isLoading}
        >
          {t("button")}
        </PrimaryContainedButton>
      ) : (
        <PrimaryContainedButton
          fullWidth
          onClick={handleCustomerPortal}
          disabled={isLoading}
        >
          {t("manageButton")}
        </PrimaryContainedButton>
      )}

      {/* <Badge>Current</Badge> */}
    </CardRoot>
  );
}
