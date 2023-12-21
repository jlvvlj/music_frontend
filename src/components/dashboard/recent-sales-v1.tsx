import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"

export default function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback>IT</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none"> In the end</p>
          <p className="text-sm text-muted-foreground">
          <p className="text-sm text-muted-foreground">View Contract</p>
          </p>
        </div>
        <div className="ml-auto font-medium">€1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback>YB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">You belong with me</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto font-medium">€379.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>LS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Love story</p>
          <p className="text-sm text-muted-foreground">
          View Contract
          </p>
        </div>
        <div className="ml-auto font-medium">€299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>SI</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Shake it off</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto font-medium">€9879.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>BB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Bad blood</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto font-medium">€674.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/06.png" alt="Avatar" />
          <AvatarFallback>WD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Wildest dreams</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto font-medium">€129.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/07.png" alt="Avatar" />
          <AvatarFallback>DE</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Delicate</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto font-medium">€892.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/06.png" alt="Avatar" />
          <AvatarFallback>BT</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Back to december</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto font-medium">€83.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/07.png" alt="Avatar" />
          <AvatarFallback>FI</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Fifteen</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto font-medium">€672.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/06.png" alt="Avatar" />
          <AvatarFallback>TS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">The story of us</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto font-medium">€874.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/07.png" alt="Avatar" />
          <AvatarFallback>NR</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">New romantics</p>
          <p className="text-sm text-muted-foreground">View Contract</p>
        </div>
        <div className="ml-auto font-medium">€543.00</div>
      </div>



    </div>
  )
}
