import { JSXElementConstructor } from "react"
import { Label } from "../ui/label"
import { RadioGroupItem } from "../ui/radio-group"
import { Icons } from "@/components/ui/icons"

export function MiniCard( props: { title: string, icon:  JSX.Element } ) {
    return (
        <Label
            htmlFor={props.title}
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
        >
            <RadioGroupItem value={props.title} id={props.title} className="sr-only" />
                <span className="mb-3 h-6 w-6">
                    {props.icon}
                </span> 
            {props.title}
        </Label>
    )
} 