import { useRouter } from "next/router";
import { LoginRegisterType } from "./type";
import { toast } from "react-hot-toast";

import { selectAuth } from "../../redux/auth";
import { updateUser } from "../../redux/user";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

export const useLoginRegister = () => {
  const router = useRouter();

  const { user } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const handleRegisterUser = async (values: any) => {
    const userData = {
      ...user,
      profileData: {
        ...user?.profileData,
        ...values,
      },
    };

    try {
      toast.success("loading...");

      await dispatch(updateUser(userData));

      router.push("/");

      toast.success("Profile updated successfully");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return {
    handleRegisterUser,
  };
};
