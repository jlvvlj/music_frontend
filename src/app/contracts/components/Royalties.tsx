import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CurrencyInput } from "@/components/ui/currency-input";
import { Switch } from "@/components/ui/switch";

const Royalties = () => {
  return (
    <>
      <Card className="mx-20">
        <CardHeader>
          <CardTitle className="text-[15px] font-normal text-[#FAFAFA] ">
            Royalties
          </CardTitle>
          <CardDescription>
            Add the royalties terms to the contract
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            <p className="text-[#FAFAFA] text-sm font-normal">
              Physical operations royalties
            </p>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2">
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Single Rate
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-end mb-4 h-full">
                <Switch />
              </div>
              <div className="col-span-2">
                <CurrencyInput title="Royalites" currency="%" />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2">
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Tiered Rates
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <Switch />
              </div>
              <div className="col-span-2">
                <span className="text-sm font-normal text-[#FFFFFF]">
                  From&nbsp;
                </span>
                <span className="text-sm font-normal text-[#94A3B8]">
                  1&nbsp;
                </span>
                <span className="text-sm font-normal text-[#FFFFFF]">
                  To&nbsp;
                </span>
                <span className="text-sm font-normal text-[#94A3B8]">
                  2000&nbsp;
                </span>
                <span className="text-sm font-normal text-[#FFFFFF]">
                  Copies&nbsp;:&nbsp;
                </span>
                <span className="text-sm font-normal text-[#94A3B8]">20%</span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2"></div>
              <div className="col-span-1"></div>
              <div className="col-span-1">
                <CurrencyInput title="From" currency="Copies" />
              </div>
              <div className="col-span-1">
                <CurrencyInput title="To" currency="Copies" />
              </div>
              <div className="col-span-1">
                <CurrencyInput title="Royalties" currency="%" />
              </div>
              <div className="col-span-1 flex justify-center items-end h-full">
                <Button>ADD</Button>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-[#FAFAFA] text-sm font-normal">
              Digital operations royalties
            </p>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2">
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Single Rate
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-end mb-4 h-full">
                <Switch />
              </div>
              <div className="col-span-2">
                <CurrencyInput title="Royalites" currency="%" />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2">
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Tiered Rates
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <Switch />
              </div>
              <div className="col-span-2">
                <span className="text-sm font-normal text-[#FFFFFF]">
                  From&nbsp;
                </span>
                <span className="text-sm font-normal text-[#94A3B8]">
                  1&nbsp;
                </span>
                <span className="text-sm font-normal text-[#FFFFFF]">
                  To&nbsp;
                </span>
                <span className="text-sm font-normal text-[#94A3B8]">
                  2000&nbsp;
                </span>
                <span className="text-sm font-normal text-[#FFFFFF]">
                  Copies&nbsp;:&nbsp;
                </span>
                <span className="text-sm font-normal text-[#94A3B8]">20%</span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2"></div>
              <div className="col-span-1"></div>
              <div className="col-span-1">
                <CurrencyInput title="From" currency="Copies" />
              </div>
              <div className="col-span-1">
                <CurrencyInput title="To" currency="Copies" />
              </div>
              <div className="col-span-1">
                <CurrencyInput title="Royalties" currency="%" />
              </div>
              <div className="col-span-1 flex justify-center items-end h-full">
                <Button>ADD</Button>
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

export default Royalties;
