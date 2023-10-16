import { TFunction } from "i18next";
import { DesktopNavLinkType, NavLinkType } from "./type";
import { getAssetUrl } from "../../util/SiteUtil";

export type NavTitle =
  | "Budget"
  | "Invest"
  | "Benchmark"
  | "My finances"
  | "Login"
  | "Sign Up"
  | "Profile"
  | "Logout"
  | "Resources"
  | "Pricing";

export const getNavTitles = (): NavTitle[] => [
  "Budget",
  "Invest",
  "Benchmark",
  "Resources",
];

export const getMobileNavTitle = (): NavTitle[] => [
  // "Budget",
  // "Invest",
  // "Benchmark",
  "Resources",
  // "Pricing",
];

export const getNavLinkObjectMobileView = (
  t: TFunction<"navbar">
): { [key: string]: NavLinkType } => ({
  ...getNavLinksObject(t),
  // Pricing: {
  //   id: "pricing",
  //   url: "/pricing",
  //   nestedLinks: [],
  // },

  ContactUs: {
    id: "contactus",
    url: "/contact",
    nestedLinks: [],
  },
  PrivacyPolicy: {
    id: "privacyPolicy",
    url: "/privacy",
    nestedLinks: [],
  },
});

export const getNavLinksObject = (
  t: TFunction<"navbar">
): { [key: string]: NavLinkType } => ({
  Budget: {
    id: "budget",
    nestedLinks: [
      {
        label: t("shoppingAssistant"),
        icon: getAssetUrl("./redesign/shoppingAssistantIconBlack.svg"),
        iconMobile: getAssetUrl("./redesign/shoppingAssistantIcon.svg"),
        url: "/shopping-assistant-overview",
        descriptionText: t("shoppingAssistantDescription"),
        isSoon: false,
      },
      {
        label: t("chromeExtension"),
        icon: getAssetUrl("./redesign/chromeExtensionIconBlack.svg"),
        iconMobile: getAssetUrl("./redesign/chromeExtensionIcon.svg"),
        url: "/extension",
        descriptionText: t("chromeExtensionDescription"),
        isSoon: false,
      },
      {
        label: t("budgetRule"),
        icon: getAssetUrl("./redesign/budgetRuleIconBlack.svg"),
        iconMobile: getAssetUrl("./redesign/budgetRuleIcon.svg"),
        url: "/budget-rule",
        descriptionText: t("budgetRuleDescription"),
        isSoon: false,
      },
      {
        label: t("carRule"),
        icon: getAssetUrl("./redesign/transportindicatorIcon_black.svg"),
        iconMobile: getAssetUrl("./redesign/transportindicatorIcon.svg"),
        url: "/car-purchase-rule",
        descriptionText: t("carRuleDescription"),
        isSoon: false,
      },
    ],
  },
  Invest: {
    id: "invest",
    nestedLinks: [
      {
        label: t("investmentView"),
        icon: getAssetUrl("redesign/investing_32_black.svg"),
        iconMobile: getAssetUrl("./redesign/investmentview.svg"),
        url: "/investment-view-overview",
        descriptionText: t("investmentViewDescription"),
        isSoon: false,
      },
      {
        label: t("retirementPlanner"),
        icon: getAssetUrl("redesign/retirement_32_black.svg"),
        iconMobile: getAssetUrl("./redesign/retirementplanner.svg"),
        url: "/retirement-planner-overview",
        descriptionText: t("retirementPlannerDescription"),
        isSoon: false,
      },
      {
        label: t("roboAdvisor"),
        icon: getAssetUrl("./redesign/robo_32_black.svg"),
        iconMobile: getAssetUrl("./redesign/roboIcon.svg"),
        url: "",
        descriptionText: t("roboAdvisorDescription"),
        isSoon: true,
      },
    ],
  },
  Benchmark: {
    id: "benchmark",
    nestedLinks: [
      {
        label: t("comparator"),
        icon: getAssetUrl("./redesign/livingcostindicator_32_black.svg"),
        iconMobile: getAssetUrl("./redesign/livingcostindicatorIcon.svg"),
        url: "/living-indicator",
        descriptionText: t("comparatorDescription"),
        isSoon: false,
      },
      {
        label: t("housingIndicator"),
        icon: getAssetUrl("./redesign/realestateindicator_32_black.svg"),
        iconMobile: getAssetUrl("./redesign/realestateindicatorIcon.svg"),
        url: "/housing-indicator",
        descriptionText: t("housingDescription"),
        isSoon: false,
      },

      {
        label: t("transport"),
        icon: getAssetUrl("./redesign/transportindicator_32_black.svg"),
        iconMobile: getAssetUrl("./redesign/transportindicatorIcon.svg"),
        url: "",
        descriptionText: t("transportDescription"),
        isSoon: true,
      },
    ],
  },
  Resources: {
    id: "resources",
    nestedLinks: [
      {
        label: t("Blog"),
        icon: getAssetUrl("./redesign/blogIcon.svg"),
        iconMobile: getAssetUrl("./redesign/blogIcon.svg"),
        url: "/blog",
        descriptionText: t("blogDescription"),
        isSoon: false,
      },
      {
        label: t("FAQ"),
        icon: getAssetUrl("./redesign/faqIcon.svg"),
        iconMobile: getAssetUrl("./redesign/faqIcon.svg"),
        url: "/faq",
        descriptionText: t("faqDescription"),
        isSoon: false,
      },
    ],
  },
});

