import { baseUrl } from "./baseUrl";
import { BACKEND_BASE_URL } from "../config/backend";

export const getDetaileGraphApiUrl = `${baseUrl}detailed_graphs`;
export const getInvestmentCalculatorApiUrl = `${baseUrl}retirementcalculator`;
export const getInvestmentReturnApiUrl = `${baseUrl}investmentcalculator`;
export const getComparisonInfoApiUrl = `${baseUrl}LivingCostsIndicator_EU`;
export const getRealstateInfoApiUrl = `${baseUrl}RealEstateIndicator`;
export const getBlogsApiUrl = `${baseUrl}getBlogs`;
export const getBlogDetailApiUrl = `${baseUrl}getBlogsDetails`;
export const getBudgetRuleApiUrl = `${baseUrl}budgetRule`;
export const getVehiclePurchaseApiUrl = `${baseUrl}carRule`;
export const subscription = `${baseUrl}mailchimp-subscribe`;
export const saveLogin = `${baseUrl}dummy`;
export const getInvestmentDetailedApiUrl = `${baseUrl}investmentdetailed`;
export const getFinanceFilters = `${BACKEND_BASE_URL}/api/v1/accounts`;
export const getFinanceDetails = `${BACKEND_BASE_URL}/api/v1/statistics`;
export const getTransactionList = `${BACKEND_BASE_URL}/api/v1/transactions`;
export const getWebviewURL = `${BACKEND_BASE_URL}/get_webview_url`;
