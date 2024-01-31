import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import CountUp from "react-countup";

export default function RecentSales({ userTracks }: any) {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9" />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-bold leading-none"> Title</p>
        </div>
        <div className="ml-auto flex gap-10">
          <div className="font-bold w-[100px] text-end">Streams</div>
          <div className="font-bold w-[100px] text-end">Revenues</div>
        </div>
      </div>
      {userTracks?.map(
        (
          sales: {
            avatar: string;
            title: string;
            streams: string;
            revenues: string;
          },
          index: number
        ) => (
          <div key={index} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="" alt="@shadcn" />
              <AvatarFallback className="bg-[#4FABFF] text-white">
                {sales.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{sales.title}</p>
              <p className="text-sm text-muted-foreground">View Contract</p>
            </div>
            <div className="ml-auto flex gap-10">
              <CountUp
                start={0}
                end={parseFloat(
                  sales.streams.toString().replace(/[^\d.]/g, "")
                )}
                duration={5}
                className="w-[100px] text-end"
              />
              <CountUp
                start={0}
                end={parseFloat(
                  sales.revenues.toString().replace(/[^\d.]/g, "")
                )}
                duration={5}
                className="w-[100px] text-end"
                formattingFn={(value) => `€${value.toFixed(2)}`}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}
