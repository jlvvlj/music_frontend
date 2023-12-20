import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"
import CountUp from 'react-countup';

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
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback className="bg-[#4FABFF]">IT</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none"> In the end</p>
          <p className="text-sm text-muted-foreground">
            <p className="text-sm text-muted-foreground">View Contract</p>
          </p>
        </div>
        <div className="ml-auto flex gap-10">
          <CountUp start={0} end={parseFloat("€1,999.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          <CountUp start={0} end={parseFloat("€1,999.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback className="bg-[#4FABFF]">YB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">You belong with me</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto flex gap-10">
          <CountUp start={0} end={parseFloat("€379.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          <CountUp start={0} end={parseFloat("€379.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback className="bg-[#4FABFF]">LS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Love story</p>
          <p className="text-sm text-muted-foreground">
            View Contract
          </p>
        </div>
        <div className="ml-auto flex gap-10">
          <CountUp start={0} end={parseFloat("€299.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          <CountUp start={0} end={parseFloat("€299.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback className="bg-[#4FABFF]">SI</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Shake it off</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto flex gap-10">
          <CountUp start={0} end={parseFloat("€9879.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          <CountUp start={0} end={parseFloat("€9879.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback className="bg-[#4FABFF]">BB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Bad blood</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto flex gap-10">
          <CountUp start={0} end={parseFloat("€674.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          <CountUp start={0} end={parseFloat("€674.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/06.png" alt="Avatar" />
          <AvatarFallback className="bg-[#4FABFF]">WD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Wildest dreams</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto flex gap-10">
          <CountUp start={0} end={parseFloat("€129.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          <CountUp start={0} end={parseFloat("€129.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/07.png" alt="Avatar" />
          <AvatarFallback className="bg-[#4FABFF]">DE</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Delicate</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto flex gap-10">
          <CountUp start={0} end={parseFloat("€892.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          <CountUp start={0} end={parseFloat("€892.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/06.png" alt="Avatar" />
          <AvatarFallback className="bg-[#4FABFF]">BT</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Back to december</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto flex gap-10">
          <CountUp start={0} end={parseFloat("€83.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          <CountUp start={0} end={parseFloat("€83.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/07.png" alt="Avatar" />
          <AvatarFallback className="bg-[#4FABFF]">FI</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Fifteen</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto flex gap-10">
          <CountUp start={0} end={parseFloat("€672.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          <CountUp start={0} end={parseFloat("€672.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/06.png" alt="Avatar" />
          <AvatarFallback className="bg-[#4FABFF]">TS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">The story of us</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto flex gap-10">
          <CountUp start={0} end={parseFloat("€874.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          <CountUp start={0} end={parseFloat("€874.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/07.png" alt="Avatar" />
          <AvatarFallback className="bg-[#4FABFF]">NR</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">New romantics</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto flex gap-10">
          <CountUp start={0} end={parseFloat("€543.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
          <CountUp start={0} end={parseFloat("€543.00".replace(/[^0-9.]/g, ''))} duration={5} className='w-[100px] text-end' formattingFn={(value) => `€${value.toFixed(2)}`} />
        </div>
      </div>



    </div>
  )
}
