import Image from "next/image";
import Link from "next/link";

import "@/app/globals.css";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Icons } from "@/components/icons";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="/images/auth-layout.webp"
          alt="A skateboarder doing a high drop"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
        <Link
          href="/"
          className="absolute left-8 top-6 z-20 flex items-center text-lg font-bold tracking-tight"
        >
          <svg
            width="50px"
            height="40px"
            id="Calque_1"
            data-name="Calque 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 145.04 116.32"
          >
            <defs>
              <style>{`.cls-1{fill:#fff;}`}</style>
            </defs>
            <path
              className="cls-1"
              d="M79,58.91a7.18,7.18,0,1,1,14.35,0V66a8.59,8.59,0,0,0,8.62,8.62h4.31A8.57,8.57,0,0,0,114.84,66V60.35a8.59,8.59,0,0,0-8.61-8.62h-4.31a8.59,8.59,0,0,1-8.62-8.61V38.81a8.57,8.57,0,0,0-8.61-8.61H80.38a8.57,8.57,0,0,0-8.61,8.61v5.75a7.18,7.18,0,1,1-14.36,0V38.81a8.57,8.57,0,0,0-8.62-8.61H30.13a8.57,8.57,0,0,0-8.62,8.61V86.19a8.57,8.57,0,0,0,8.62,8.62h4.3a8.57,8.57,0,0,0,8.62-8.62V58.91a7.18,7.18,0,0,1,12.26-5.08,6.91,6.91,0,0,1,2.1,5.08V86.19A8.57,8.57,0,0,0,66,94.81h4.31A8.59,8.59,0,0,0,79,86.19Z"
            />
            <path
              className="cls-1"
              d="M110.6,43.05A8.57,8.57,0,0,1,102,34.44V30.13a8.57,8.57,0,0,1,8.61-8.62h4.31a8.59,8.59,0,0,1,8.62,8.62v4.31a8.59,8.59,0,0,1-8.62,8.61Z"
            />
          </svg>
          <span>Miuu</span>
        </Link>
      </AspectRatio>
      <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        {children}
      </main>
    </div>
  );
}
