import { CardsActivityGoal } from "@/components/activity-goal";

const CategoryCard = ({
  card,
  step,
  updateGoal,
  buttonHidden,
  buttonTitle,
  unit,
  minValue,
  maxValue
}: {
  card: any;
  step?:number,
  updateGoal: (v: number) => void;
  buttonHidden?: boolean;
  avatar?: boolean;
  bgcolor?: string;
  buttonTitle?: string;
  unit?: string;
  minValue?: number;
  maxValue?: number;
}) => {
  const handleChangeGoal = (v: number) => {
    updateGoal(v);
  };
  return (
    <div className="flex items-start justify-between gap-4 pl-2.5 pt-1.5 rounded-md bg-modal pb-1.5 mb-8">
      <div className="pt-3">
        <p className="text-sm font-medium leading-none">{card.title}</p>
      </div>
      <div className="">
        <CardsActivityGoal
          label="SHARES OF REVENUES"
          initialValue={Number(card?.revenue) || 0}
          unit={unit || "€"}
          step={step || 10}
          buttonTitle={buttonTitle || ""}
          minValue={minValue || 0}
          maxValue={maxValue || 50000}
          buttonHidden={buttonHidden}
          onClickButton={() => {}}
          isOwner={false}
          setGoal={handleChangeGoal}
        />
      </div>
    </div>
  );
};

export default CategoryCard;
