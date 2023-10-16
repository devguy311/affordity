import React from "react";

// components
import Seo from "../../../component/Seo";
import BlogDetail from "../../../component/blog/BlogDetail";
import { getBlogDetail } from "../../../component/blog/util";

const BlogDetailPage = ({ blog }) => {
  if (!blog) {
    return (
      <>
        <Seo title="Affordify" />

        <div>No Blog Found</div>
      </>
    );
  }

  return (
    <>
      <Seo
        title={`${blog.title} - Affordify`}
        description={blog.description}
        image={blog.imageUrl}
      />

      <BlogDetail blogDetail={blog} />
    </>
  );
};

export default BlogDetailPage;

export async function getServerSideProps({ params }) {
  const id = params.id;

  const data = await getBlogDetail(id);
  const blogData = data?.[0];

  if (blogData) {
    return {
      props: {
        blog: blogData,
      },
    };
  }

  return {
    props: {
      blog: null,
    },
  };
}