export const simpleNavLink = (t: TFunction<"navbar">) => [
  {
    name: t("dashboard"),
    url: "/myfinance",
  },
];

export const getNavLinks = (
  t: TFunction<"navbar">,
  mobileView: boolean
): {
  navLinks: { [key: string]: NavLinkType };
  navTitles: NavTitle[];
  allNavLinks: NavLinkType[];
} => {
  const navTitles = mobileView ? getMobileNavTitle() : getNavTitles();
  const navLinks = mobileView
    ? getNavLinkObjectMobileView(t)
    : getNavLinksObject(t);
  const allNavLinks = navTitles.map((title) => navLinks[title]).flat();
  return { navLinks, navTitles, allNavLinks };
};

export const getDesktopNavlinks = (
  t: TFunction<"navbar">,
  isAuthenticated?: boolean
): DesktopNavLinkType[] => [
    // {
    //   label: "Pricing",
    //   url: "/pricing",
    // },
    // {
    //   label: "Dashboard",
    //   url: "/myfinance-overview",
    // },
    // {
    //   label: "Apps",
    //   info: {
    //     title: t("navbarTitle"),
    //     description:
    //       t("navbarDescription"),
    //     links: [
    //       {
    //         label: "Budget",
    //         nestedLinks: [
    //           {
    //             id: "budget_1",
    //             icon: getAssetUrl("./redesign/shoppingAssistantIconBlack.svg"),
    //             label: t("shoppingAssistant"),
    //             description:
    //               t("shoppingAssistantDescription"),
    //             url: "/shopping-assistant-overview",
    //           },
    //           {
    //             id: "budget_2",
    //             icon: getAssetUrl("./redesign/budgetRuleIconBlack.svg"),
    //             label: t("budgetRule"),
    //             description: t("budgetRuleDescription"),
    //             url: "/budget-rule",
    //           },
    //           {
    //             id: "budget_3",
    //             icon: getAssetUrl("./redesign/chromeExtensionIconBlack.svg"),
    //             label: t("chromeExtension"),
    //             description: t("chromeExtensionDescription"),
    //             url: "/extension",
    //           },
    //           {
    //             id: "budget_4",
    //             icon: getAssetUrl("./redesign/transportindicatorIcon_black.svg"),
    //             label: t("carRule"),
    //             description: t("carRuleDescription"),
    //             url: "/car-purchase-rule",
    //           },
    //         ],
    //       },
    //       {
    //         label: "Invest",
    //         nestedLinks: [
    //           {
    //             id: "invest_1",
    //             icon: getAssetUrl("redesign/investing_32_black.svg"),
    //             label: t("investmentView"),
    //             description: t("investmentViewDescription"),
    //             url: "/investment-view-overview",
    //           },
    //           {
    //             id: "investment_2",
    //             icon: getAssetUrl("redesign/retirement_32_black.svg"),
    //             label: t("retirementPlanner"),
    //             description: t("retirementPlannerDescription"),
    //             url: "/retirement-planner-overview",
    //           },
    //           {
    //             id: "investment_3",
    //             icon: getAssetUrl("./redesign/robo_32_black.svg"),
    //             label: t("roboAdvisor"),
    //             description: t("roboAdvisorDescription"),
    //             url: "",
    //             isSoon: true,
    //           },
    //         ],
    //       },
    //       {
    //         label: "Benchmark",
    //         nestedLinks: [
    //           {
    //             id: "benchmark_1",
    //             icon: getAssetUrl("./redesign/livingcostindicator_32_black.svg"),
    //             label: t("comparator"),
    //             description: t("comparatorDescription"),
    //             url: "/living-indicator",
    //           },
    //           {
    //             id: "benchmark_2",
    //             icon: getAssetUrl("./redesign/realestateindicator_32_black.svg"),
    //             label: t("housingIndicator"),
    //             description: t("housingDescription"),
    //             url: "/housing-indicator",
    //           },
    //           {
    //             id: "benchmark_3",
    //             icon: getAssetUrl("./redesign/transportindicator_32_black.svg"),
    //             label: t("transport"),
    //             description: t("transportDescription"),
    //             url: "",
    //             isSoon: true,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    {
      label: t("pricing"),
      url: "/pricing",
      isHidden: isAuthenticated,
    },
    {
      label: t("resources"),
      info: {
        title: t("resourcesTitle"),
        description:
          t("resourcesDesc"),
        links: [
          {
            label: t("resources")!,
            nestedLinks: [
              {
                id: "resources_1",
                icon: getAssetUrl("./redesign/blogIcon.svg"),
                label: t("Blog"),
                description: t("blogDescription"),
                url: "/blog",
              },
              {
                id: "resources_2",
                icon: getAssetUrl("./redesign/faqIcon.svg"),
                label: t("FAQ"),
                description: t("faqDescription"),
                url: "/faq",
              },
            ],
          },
        ],
      },
    },
  ];
