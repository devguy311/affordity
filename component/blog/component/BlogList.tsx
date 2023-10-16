import React, { FC } from "react";
import Grid from "@mui/material/Grid";

import BlogCard from "./BlogCard";
import { useRouter } from "next/router";

type BlogListProps = {
  list: any[];
};
const BlogList: FC<any> = ({ list }) => {
  const navigate = useRouter();

  const locale = navigate?.locale ?? "en";

  return (
    <Grid mt={"50px"} container spacing={"40px"} justifyContent={"center"}>
      {list.map((item) => (
        <Grid key={item[locale].blogId} item width={["100%", "496px"]}>
          <BlogCard
            handleReadMoreClick={() =>
              navigate.push(`/blog/${item[locale].blogId}`)
            }
            blogInfo={item[locale]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogList;
