import { RootState } from "@/store";
import { loginAction, signUpAction } from "@/store/actions/auth.action";
import { UserInitialState, setIsToast } from "@/store/reducers/users.reducer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const useAuth = () => {
  const { user, isLoading, isToast, error, message, isLogin } =
    useSelector<RootState, UserInitialState>((state: any) => state.users);
  const dispatch = useDispatch();

  const createUser = async (body: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    clerkUserId: string;
  }) => {
    return await dispatch<any>(signUpAction(body));
  };

  const login = async (body: { email: string; password: string }) => {
    return await dispatch<any>(loginAction(body));
  };

  useEffect(() => {
    if (isToast && message && error) {
      toast.error(message);
    } else if (isToast && !error) {
      toast.success(message);
    }
    dispatch<any>(setIsToast({ isToast: false }));
  }, [isToast, message, error]);

  return {
    user,
    isLoading,
    isToast,
    error,
    message,
    createUser,
    login,
    isLogin,
  };
};

export default useAuth;
