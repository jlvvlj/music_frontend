import React from "react";
export interface StepProps extends React.PropsWithChildren {
  updateStep: (step: number) => void;
}
export type TeamMember = {
  id: number;
  name: string;
  surName: string;
  email: string;
  avatar?: string;
  role: string;
  revenue?: number;
};

export interface Recording {
  number: number;
  recordingType: RecordingType;
  programType: ProgramType;
  completedAt: Date;
  releasedAt: Date;
  optionRightsLimit: Date;
}
export interface ArtistRecording {
  image: string;
  trackName: string;
  audio: string;
  recordingType: string;
}

export type RecordingType = "firm" | "optional";
export type ProgramType = "album" | "single";

export type Program = {
  label: string;
  checked: boolean;
};

export const ProgramTypes: Program[] = [
  {
    label: "Single (SP)",
    checked: false,
  },
  {
    label: "Maxi-Single",
    checked: false,
  },
  {
    label: "Mini-Album (EP)",
    checked: false,
  },
  {
    label: "Album (LP)",
    checked: false,
  },
  {
    label: "Other",
    checked: false,
  },
  {
    label: "Maximum number of recordings",
    checked: false,
  },
];

export const COUNTRIES = [
  {
    label: "France",
    checked: false,
  },
  {
    label: "Spain",
    checked: false,
  },
  {
    label: "England",
    checked: false,
  },
];

export enum StepIndex {
  CONTRIBUTORS = 1,
  SHARES,
  RECORDINGS,
  BUDGET,
  ROYALTIES,
  ROYALTIES_ADVANCES,
  ABATEMENTS,
  BROADCASTING,
  DERIVATIVE_USE,
}

export enum ContributionSubType {}

export type Step = {
  label: string;
  step: StepIndex;
  title: string;
  saveBtnHidden: boolean;
  description: string;
};

export const STEPS = [
  {
    label: "Contributors",
    step: StepIndex.CONTRIBUTORS,
    title: "Let’s start with the team",
    saveBtnHidden: false,
    description: "Invite your team to join the project.",
    subTitle: "",
  },
  {
    label: "Shares",
    step: StepIndex.SHARES,
    title: "Now time to allocate shares",
    subTitle: "",
    saveBtnHidden: false,
    description:
      "Enter the appropriate amount of shares to everyone on the team",
  },
  {
    label: "Recordings",
    step: StepIndex.RECORDINGS,
    title: "Recordings",
    subTitle: "",
    saveBtnHidden: false,
    description: "Enter firm and optional recordings details",
  },
  {
    label: "Budgets",
    step: StepIndex.BUDGET,
    title: "Initial Budget",
    subTitle: "",
    saveBtnHidden: false,
    description: "Enter the budget  details",
  },
  {
    label: "Royalties",
    step: StepIndex.ROYALTIES,
    title: "Royalties",
    subTitle: "",
    saveBtnHidden: false,
    description: "Enter the contract royalties details",
  },
  {
    label: "Royalties Advances",
    step: StepIndex.ROYALTIES_ADVANCES,
    title: "Royalties Advances",
    subTitle:
      "Would you like to include a Royalty advance for some of your Recordings?",
    saveBtnHidden: false,
    description: "Enter the contract royalties details",
  },
  {
    label: "Abatements",
    step: StepIndex.ABATEMENTS,
    title: "Abatements",
    subTitle: "Would you like to include Abatements to the contract?",
    saveBtnHidden: false,
    description: "Enter the contract royalties details",
  },
  {
    label: "BroadCasting",
    step: StepIndex.BROADCASTING,
    title: "Broadcasting right & Secondary Use",
    subTitle:
      "Would you like to include Broadcasting right & Secondary Use rules?",
    saveBtnHidden: false,
    description: "Enter the contract secondary use details",
  },
  {
    label: "Derivative use",
    step: StepIndex.DERIVATIVE_USE,
    title: "Derivative use",
    subTitle: "Would you like to include Derivative use rules?",
    saveBtnHidden: false,
    description: "Enter the contract secondary use details",
  },
];

// ** types
export type Country = {
  label: string;
  value: string;
};
export interface Abatement {
  foreignSales: {
    percentage: number;
    countries: Country[];
  };
  compilation: {
    percentage: number;
  };
  promotion: {
    percentage: number;
  };
  discouts: {
    percentage: number;
  };
  offCircuits: {
    percentage: number;
  };
}

export interface BroadCasting {
  foreignSales: {
    percentage: number;
  };
  secondaryUses: {
    percentage: number;
  };
}

export interface Budget {
  registration: {
    minimum: number;
    maximum: number;
    royalties: number;
  };
  multimedia: {
    salary: number;
  };
  promotion: {
    salary: number;
  };
}

export interface DerivativeUse {
  merchandising: {
    percentage: number;
  };
  partnerships: {
    percentage: number;
  };
}

export interface SingleRate {
  percentage: number;
}

export interface TieredRate extends SingleRate {
  from: number;
  to: number;
}

/* initial value */
export const initialMembers: TeamMember[] = [
  {
    id: 1,
    name: "Julie Depree",
    surName: "",
    email: "",
    role: "Master Owner",
    avatar: "/amandine.svg",
    revenue: 50,
  },
  {
    id: 2,
    name: "Charly Jones",
    surName: "",
    email: "",
    role: "Singer",
    avatar: "/orlane.svg",
    revenue: 50,
  },
  {
    id: 3,
    name: "Orlane Moog",
    surName: "",
    email: "",
    role: "Musician",
    avatar: "/jon.svg",
    revenue: 30,
  },
];
