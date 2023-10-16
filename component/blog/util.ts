import axios from "axios";
import {
  getBlogDetailApiUrl,
  getBlogsApiUrl,
} from "../../constant/apiConstant";
import { BlogDataType } from "./type";
import { object, string } from "yup";

export const getTotalPages = (totalItems: number, itemsPerPage: number) => {
  const fullPages = Math.floor(totalItems / itemsPerPage);
  const remainingItems = totalItems % itemsPerPage;
  const totalPages = remainingItems > 0 ? fullPages + 1 : fullPages;
  return totalPages;
};

export const filterBlog = (
  blog: BlogDataType[],
  itemPerPage: number,
  pageNumber: number
) => {
  const startIndex = (pageNumber - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  return blog.slice(startIndex, endIndex);
};

const transformData = (data: any): BlogDataType[] => {
  if (!data) {
    return [];
  }

  return data.map((item: any) => ({
    id: item.blogId,
    img: item.imageUrl,
    date: item.postedOn,
    title: item.title,
    description: item.description,
    postedBy: item.postedBy,
    blogData: item.blogData[0],
    coverImageUrl: item.coverImageUrl,
    subHeader: item["sub-header"],
    ytVideo: item["yt-video"],
  }));
};

export const getBlogList = () =>
  axios
    .get(getBlogsApiUrl)
    // .then((res) => Promise.resolve(transformData(res.data)))
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const getBlogDetail = (id: string) =>
  axios
    .get(`${getBlogDetailApiUrl}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const signUpValidationSchema = object().shape({
  email: string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
});
