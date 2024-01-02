import { Toaster, toast } from "sonner";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function ToasterDemo({ toastTitle }: { toastTitle: string }) {
    return (
        <div>
            <Toaster />
            <Button
                className="bg-mblue"
                variant="outline"
                onClick={() =>
                    toast(toastTitle, {
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    })
                }
            >
                Next
                <ArrowRightIcon className="ml-1" />
            </Button>
        </div>
    )
}