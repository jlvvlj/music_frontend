import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { RadioGroupItem } from "../ui/radio-group";

export function RadioButtonCard(props: { title: string; icon?: JSX.Element }) {
  return (
    <Label
      htmlFor={props.title}
      className={cn(
        "flex flex-col items-center rounded-md border-2 border-muted bg-[#131313] p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary h-56",
        props.icon ? " justify-between" : "justify-center"
      )}
    >
      <RadioGroupItem
        value={props.title}
        id={props.title}
        className="sr-only"
      />
      {props.icon && <span className="mb-3 h-36 w-6">{props.icon}</span>}
      <p
        className={cn(
          "text-[#F8FAFC] text-[27px] font-normal",
        )}
      >
        {props.title}
      </p>
    </Label>
  );
}
