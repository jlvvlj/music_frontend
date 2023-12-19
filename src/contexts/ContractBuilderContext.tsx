import {
  Abatement,
  BroadCasting,
  Budget,
  Recording,
  STEPS,
  SingleRate,
  TeamMember,
  TieredRate,
} from "@/components/contract/types";
import { ActionMap, ContractBuilderState } from "@/types/contract-builder";
import React, { createContext, ReactNode, useEffect, useReducer } from "react";

enum Steps {
  CONTRIBUTORS = "CONTRIBUTORS",
  SHARES = "SHARES",
  RECORDINGS = "RECORDINGS",
  BUDGET = "BUDGET",
  ROYALTIES = "ROYALTIES",
  ABATEMENTS = "ABATEMENTS",
  BROADCASTING = "BROADCASTING",
}

type ContractBuilderPayload = {
  [Steps.ABATEMENTS]: {
    abatement: Abatement;
  };
  [Steps.BROADCASTING]: {
    broadCasting: BroadCasting;
  };
  [Steps.BUDGET]: {
    budget: Budget;
  };
  [Steps.CONTRIBUTORS]: {
    members: TeamMember[];
    soloMember: TeamMember;
  };
  [Steps.RECORDINGS]: {
    recordings: Recording[];
  };
  [Steps.ROYALTIES]: {
    singleRate: SingleRate;
    tieredRates: TieredRate[];
  };
  [Steps.SHARES]: {};
};

export type ContractBuilderActions =
  ActionMap<ContractBuilderPayload>[keyof ActionMap<ContractBuilderPayload>];

const initialState: ContractBuilderState = {
  abatement: null,
  broadCasting: null,
  budget: null,
  members: [],
  soloMember: null,
  recordings: [],
  singleRate: null,
  tieredRates: [],
};

export type ContractBuilderContextType = {
  abatement: Abatement | null;
  broadCasting: BroadCasting | null;
  budget: Budget | null;
  members: TeamMember[];
  soloMember: TeamMember | null;
  recordings: Recording[];
  singleRate: SingleRate | null;
  tieredRates: TieredRate[];
  dispatch: React.Dispatch<ContractBuilderActions>;
};

const ContractBuilderReducer = (
  state: ContractBuilderState,
  action: ContractBuilderActions
) => {
  switch (action.type) {
    case Steps.ABATEMENTS:
      return {
        ...state,
        abatement: action.payload.abatement,
      };
    case Steps.BROADCASTING:
      return {
        ...state,
        broadCasting: action.payload.broadCasting,
      };
    case Steps.BUDGET:
      return {
        ...state,
        budget: action.payload.budget,
      };
    case Steps.CONTRIBUTORS:
      return {
        ...state,
        members: action.payload.members,
        soloMember: action.payload.soloMember,
      };
    case Steps.RECORDINGS:
      return {
        ...state,
        recordings: action.payload.recordings,
      };
    case Steps.ROYALTIES:
      return {
        ...state,
        singleRate: action.payload.singleRate,
        tieredRates: action.payload.tieredRates,
      };
    case Steps.SHARES:
      return state;
    default:
      return state;
  }
};

const ContractBuilderContext = createContext<ContractBuilderContextType | null>(
  null
);

function ContractBuilderProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(ContractBuilderReducer, initialState);

  return (
    <ContractBuilderContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ContractBuilderContext.Provider>
  );
}

export { ContractBuilderContext, ContractBuilderProvider };
