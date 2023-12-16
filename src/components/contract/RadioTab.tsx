import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Icons } from "@/components/ui/icons";
import { RecordingType } from "@/components/contract/types";

type Props = {
  defaultValue: string;
  handleValueChange: (value: RecordingType) => void;
};
export default function RadioTab({ defaultValue, handleValueChange }: Props) {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      onValueChange={handleValueChange}
      className="grid grid-cols-2 bg-accent items-center rounded-md h-10 mx-0 md:mx-5 xl:mx-10 px-1"
    >
      <Label
        htmlFor="firm"
        className="flex items-center justify-center rounded-md  bg-accent p-4  hover:text-accent-foreground [&:has([data-state=checked])]:bg-popover h-9"
      >
        <RadioGroupItem value="firm" id="firm" className="sr-only" />
        Firm
      </Label>
      <Label
        htmlFor="optional"
        className="flex items-center justify-center rounded-md bg-accent p-4 hover:text-accent-foreground [&:has([data-state=checked])]:bg-popover h-9"
      >
        <RadioGroupItem value="optional" id="optional" className="sr-only" />
        Optional
      </Label>
    </RadioGroup>
  );
}
