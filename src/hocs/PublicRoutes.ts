import { useRouter } from "next/navigation";

export const PublicRoutes = ({ children }: any) => {
  const router = useRouter();
  const isLogin = localStorage.getItem("tokens");
  if (isLogin) {
    return router.push("/");
  }
  return children;
};
