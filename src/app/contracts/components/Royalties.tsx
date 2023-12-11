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
import { CurrencyInput } from "@/components/ui/currency-input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

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
                <p
                  className={cn(
                    "text-sm font-normal",
                    physicalSingleRate?.enabled
                      ? "text-white"
                      : "text-[#A1A1AA]"
                  )}
                >
                  Single Rate
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-end mb-4 h-full">
                <Switch
                  checked={physicalSingleRate?.enabled}
                  onCheckedChange={handleChangePhysicalSingleRateEnabled}
                />
              </div>
              <div className="col-span-2">
                <CurrencyInput
                  title="Royalites"
                  name="percentage"
                  currency="%"
                  className={
                    physicalSingleRate?.enabled
                      ? "text-white"
                      : "text-[#A1A1AA]"
                  }
                  disabled={!physicalSingleRate?.enabled}
                  value={physicalSingleRate?.percentage || ""}
                  onChange={handleChangePhysicalSingleRatePercentage}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2">
                <p
                  className={cn(
                    "text-sm font-normal",
                    !physicalSingleRate?.enabled
                      ? "text-white"
                      : "text-[#A1A1AA]"
                  )}
                >
                  Tiered Rates
                </p>
              </div>
              <div className="col-span-1 flex justify-center">
                <Switch
                  checked={!physicalSingleRate?.enabled}
                  onCheckedChange={(e) =>
                    handleChangePhysicalSingleRateEnabled(!e)
                  }
                  aria-readonly
                />
              </div>
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
            </div>

            <form onSubmit={onSubmitPhysicalForm}>
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <CurrencyInput
                    title="From"
                    name="from"
                    currency="Copies"
                    value={physicalRateInputs?.from || ""}
                    onChange={handleChangePhysicalFormInputs}
                    disabled={physicalSingleRate?.enabled}
                  />
                </div>
                <div className="col-span-1">
                  <CurrencyInput
                    title="To"
                    name="to"
                    currency="Copies"
                    value={physicalRateInputs?.to || ""}
                    onChange={handleChangePhysicalFormInputs}
                    disabled={physicalSingleRate?.enabled}
                  />
                </div>
                <div className="col-span-1">
                  <CurrencyInput
                    title="Royalties"
                    name="percentage"
                    currency="%"
                    value={physicalRateInputs?.percentage || ""}
                    onChange={handleChangePhysicalFormInputs}
                    disabled={physicalSingleRate?.enabled}
                  />
                </div>
                <div className="col-span-1 flex justify-center items-end h-full">
                  <Button type="submit" disabled={physicalSingleRate?.enabled}>
                    ADD
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="space-y-6">
            <p className="text-[#FAFAFA] text-sm font-normal">
              Digital operations royalties
            </p>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2">
                <p
                  className={cn(
                    "text-sm font-normal",
                    digitalSingleRate?.enabled ? "text-white" : "text-[#A1A1AA]"
                  )}
                >
                  Single Rate
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-end mb-4 h-full">
                <Switch
                  checked={digitalSingleRate?.enabled}
                  onCheckedChange={handleChangeDigitalSingleRateEnabled}
                />
              </div>
              <div className="col-span-2">
                <CurrencyInput
                  title="Royalites"
                  name="percentage"
                  currency="%"
                  disabled={!digitalSingleRate?.enabled}
                  className={
                    digitalSingleRate?.enabled ? "text-white" : "text-[#A1A1AA]"
                  }
                  value={digitalSingleRate?.percentage || ""}
                  onChange={handleChangeDigitalSingleRatePercentage}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2">
                <p
                  className={cn(
                    "text-sm font-normal",
                    !digitalSingleRate?.enabled
                      ? "text-white"
                      : "text-[#A1A1AA]"
                  )}
                >
                  Tiered Rates
                </p>
              </div>
              <div className="col-span-1 flex justify-center">
                <Switch
                  checked={!digitalSingleRate?.enabled}
                  onCheckedChange={(e) =>
                    handleChangeDigitalSingleRateEnabled(!e)
                  }
                  aria-readonly
                />
              </div>
              <div className="col-span-9 space-y-4">
                {tieredRates &&
                  !!tieredRates.length &&
                  tieredRates.map((rate, index) => {
                    if (rate.type === "digital") {
                      return (
                        <React.Fragment key={index}>
                          <div>
                            <span
                              className={cn(
                                "text-sm font-normal",
                                !digitalSingleRate?.enabled
                                  ? "text-white"
                                  : "text-[#A1A1AA]"
                              )}
                            >
                              From&nbsp;
                            </span>
                            <span
                              className={cn(
                                "text-sm font-normal",
                                !digitalSingleRate?.enabled
                                  ? "text-[#94A3B8]"
                                  : "text-[#505357]"
                              )}
                            >
                              {rate.from}&nbsp;
                            </span>
                            <span
                              className={cn(
                                "text-sm font-normal ",
                                !digitalSingleRate?.enabled
                                  ? "text-white"
                                  : "text-[#94A3B8]"
                              )}
                            >
                              To&nbsp;
                            </span>
                            <span
                              className={cn(
                                "text-sm font-normal",
                                !digitalSingleRate?.enabled
                                  ? "text-[#94A3B8]"
                                  : "text-[#505357]"
                              )}
                            >
                              {rate.to}&nbsp;
                            </span>
                            <span
                              className={cn(
                                "text-sm font-normal",
                                !digitalSingleRate?.enabled
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
            </div>
            <form onSubmit={onSubmitDigitalForm}>
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <CurrencyInput
                    title="From"
                    name="from"
                    currency="Copies"
                    value={digitalRateInputs?.from || ""}
                    onChange={handleChangeDigitalFormInputs}
                    disabled={digitalSingleRate?.enabled}
                  />
                </div>
                <div className="col-span-1">
                  <CurrencyInput
                    title="To"
                    name="to"
                    currency="Copies"
                    value={digitalRateInputs?.to || ""}
                    onChange={handleChangeDigitalFormInputs}
                    disabled={digitalSingleRate?.enabled}
                  />
                </div>
                <div className="col-span-1">
                  <CurrencyInput
                    title="Royalties"
                    name="percentage"
                    currency="%"
                    value={digitalRateInputs?.percentage || ""}
                    onChange={handleChangeDigitalFormInputs}
                    disabled={digitalSingleRate?.enabled}
                  />
                </div>
                <div className="col-span-1 flex justify-center items-end h-full">
                  <Button type="submit" disabled={digitalSingleRate?.enabled}>
                    ADD
                  </Button>
                </div>
              </div>
            </form>
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
