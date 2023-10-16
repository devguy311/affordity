import React from "react";
import Head from "next/head";

interface IProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  meta?: any;
}

export default function Seo({ title, description, url, image, meta }: IProps) {
  const descriptionValue =
    description ??
    "A new way to look at your finances and budget! As a user-friendly money management app, here you will find financial planning and budgeting tools.";

  const urlValue = url ?? "https://affordify.io/";
  const imageValue =
    image ??
    ""; // update the placeholder image to orignal image

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={descriptionValue} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlValue} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={descriptionValue} />
      <meta property="og:image" content={imageValue} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlValue} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={descriptionValue} />
      <meta property="twitter:image" content={imageValue} />

      {meta && meta?.map((item: any) => <meta key={item.name} {...item} />)}
    </Head>
  );
}
