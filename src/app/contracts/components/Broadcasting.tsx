import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CurrencyInput } from "@/components/ui/currency-input";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const Broadcasting = () => {
  return (
    <>
      <Card className="mx-20">
        <CardHeader>
          <CardTitle className="text-[15px] font-normal text-[#FAFAFA] "></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <p className="text-[#FAFAFA] text-sm font-normal">
                  Foreign sales
                </p>
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Paid concession of television broadcasting rights as a
                  percentage of net pre-tax operating revenues received by the
                  producer
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-center h-full">
                <Switch />
              </div>
              <div className="col-span-2">
                <Input placeholder="% of net pre-tax" />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <p className="text-[#FAFAFA] text-sm font-normal">
                  Secondary uses
                </p>
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Percentage of amounts received by the producer excluding taxes
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-center mb-4 h-full">
                <Switch />
              </div>
              <div className="col-span-2">
                <Input placeholder="%" />
              </div>
            </div>
          </div>
          <div className="w-full !mt-24 flex justify-center">
            <Button variant="outline" className="w-[400px]">
              Save
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Broadcasting;
