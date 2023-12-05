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

const Budget = () => {
  return (
    <>
      <Card className="mx-20">
        <CardHeader>
          <CardTitle className="text-[15px] font-normal text-[#FAFAFA]">
            Budget
          </CardTitle>
          <CardDescription>
            Add the budget terms to the contract
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4">
              <p className="text-[#FAFAFA] text-sm font-normal">
                Registration budget
              </p>
              <p className="text-[#A1A1AA] text-sm font-normal">
                Select if a production budget has been contracted
              </p>
            </div>
            <div className="col-span-1 flex justify-center items-end mb-4 h-full">
              <Switch />
            </div>
            <div className="col-span-1">
              <CurrencyInput title="Maximum" />
            </div>
            <div className="col-span-1">
              <CurrencyInput title="Minimum" />
            </div>
            <div className="col-span-2">
              <CurrencyInput title="Royalites to be paid" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4">
              <p className="text-[#FAFAFA] text-sm font-normal">
                Multimedia Recordings
              </p>
              <p className="text-[#A1A1AA] text-sm font-normal">
                Select if a salary for video recording is specifically provided
                for in the collective agreement
              </p>
            </div>
            <div className="col-span-1 flex justify-center items-end mb-4 h-full">
              <Switch />
            </div>
            <div className="col-span-1">
              <CurrencyInput title="Salary" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4">
              <p className="text-[#FAFAFA] text-sm font-normal">Promotion</p>
              <p className="text-[#A1A1AA] text-sm font-normal">
                Select if a budget for image / promotion / marketing will be
                commited
              </p>
            </div>
            <div className="col-span-1 flex justify-center items-end mb-4 h-full">
              <Switch />
            </div>
            <div className="col-span-1">
              <CurrencyInput title="Budget" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4">
              <p className="text-[#FAFAFA] text-sm font-normal">Advances</p>
              <p className="text-[#A1A1AA] text-sm font-normal">
                Select if advances on royalties will be received by the artist
              </p>
            </div>
            <div className="col-span-1 flex justify-center items-end mb-4 h-full">
              <Switch />
            </div>
            <div className="col-span-1">
              <CurrencyInput title="Budget" />
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

export default Budget;
