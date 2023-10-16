import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { toast } from "react-hot-toast";
import { getBlogList } from "./util";
import { BlogDataType } from "./type";
import { useRouter } from "next/router";

export const useBlog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));
  const [selectedPage, setSelectedPage] = useState(1);
  const navigate = useRouter();
  const [blogList, setBlogList] = useState<BlogDataType[]>([]);

  useEffect(() => {
    fetchBlogList();
  }, []);

  const fetchBlogList = () => {
    getBlogList()
      .then((res) => {
        setBlogList(res);
      })
      .catch((err) => {
        toast.error(err.message || "Something went wrong");
      });
  };

  return {
    isMobile,
    navigate,
    selectedPage,
    setSelectedPage,
    blogList,
  };
};

export const useBlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogDetail, setBlogDetail] = useState<BlogDataType | undefined>();
  const [blogList, setBlogList] = useState<BlogDataType[]>([]);

  useEffect(() => {
    id &&
      getBlogList()
        .then((res) => {
          setBlogList(res);
          setBlogDetail(
            res.find((item) => item.id.toString() === id.toString())
          );
        })
        .catch((err) => {
          toast.error(err.message || "Something went wrong");
        });
  }, [id]);

  return {
    blogDetail,
    blogList,
    router,
  };
};
