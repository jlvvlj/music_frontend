import React, {
  useState,
  FormEvent,
  FormEventHandler,
  ChangeEvent,
} from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurrencyInput } from "@/components/ui/currency-input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { DemoPaymentMethod } from "@/app/examples/cards/components/payment-method";
import { CardsActivityGoal } from "@/components/ui/activity-goal";
// import DemoPaymentMethod from "@/components/cards/payment-method";

interface SingleRate {
  enabled: boolean;
  percentage: string;
  type: "physical" | "digital";
}

interface TieredRate extends SingleRate {
  from: string;
  to: string;
}

type InputType = Omit<TieredRate, "enabled" | "type">;

const Royalties = () => {
  const [singleRate, setSingleRate] =
    useState<SingleRate | null>(null);

  const [tieredRates, setTieredRates] = useState<TieredRate[]>([]);
  const [physicalRateInputs, setPhysicalRateInputs] =
    useState<InputType | null>(null);
  const [digitalRateInputs, setDigitalRateInputs] = useState<InputType | null>(
    null
  );

  // **

  const handleChangePhysicalSingleRatePercentage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;

  };

  const handleChangePhysicalFormInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setPhysicalRateInputs((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeDigitalFormInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setDigitalRateInputs((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitPhysicalForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _tieredRates = [...tieredRates];
    _tieredRates.push({
      ...physicalRateInputs!,
      type: "physical",
      enabled: false,
    });
    setTieredRates(_tieredRates);
    setPhysicalRateInputs(null);
  };
  const onSubmitDigitalForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _tieredRates = [...tieredRates];
    _tieredRates.push({
      ...digitalRateInputs!,
      type: "digital",
      enabled: false,
    });
    setTieredRates(_tieredRates);
    setDigitalRateInputs(null);
  };

  const handleChangeSwitch = (enabled: boolean) => {
    // const _tieredRates = [...tieredRates];
    // const _rate = {
    //   ...rate,
    //   enabled,
    // };
    // _tieredRates.splice(index, 1, _rate);
    // setTieredRates(_tieredRates);
  };

  return (
    <>
      <Card className="border-none">
        <CardContent className="space-y-6">
          <Tabs defaultValue="single" className="w-full px-10">
            <TabsList className="grid w-full grid-cols-2 mb-10">
              <TabsTrigger value="single">Single Rate</TabsTrigger>
              <TabsTrigger value="tiered">Tiered Rate</TabsTrigger>
            </TabsList>
            <TabsContent value="single">
              <div className="grid grid-cols-12 gap-6 mt-10">
                <div
                  className={cn(
                    "flex items-center pl-4 rounded-md bg-[#131313] col-span-12 xl:col-span-10 2xl:col-span-6 w-full"
                  )}
                >
                  <div>
                    <p
                      className={cn(
                        "text-sm font-medium leading-none text-[#FAFAFA]"
                      )}
                    >
                      Royalties
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
            <TabsContent value="tiered" className="w-fit">
              <div className="col-span-9 space-y-4 mb-5">
                {tieredRates &&
                  !!tieredRates.length &&
                  tieredRates.map((rate, index) => (
                    <div
                      key={index}
                      className="flex rounded-md bg-[#131313] w-full"
                    >
                      <CardsActivityGoal
                        cardTitle="From"
                        label="copies"
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
                      <CardsActivityGoal
                        cardTitle="To"
                        label="copies"
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
                      <CardsActivityGoal
                        cardTitle="&nbsp;"
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
                  ))}
              </div>
              <form onSubmit={onSubmitPhysicalForm}>
                <div className="flex justify-around rounded-md bg-[#131313]">
                  <CardsActivityGoal
                    label="COPIES"
                    initialValue={0}
                    unit=""
                    step={1}
                    buttonTitle="Set Share"
                    minValue={0}
                    maxValue={5000}
                    buttonHidden
                    onClickButton={() => {}}
                    cardTitle="From"
                    isOwner={true}
                  />
                  <CardsActivityGoal
                    label="COPIES"
                    initialValue={0}
                    unit=""
                    step={1}
                    buttonTitle="Set Share"
                    minValue={0}
                    maxValue={5000}
                    buttonHidden
                    onClickButton={() => {}}
                    cardTitle="To"
                    isOwner={true}
                  />
                  <CardsActivityGoal
                    label="SHARES OF REVENUES"
                    initialValue={0}
                    unit="%"
                    step={10}
                    buttonTitle="Set Share"
                    minValue={0}
                    maxValue={100}
                    buttonHidden
                    cardTitle="&nbsp;"
                    onClickButton={() => {}}
                    isOwner={true}
                  />
                </div>
                <div className="flex justify-end items-center h-full !mt-7">
                  <button type="submit" className="text-[#2997FF]">
                    + Add a tier
                  </button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
          {/* <Button className="w-full !mt-20">Next</Button> */}
        </CardContent>
      </Card>
    </>
  );
};

export default Royalties;
