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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurrencyInput } from "@/components/ui/currency-input";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { CardsActivityGoal } from "@/components/ui/activity-goal";
import { cn } from "@/lib/utils";
import { MultiSelect } from "@/components/ui/multi-select";
import { COUNTRIES } from "./types";

const TABS = [
  {
    label: "Foreign sales",
    value: "foreignSales",
  },
  {
    label: "Compilation",
    value: "compilation",
  },
  {
    label: "Promotion",
    value: "promotion",
  },
  {
    label: "Advances",
    value: "advances",
  },
];
const Abatements = () => {
  return (
    <>
      <Card className="border-none">
        <CardContent className="space-y-6">
          <Tabs defaultValue="foreignSales" className="w-full px-10">
            <TabsList className="grid w-full grid-cols-4">
              {TABS.map((t, index) => (
                <TabsTrigger key={index} value={t.value}>
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {TABS.map((t, index) => (
              <TabsContent key={index} value={t.value} className="mt-10">
                <div>
                  <p className="text-[#FAFAFA] text-base font-normal">
                    Share of base rate
                  </p>
                  <p className="text-[#A1A1AA] text-sm font-normal">
                    Lorem ipsum
                  </p>
                </div>
                <div className="flex gap-6 items-center space-y-4 mt-6">
                  <div
                    className={cn(
                      "flex items-center pl-4 rounded-md bg-[#5D9DF1] col-span-12 xl:col-span-10 2xl:col-span-6"
                    )}
                  >
                    <div>
                      <p
                        className={cn(
                          "text-sm font-medium leading-none text-[#FAFAFA]"
                        )}
                      >
                        Share of base
                      </p>
                      <p className="text-sm text-[#B9B9BA]">Lorem ipsum</p>
                    </div>
                    <CardsActivityGoal
                      label="SHARES OF REVENUES"
                      initialValue={0}
                      unit="%"
                      step={10}
                      buttonTitle="Set Share"
                      minValue={0}
                      maxValue={100}
                      buttonHidden
                      onClickButton={() => {}}
                      isOwner={true}
                    />
                  </div>
                  <div className={cn(index === 0 ? "" : "hidden")}>
                    <MultiSelect
                      title="Program Type"
                      dataArr={COUNTRIES}
                      handleCheckChanged={(selected, obj) => {}}
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
          {/* <div className="space-y-6">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-3">
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
              <div className="col-span-2">
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
              <div className="col-span-3">
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
              <div className="col-span-3">
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
              <div className="col-span-3">
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
          </div> */}
        </CardContent>
      </Card>
    </>
  );
};

export default Abatements;
