import React from "react";

import Seo from "../../component/Seo";
import Blog from "../../component/blog/BlogListing";
import { getBlogList } from "../../component/blog/util";

const BlogPage = ({ blogs }) => {
  return (
    <>
      <Seo
        title="Finance & Budgeting Articles - Affordify"
        description="Blog articles about budgeting and financial topics. Accessible, easy to read and actionable information about key budgeting and investment topic for everyone."
        meta={[
          {
            name: "keywords",
            content:
              "finance blogs, budgeting blogs, financial literracy, finance knowledge, budgeting101, budgeting for everyone, budgeting made easy, investing 101, investing for everyone, investing made easy,frugal living, investing for beginners, retirement planning, saving money tips, financial independence, stock market analysis, wealth management, personal finance advice, budgeting strategies.",
          },
        ]}
      />
      <Blog blogs={blogs} />
    </>
  );
};

export default BlogPage;

export async function getServerSideProps() {
  const blogs = await getBlogList();

  return {
    props: {
      blogs,
    },
  };
}
