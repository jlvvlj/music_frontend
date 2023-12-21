import { cn } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/activity-goal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "../ui/date-picker";
import { useState } from "react";

const step = 100;
const RoyaltyCard = () => {
  const [value, setValue] = useState(3000);
  const handleChangeGoal = (v: number) => {
    setValue(v);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-8 px-4  py-3 rounded-md mb-5 w-fit bg-modal-foreground"
      )}
    >
      <div>
        <Select defaultValue="1">
          <SelectTrigger id="signature">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent className="bg-modal-foreground">
            <SelectItem value="1" className="focus:bg-mblue">
              <>
                <p className="text-[#F8FAFC] text-sm font-normal">
                  At Signature
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  Lorem ipsum
                </p>
              </>
            </SelectItem>
            <SelectItem value="2" className="focus:bg-mblue">
              <>
                <p className="text-[#F8FAFC] text-sm font-normal">
                  At Commercial release
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  Lorem ipsum
                </p>
              </>
            </SelectItem>
            <SelectItem value="3" className="focus:bg-mblue">
              <>
                <p className="text-[#F8FAFC] text-sm font-normal">
                  At Specific Date
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  Lorem ipsum
                </p>
                {/* <DatePicker
                  date={new Date()}
                  className="max-w-[170px]"
                  placeholder="Jan 20, 2023"
                  onDateChange={(d) => {}}
                /> */}
              </>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="">
        <CardsActivityGoal
          label="EUR"
          initialValue={value}
          unit=""
          step={step}
          buttonTitle="Set Share"
          minValue={0}
          maxValue={10000}
          buttonHidden
          onClickButton={() => {}}
          isOwner={true}
          setGoal={handleChangeGoal}
        />
      </div>
    </div>
  );
};

export default RoyaltyCard;
