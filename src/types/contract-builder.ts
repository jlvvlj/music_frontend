import {
  Abatement,
  Recording,
  TeamMember,
  BroadCasting,
  Budget,
  SingleRate,
  TieredRate,
} from "@/components/contract/types";

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type ContractBuilderState = {
  abatement: Abatement | null;
  broadCasting: BroadCasting | null;
  budget: Budget | null;
  members: TeamMember[];
  soloMember: TeamMember | null;
  recordings: Recording[];
  singleRate: SingleRate | null;
  tieredRates: TieredRate[];
};