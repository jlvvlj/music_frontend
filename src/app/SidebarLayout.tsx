"use client"
import { useState } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./Header";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/registry/new-york/ui/resizable";

export default function SidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const allowedRoutes = [
        '/', '/login', '/signout', "/signup"
    ]
    const [isCollapsed, setIsCollapsed] = useState<number>(0);

    const handleResize = (size: number) => {
        setIsCollapsed(size)
    };

    return (
        <div className="w-full h-screen fixed">
            {!allowedRoutes.includes(pathname as string) && (
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel collapsible collapsedSize={4} defaultSize={400} maxSize={30
                    } minSize={15} onResize={handleResize} className="min-w-[75px] md:max-w-[250px] max-w-[75px]" >
                        <Sidebar isCollapsed={isCollapsed} />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={1500} className="content-overflow">
                        <div className={allowedRoutes.includes(pathname as string) ? 'w-full' : 'w-full ml-0 transition-width duration-300'}>
                            <Providers>
                                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                                    {!allowedRoutes.includes(pathname as string) && <Header />}
                                    {children}
                                </ThemeProvider>
                            </Providers>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            )}
            {allowedRoutes.includes(pathname as string) && (
                <div className="w-full">
                    <Providers>
                        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                            {children}
                        </ThemeProvider>
                    </Providers>
                </div>
            )}
        </div>
    )
}
