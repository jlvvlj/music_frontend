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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/ui/activity-goal";

const TABS = [
  {
    label: "Foreign sales",
    value: "foreignSales",
    description:
      "Paid concession of television broadcasting rights as a percentage of net pre-tax operating revenues received by the producer",
    cardTitle: "Concession",
  },
  {
    label: "Secondary uses",
    value: "secondaryUses",
    description: "Share of amounts received by the producer excluding taxes",
    cardTitle: "Share",
  },
];
const Broadcasting = () => {
  return (
    <>
      <Card className="border-none">
        <CardContent className="space-y-6">
          <Tabs defaultValue="foreignSales" className="w-full px-10">
            <TabsList className="grid w-full grid-cols-2">
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
                    {t.label}
                  </p>
                  <p className="text-[#A1A1AA] text-sm font-normal">
                    {t.description}
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
                        {t.cardTitle}
                      </p>
                      <p className="text-sm text-[#B9B9BA]">Lorem ipsum</p>
                    </div>
                    <CardsActivityGoal
                      label="SHARES OF REVENUES"
                      initialValue={30}
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
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default Broadcasting;
