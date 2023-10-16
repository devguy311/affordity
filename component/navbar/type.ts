export type NestedNavLinkType = {
  label: string;
  url: string;
  icon: string;
  iconMobile?: string;
  descriptionText: string;
  isSoon?: boolean;
};

export type NavLinkType = {
  id: string;
  url?: string;
  nestedLinks: NestedNavLinkType[];
};

export type LinkType = {
  label: string;
  url: string;
  icon: string;
  descriptionText: string;
  isSoon?: boolean;
};

export type DesktopNavLinkType = {
  label: string;
  url?: string;
  info?: NavInfoType;
  isHidden?: boolean;
};

export type NavInfoType = {
  title: string;
  description: string;
  links: NavLinkInfoType[];
};

export type NavLinkInfoType = {
  label?: string;
  nestedLinks: NestedLinkType[];
};

export type NestedLinkType = {
  id: string;
  icon: string;
  label: string;
  description: string;
  url: string;
  isSoon?: boolean;
};
