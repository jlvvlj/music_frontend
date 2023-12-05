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

const Abatements = () => {
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
              <div className="col-span-2">
                <p className="text-[#FAFAFA] text-sm font-normal">
                  Foreign sales
                </p>
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Lorem Ipsum
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-end mb-4 h-full">
                <Switch />
              </div>
              <div className="col-span-2">
                <Input placeholder="% of base rate" />
              </div>
              <div className="col-span-1">
                <Select defaultValue="spain">
                  <SelectTrigger className="ml-auto w-[180px]">
                    <SelectValue placeholder="Countries" />
                  </SelectTrigger>
                  <SelectContent className="ml-auto w-[250px]">
                    <SelectItem value="spain">Spain</SelectItem>
                    <SelectItem value="italy">Italy</SelectItem>
                    <SelectItem value="unitedkingdom">
                      United Kingdom
                    </SelectItem>
                    <SelectItem value="japan">Japan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2">
                <p className="text-[#FAFAFA] text-sm font-normal">
                  Compilations
                </p>
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Lorem Ipsum
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-end mb-4 h-full">
                <Switch />
              </div>
              <div className="col-span-2">
                <Input placeholder="% of base rate" />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2">
                <p className="text-[#FAFAFA] text-sm font-normal">Promotion</p>
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Lorem Ipsum
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-end mb-4 h-full">
                <Switch />
              </div>
              <div className="col-span-2">
                <Input placeholder="% of base rate" />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2">
                <p className="text-[#FAFAFA] text-sm font-normal">Advances</p>
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Lorem Ipsum
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-end mb-4 h-full">
                <Switch />
              </div>
              <div className="col-span-2">
                <Input placeholder="% of base rate" />
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

export default Abatements;
