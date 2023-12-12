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
  const [singleRates, setSingleRates] = useState<SingleRate[]>([]);
  const [physicalSingleRate, setPhysicalSingleRate] =
    useState<SingleRate | null>(null);
  const [physicalTieredRate, setPhysicalTieredRate] =
    useState<TieredRate | null>(null);
  const [digitalSingleRate, setDigitalSingleRate] = useState<SingleRate | null>(
    null
  );
  const [digitalTieredRate, setDigitalTieredRate] = useState<TieredRate | null>(
    null
  );
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
    setPhysicalSingleRate((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeDigitalSingleRatePercentage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setDigitalSingleRate((prev: any) => ({
      ...prev,
      [name]: value,
    }));
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

  const handleChangePhysicalSingleRateEnabled = (enabled: boolean) => {
    setPhysicalSingleRate((prev: any) => ({
      ...prev,
      enabled,
      percentage: enabled ? prev?.percentage || "" : "",
    }));
  };
  const handleChangeDigitalSingleRateEnabled = (enabled: boolean) => {
    setDigitalSingleRate((prev: any) => ({
      ...prev,
      enabled,
      percentage: enabled ? prev?.percentage || "" : "",
    }));
  };

  return (
    <>
      <Card className="border-none">
        <CardContent className="space-y-6">
          <Tabs defaultValue="single" className="w-full px-10">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="single">Single Rate</TabsTrigger>
              <TabsTrigger value="tiered">Tiered Rate</TabsTrigger>
            </TabsList>
            <TabsContent value="single">
              <div className="col-span-2 mt-10">
                <CurrencyInput
                  title="Royalites"
                  name="percentage"
                  currency="%"
                  className="text-white"
                  value={physicalSingleRate?.percentage || ""}
                  onChange={handleChangePhysicalSingleRatePercentage}
                />
              </div>
            </TabsContent>
            <TabsContent value="tiered">
              <div className="col-span-9 space-y-4">
                {tieredRates &&
                  !!tieredRates.length &&
                  tieredRates.map((rate, index) => {
                    if (rate.type === "physical") {
                      return (
                        <React.Fragment key={index}>
                          <div className="">
                            <span
                              className={cn(
                                "text-sm font-normal",
                                !physicalSingleRate?.enabled
                                  ? "text-white"
                                  : "text-[#A1A1AA]"
                              )}
                            >
                              From&nbsp;
                            </span>
                            <span
                              className={cn(
                                "text-sm font-normal",
                                !physicalSingleRate?.enabled
                                  ? "text-[#94A3B8]"
                                  : "text-[#505357]"
                              )}
                            >
                              {rate.from}&nbsp;
                            </span>
                            <span
                              className={cn(
                                "text-sm font-normal ",
                                !physicalSingleRate?.enabled
                                  ? "text-white"
                                  : "text-[#94A3B8]"
                              )}
                            >
                              To&nbsp;
                            </span>
                            <span
                              className={cn(
                                "text-sm font-normal",
                                !physicalSingleRate?.enabled
                                  ? "text-[#94A3B8]"
                                  : "text-[#505357]"
                              )}
                            >
                              {rate.to}&nbsp;
                            </span>
                            <span
                              className={cn(
                                "text-sm font-normal",
                                !physicalSingleRate?.enabled
                                  ? "text-white"
                                  : "text-[#94A3B8]"
                              )}
                            >
                              Copies&nbsp;:&nbsp;
                            </span>
                            <span
                              className={cn(
                                "text-sm font-normal text-[#94A3B8]"
                              )}
                            >
                              {rate.percentage}&nbsp;%
                            </span>
                          </div>
                        </React.Fragment>
                      );
                    } else {
                      return null;
                    }
                  })}
              </div>
              <form onSubmit={onSubmitPhysicalForm}>
                <div className="grid grid-cols-12 gap-4 items-center mt-10">
                  <div className="col-span-4">
                    <CurrencyInput
                      title="From"
                      name="from"
                      currency="Copies"
                      value={physicalRateInputs?.from || ""}
                      onChange={handleChangePhysicalFormInputs}
                      disabled={physicalSingleRate?.enabled}
                    />
                  </div>
                  <div className="col-span-4">
                    <CurrencyInput
                      title="To"
                      name="to"
                      currency="Copies"
                      value={physicalRateInputs?.to || ""}
                      onChange={handleChangePhysicalFormInputs}
                      disabled={physicalSingleRate?.enabled}
                    />
                  </div>
                  <div className="col-span-4">
                    <CurrencyInput
                      title="Royalties"
                      name="percentage"
                      currency="%"
                      value={physicalRateInputs?.percentage || ""}
                      onChange={handleChangePhysicalFormInputs}
                      disabled={physicalSingleRate?.enabled}
                    />
                  </div>
                </div>
                <div className="flex justify-end items-center h-full w-full !mt-7">
                  <button type="submit" className="text-[#2997FF]">
                    + Add a tier
                  </button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
          <Button className="w-full !mt-20">Next</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Royalties;
