import { Card, CardContent, CardFooter, CardHeader } from "@/registry/new-york/ui/card";
import { CalendarDays, CreditCard, MoveRight, UserCircle } from "lucide-react";

export default function SummaryMail() {
    return (
        <div className="grid xl:gap-x-24 xl:grid-cols-3 grid-cols-1 gap-y-6 items-center xl:px-14 px-[42px] pt-16 pb-16 xl:pb-[110px]">
            <div className="lg:col-span-2 flex grid grid-cols-2">
                <div>
                    <h6 className="text-white mb-2 font-normal">Contract</h6>
                    <p className="text-[#6B7280]/70 pb-6 border-b">Issued on <span className="text-muted-foreground font-normal">January 23, 2024</span></p>
                    <h6 className="text-white mb-2 font-normal pt-6">From</h6>
                    <p className="text-white font-normal">ACM, SAS <br /><span className="text-[#6B7280]/70">7363 Cynthia Pass <br /> Toronto, ON N3Y 4H8</span></p>
                </div>
                <div>
                    <p className="text-[#6B7280]/70 pb-6 border-b pt-8 max-[841px]:pt-2">Planned completion on <span className="text-muted-foreground font-normal">January 31, 2025</span></p>
                </div>
            </div>
            <Card className="rounded-lg bg-card3 border-none">
                <CardHeader className="border-b">
                    <h6 className="text-base mb-1">Summary</h6>
                    <div className="flex justify-between items-end">
                        <h6 className="text-base">$10,560.00</h6>
                        <p className="text-xs text-[#16A34A] bg-[#16A34A]/10 rounded-md p-1">Signed</p>
                    </div>
                </CardHeader>
                <CardContent className="border-b p-6">
                    <div className="flex gap-4 mb-4 items-center">
                        <UserCircle className="h-5 w-5" />
                        <p className="text-[15px]">Julie Depree - <span className="text-muted-foreground">Master Owner</span></p>
                    </div>
                    <div className="flex gap-4 mb-4 items-center">
                        <CalendarDays className="h-5 w-5" />
                        <p className="text-[15px]">Signed - <span className="text-muted-foreground">January 31, 2024</span></p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <CreditCard className="h-5 w-5" />
                        <p className="text-[15px]">Artists - <span className="text-muted-foreground">Jeff Scott, Orlane Song, Jon Savior</span></p>
                    </div>
                </CardContent>
                <CardFooter className="p-6">
                    <p className="text-muted-foreground flex items-center">Remind team members <MoveRight className="h-4 w-4 ml-2 mt-0.5" /></p>
                </CardFooter>
            </Card>
        </div>
    );
}
