import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"
import CountUp from 'react-countup';

const recentSales = [
  {
    avatar: "IT",
    title: "In the end",
    streams: "24353",
    revenues: "1,999.00"
  },
  {
    avatar: "YB",
    title: "You belong with me",
    streams: "67533",
    revenues: "379.00"
  },
  {
    avatar: "LS",
    title: "Love story",
    streams: "45433",
    revenues: "299.00"
  },
  {
    avatar: "SI",
    title: "Shake it off",
    streams: "56783",
    revenues: "9879"
  },
  {
    avatar: "BB",
    title: "Bad blood",
    streams: "12383",
    revenues: "674"
  },
  {
    avatar: "WD",
    title: "Wildest dreams",
    streams: "74523",
    revenues: "129"
  },
  {
    avatar: "DE",
    title: "Delicate",
    streams: "90876",
    revenues: "892"
  },
  {
    avatar: "BT",
    title: "Back to december",
    streams: "61234",
    revenues: "83"
  },
  {
    avatar: "FI",
    title: "Fifteen",
    streams: "29413",
    revenues: "672"
  },
  {
    avatar: "TS",
    title: "The story of us",
    streams: "34876",
    revenues: "874"
  },
  {
    avatar: "NR",
    title: "New romantics",
    streams: "90245",
    revenues: "543"
  },
]

export default function RecentSales() {
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
      {recentSales.map((sales, index) =>
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback className="bg-[#4FABFF] text-white">{sales.avatar}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sales.title}</p>
            <p className="text-sm text-muted-foreground">View Contract</p>
          </div>
          <div className="ml-auto flex gap-10">
            <CountUp start={0} end={parseFloat(sales.streams.toString().replace(/[^\d.]/g, ''))} duration={5} className='w-[100px] text-end' />
            <CountUp start={0} end={parseFloat(sales.revenues.toString().replace(/[^\d.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          </div>
        </div>
      )}
    </div>
  )
}