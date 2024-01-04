import { Toaster, toast } from "sonner";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { StepProps } from "./types";

interface Props extends StepProps {
    toastTitle: string;
  }

export default function ToasterDemo({ updateStep, toastTitle }: Props) {
    const handleClickNext = () => {
        toast(toastTitle, {
          action: {
            label: "Undo",
            onClick: () => {
              console.log("Undo");
            },
          },
        });
    
        setTimeout(() => {
            updateStep(1);
        }, 1000);
      };
    return (
        <div>
            <Toaster />
            <Button
                className="bg-mblue"
                variant="outline"
                onClick={handleClickNext}
            >
                Next
                <ArrowRightIcon className="ml-1" />
            </Button>
        </div>
    )
}