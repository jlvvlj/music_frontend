"use client";
import "../../globals.css";
import { usePathname } from "next/navigation";
import { tracks } from "@/app/data/data";

export default function ContractSettings() {
  const pathname = usePathname();
  console.log(pathname);
  return tracks.map((track, i) => {
    if (pathname === `/contracts_settings/${track.id}`) {
      return (
        <div key={i}>
          <h1>{track.title}</h1>
          <h1>{track.id}</h1>
          <h1>{track.album}</h1>
        </div>
      );
    }
  });
}
