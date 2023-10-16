import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import moment from "moment";
import { selectAuth, toggleSignupModal } from "../../redux/auth";
import { selectUser, updateUser } from "../../redux/user";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PurchaseRuleType } from "./type";
import { PurchaseRuleInitialValue, getVehiclePurchaseRule } from "./util";
import { useRouter } from "next/router";

let isSetFormValues = false;

export const useCarPurchaseRuleForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const { auth } = useAppSelector(selectAuth);
  const { user } = useAppSelector(selectUser);

  const [initialData, setInitialData] = useState(PurchaseRuleInitialValue);
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation("shoppingassistant");

  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";

  useEffect(() => {
    if (user && !isSetFormValues) {
      setInitialData({
        revenue: user?.carPurchaseRule?.revenue ?? "",
        savings: user?.carPurchaseRule?.savings ?? "",
        startCapital: user?.carPurchaseRule?.startCapital ?? "",
        purchaseDate:
          new Date(user?.carPurchaseRule?.purchaseDate as string) ?? "",
        leasePayment: user?.carPurchaseRule?.leasePayment ?? "",
        carPrice: user?.carPurchaseRule?.carPrice ?? "",
      });
    }
  }, [user]);

  const getDetails = async (values: PurchaseRuleType) => {
    if (auth.authenticated) {
      isSetFormValues = false;

      const purchaseDate = moment(values.purchaseDate);

      const userData = {
        ...user,
        carPurchaseRule: {
          revenue: values.revenue,
          savings: values.savings,
          startCapital: values.startCapital,
          purchaseDate: purchaseDate.format("YYYY-MM-DD"),
          leasePayment: values.leasePayment,
          carPrice: values.carPrice,
        },
      };

      setIsLoading(true);

      getVehiclePurchaseRule(values).then((res) => {
        dispatch(updateUser(userData));

        setIsLoading(false);
        navigate.push({
          pathname: "/car-purchase-rule-result",
          query: {
            data: JSON.stringify(res)
          }
        });
      });
    } else {
      isSetFormValues = true;

      dispatch(toggleSignupModal());
    }
  };

  return {
    getDetails,
    initialData,
    t,
    prefferedCurrency,
    isLoading,
  };
};
