import { Recording, TeamMember } from "@/components/contract/types";

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
  contributor: {
    type: "team" | "solo";
    contributors: TeamMember[];
  };
  recordings: Recording[];
};

export type {};
