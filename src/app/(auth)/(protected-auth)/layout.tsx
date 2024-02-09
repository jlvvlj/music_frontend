import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

export default async function ProtectedAuthLayout({
  children,
}: React.PropsWithChildren) {
  const tokens = typeof localStorage !== 'undefined' ? localStorage.getItem("tokens") : false

  if (tokens) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
