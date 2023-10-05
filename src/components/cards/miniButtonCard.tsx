import { JSXElementConstructor } from "react"
import { Label } from "../ui/label"
import { RadioGroupItem } from "../ui/radio-group"
import { Icons } from "@/components/ui/icons"
import { Button } from "../ui/button"

export function MiniButtonCard(props: { title: string, icon: JSX.Element }) {
    return ( 
        <Label >
                <span className="mb-3 h-6 w-6">
                {props.icon}
                </span>
                {props.title}
        </Label>
    )
}
