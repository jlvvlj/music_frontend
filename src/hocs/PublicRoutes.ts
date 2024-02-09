"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const PublicRoutes = ({ children }: any) => {
  const router = useRouter();
  let isAuthenticated = localStorage.getItem("tokens");
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  return children;
};
