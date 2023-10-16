import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/user";
import { BudgetIncomeType } from "./type";
import { useRouter } from "next/router";

export const useBudgetRuleResult = () => {
  const { t } = useTranslation("budgetrule");
  const navigate = useRouter();
  const { query } = navigate
  const stringQuery = query.data as unknown as string

  const { user } = useAppSelector(selectUser);

  const budgetResult: BudgetIncomeType = JSON.parse(stringQuery);

  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";

  return {
    t,
    budgetResult,
    navigate,
    prefferedCurrency,
  };
};
