"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }: any) => {
  const router = useRouter();
  let isAuthenticated = localStorage.getItem("tokens");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated]);

  return children;
};
