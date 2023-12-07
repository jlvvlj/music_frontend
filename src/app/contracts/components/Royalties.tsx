import { useState, FormEvent, FormEventHandler, ChangeEvent } from "react";
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
  const [digitalSingleRate, setDigitalSingleRate] = useState<SingleRate | null>(
    null
  );
  const [tieredRates, setTieredRates] = useState<TieredRate[]>([]);

  const [physicalRateInputs, setPhysicalRateInputs] =
    useState<InputType | null>(null);
  const [digitalRateInputs, setDigitalRateInputs] = useState<InputType | null>(
    null
  );

  // **

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

  const handleChangeSwitch = (
    enabled: boolean,
    rate: TieredRate,
    index: number
  ) => {
    const _tieredRates = [...tieredRates];
    const _rate = {
      ...rate,
      enabled,
    };

    _tieredRates.splice(index, 1, _rate);
    setTieredRates(_tieredRates);
  };

  const handleChangePhysicalSingleRateEnabled = (enabled: boolean) => {
    setPhysicalSingleRate((prev: any) => ({
      ...prev,
      enabled,
    }));
  };
  const handleChangeDigitalSingleRateEnabled = (enabled: boolean) => {
    setDigitalSingleRate((prev: any) => ({
      ...prev,
      enabled,
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
                  currency="%"
                  disabled={!physicalSingleRate?.enabled}
                />
              </div>
            </div>
            {tieredRates &&
              !!tieredRates.length &&
              tieredRates.map((rate, index) => {
                if (rate.type === "physical") {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-12 gap-4 items-center"
                    >
                      <div className="col-span-2">
                        <p
                          className={cn(
                            "text-sm font-normal",
                            rate.enabled ? "text-white" : "text-[#A1A1AA]"
                          )}
                        >
                          Tiered Rates
                        </p>
                      </div>
                      <div className="col-span-1 flex justify-center items-center">
                        <Switch
                          checked={rate.enabled}
                          onCheckedChange={(e) =>
                            handleChangeSwitch(e, rate, index)
                          }
                          aria-readonly
                        />
                      </div>
                      <div className="col-span-2">
                        <span className="text-sm font-normal text-[#FFFFFF]">
                          From&nbsp;
                        </span>
                        <span className="text-sm font-normal text-[#94A3B8]">
                          {rate.from}&nbsp;
                        </span>
                        <span className="text-sm font-normal text-[#FFFFFF]">
                          To&nbsp;
                        </span>
                        <span className="text-sm font-normal text-[#94A3B8]">
                          {rate.to}&nbsp;
                        </span>
                        <span className="text-sm font-normal text-[#FFFFFF]">
                          Copies&nbsp;:&nbsp;
                        </span>
                        <span className="text-sm font-normal text-[#94A3B8]">
                          {rate.percentage}%
                        </span>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}

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
                  />
                </div>
                <div className="col-span-1">
                  <CurrencyInput
                    title="To"
                    name="to"
                    currency="Copies"
                    value={physicalRateInputs?.to || ""}
                    onChange={handleChangePhysicalFormInputs}
                  />
                </div>
                <div className="col-span-1">
                  <CurrencyInput
                    title="Royalties"
                    name="percentage"
                    currency="%"
                    value={physicalRateInputs?.percentage || ""}
                    onChange={handleChangePhysicalFormInputs}
                  />
                </div>
                <div className="col-span-1 flex justify-center items-end h-full">
                  <Button type="submit">ADD</Button>
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
                  currency="%"
                  disabled={!digitalSingleRate?.enabled}
                />
              </div>
            </div>
            {tieredRates &&
              !!tieredRates.length &&
              tieredRates.map((rate, index) => {
                if (rate.type === "digital") {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-12 gap-4 items-center"
                    >
                      <div className="col-span-2">
                        <p
                          className={cn(
                            "text-sm font-normal",
                            rate.enabled ? "text-white" : "text-[#A1A1AA]"
                          )}
                        >
                          Tiered Rates
                        </p>
                      </div>
                      <div className="col-span-1 flex justify-center items-center">
                        <Switch
                          checked={rate.enabled}
                          onCheckedChange={(e) =>
                            handleChangeSwitch(e, rate, index)
                          }
                          aria-readonly
                        />
                      </div>
                      <div className="col-span-2">
                        <span className="text-sm font-normal text-[#FFFFFF]">
                          From&nbsp;
                        </span>
                        <span className="text-sm font-normal text-[#94A3B8]">
                          {rate.from}&nbsp;
                        </span>
                        <span className="text-sm font-normal text-[#FFFFFF]">
                          To&nbsp;
                        </span>
                        <span className="text-sm font-normal text-[#94A3B8]">
                          {rate.to}&nbsp;
                        </span>
                        <span className="text-sm font-normal text-[#FFFFFF]">
                          Copies&nbsp;:&nbsp;
                        </span>
                        <span className="text-sm font-normal text-[#94A3B8]">
                          {rate.percentage}%
                        </span>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}

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
                  />
                </div>
                <div className="col-span-1">
                  <CurrencyInput
                    title="To"
                    name="to"
                    currency="Copies"
                    value={digitalRateInputs?.to || ""}
                    onChange={handleChangeDigitalFormInputs}
                  />
                </div>
                <div className="col-span-1">
                  <CurrencyInput
                    title="Royalties"
                    name="percentage"
                    currency="%"
                    value={digitalRateInputs?.percentage || ""}
                    onChange={handleChangeDigitalFormInputs}
                  />
                </div>
                <div className="col-span-1 flex justify-center items-end h-full">
                  <Button type="submit">ADD</Button>
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
