import React from 'react';
import Seo from "../../component/Seo";

import BudgetRuleInput from '../../component/budgetrule/BudgetRuleInput'
import { useTranslation } from "react-i18next";


const BudgetRuleInputPage = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("budgetRule.title")}
        description={t("budgetRule.description") as string}
      />

      <BudgetRuleInput />
    </>
  );
}

export default BudgetRuleInputPage