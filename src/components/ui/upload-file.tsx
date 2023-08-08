import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"

export default function UploadFile(props: { input: string }) {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="input">{props.input}</Label>
            <Input id="input" type="file" />
        </div>
    )
}
