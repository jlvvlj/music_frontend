"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card";

const budgetCard = [
  { title: "Minimum Budget", cost: "5000" },
  { title: "Maximum Budget", cost: "9000" },
  { title: "External Royalties", cost: "50%" },
  { title: "Image", cost: "3000" },
  { title: "Promotion", cost: "7000" },
];

export default function BudgetCard({ color }: { color: string }) {
  return (
    <div>
      <h6 className="text-2xl	mb-3">Initial Budget</h6>
      <p className="mb-7 text-sm text-muted-foreground">
        Artists participating in this contract.
      </p>
      <CardContent className="flex flex-wrap gap-4 px-1">
        {budgetCard.map((card, index) => (
          <Card
            key={index}
            className={`${color} border-[#1D1D1F] pt-2 px-2.5 pb-6 w-[132px] h-[102px]`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
              <CardTitle className="text-xs font-normal pb-5">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-xs font-normal text-[#4EABFE]">
                {card.cost}
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </div>
  );
}
