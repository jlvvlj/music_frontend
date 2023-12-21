import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import NewContract from "@/app/contracts/page";

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      {/* <Dialog>
        <DialogTrigger asChild>
          <button >Add a new contract</button>
        </DialogTrigger>
        <DialogContent className="max-w-[95%]">
          <DialogHeader>
            <DialogTitle>New Contract</DialogTitle>
            <DialogDescription>
              Add your contract information here. Click submit when you're done.
            </DialogDescription>
          </DialogHeader>
          <NewContract />
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
      <Link
        href="/contracts"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Create Track
      </Link>
      <Link
        href="/music/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Your Tracks
      </Link>
      <Link
        href="/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Owner Settings
      </Link>
      <Link
        href="/artist-settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Artist Settings
      </Link>
    </nav>
  );
}
