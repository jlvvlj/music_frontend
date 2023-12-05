// ** Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const Shares = () => {
  return (
    <>
      <Card className="h-[400px] w-full sm:w-[700px] mx-auto border-none">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>
          </CardDescription>
          <div className="w-full sm:w-[600px]">
            <div className="space-y-4">
              <div className="grid gap-6">
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        Olivia Martin
                      </p>
                      <p className="text-sm text-muted-foreground">
                        m@example.com
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>Owner</span>
                  </div>
                  <div className="mt-4 flex flex-col items-center">
                    <Input placeholder="%" className="w-[100px] mb-2" />
                    <Slider />
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
                      <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        Isabella Nguyen
                      </p>
                      <p className="text-sm text-muted-foreground">
                        b@example.com
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>Singer</span>
                  </div>
                  <div className="mt-4 flex flex-col items-center">
                    <Input placeholder="%" className="w-[100px] mb-2" />
                    <Slider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2"></CardContent>
      </Card>
    </>
  );
};

export default Shares;
