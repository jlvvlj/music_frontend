import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/registry/new-york/ui/popover"

const invitationDetail = [
    {label: 'Name', value: 'Jon'},
    {label: 'Surname', value: 'Carter'},
    {label: 'Role', value: 'Singer'},
    {label: 'Email', value: 'joncarter@email.com'}
]

export default function InvitationPopover() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="hover:bg-[#5D9DF1] bg-mblue text-foreground">Invite contributors</Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 bg-modal py-6 px-5">
                <div className="grid gap-8">
                    <div className="space-y-3">
                        <h4 className="font-medium leading-none text-2xl">Invitation</h4>
                        <p className="text-sm text-muted-foreground">
                            Invite artists to join in this contract.
                        </p>
                    </div>
                    <div className="grid gap-3">
                        {invitationDetail.map((item, index) =>
                            <div key={index} className="grid grid-cols-3 items-center gap-4">
                                <Label className="text-sm">{item.label}</Label>
                                <Input
                                    defaultValue={item.value}
                                    className="col-span-2 h-8 bg-card3 border-input3 text-[#666666]"
                                />
                            </div>
                        )}
                    </div>
                    <Button className="hover:bg-[#5D9DF1] bg-mblue text-foreground w-fit mx-auto px-16 mt-4">Send invitation</Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}
