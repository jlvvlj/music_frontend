"use client"
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "./providers";
import { Roboto_Mono, Inter, Noto_Sans_Display } from "next/font/google";
import Sidebar from "./Sidebar";
import SidebarLayout from "./SidebarLayout";
import { Toaster } from "sonner";
import { PublicRoutes } from "@/hocs/PublicRoutes";

const roboto = Roboto_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicRoutes>
      <ClerkProvider>
        <html lang="en">
          <body className={`${roboto.className} flex`}>
            <SidebarLayout children={children} />
          </body>
          <Toaster />
        </html>
      </ClerkProvider>
    </PublicRoutes>
  );
}
