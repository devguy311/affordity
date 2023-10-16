import { TFunction } from "i18next";

export const resourcesLink = (t: TFunction<"navbar", undefined, "navbar">) => [{
    id: 1,
    label: t("FAQ"),
    url: "/faq",
},
{
    id: 2,
    label: t("Blog"),
    url: "/blog",
},
{
    id: 3,
    label: t("privacy"),
    url: "/privacy",
},
{
    id: 4,
    label: t("terms"),
    url: "/terms",
},
{
    id: 5,
    label: t("contact"),
    url: "/contact",
}
];
