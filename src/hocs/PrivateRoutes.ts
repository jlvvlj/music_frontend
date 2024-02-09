import { useRouter } from "next/navigation";

export const ProtectedRoute = ({ children }: any) => {
  const router = useRouter();
  const isLogin = localStorage.getItem("tokens");
  if (!isLogin) {
    return router.push("/login");
  }
  return children;
};
