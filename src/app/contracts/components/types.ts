export type TeamMember = {
  name: string;
  surName: string;
  email: string;
  avatar?: string;
  role: string;
};

export interface Recording {
  image: string;
  title: string;
  number: string;
  recordingType: string;
  programType: any[];
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

type RecordingType = {
  name: "Firm" | "Optional" | "Other";
  description: string;
};

export type ProgramType = {
  label: string;
  checked: boolean;
};

export const ProgramTypes: ProgramType[] = [
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

export enum StepIndex {
  CONTRIBUTIONS = 1,
  CONTRIBUTORS,
  SHARES,
  ROLE,
  FORM,
  RECORDINGS,
  BUDGET,
  ROYALTIES,
  ABATEMENTS,
  BROADCASTING,
  STACKED,
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
    label: "Contributions",
    step: StepIndex.CONTRIBUTIONS,
    title: "Contributions",
    saveBtnHidden: true,
    description: "Does the contract involve multiple stakeholders?",
  },
  {
    label: "Contributors",
    step: StepIndex.CONTRIBUTORS,
    title: "Let’s start with the team",
    saveBtnHidden: false,
    description: "Invite your team to join the project.",
  },
  {
    label: "Shares",
    step: StepIndex.SHARES,
    title: "Now time to allocate shares",
    saveBtnHidden: false,
    description:
      "Enter the appropriate amount of shares to everyone on the team",
  },
  {
    label: "Role",
    step: StepIndex.ROLE,
    title: "Role",
    saveBtnHidden: true,
    description: "Are you a producer or an artist?",
  },
  {
    label: "Form",
    step: StepIndex.FORM,
    title: "Personal Information",
    saveBtnHidden: false,
    description: "Pleas add some details about you",
  },
  {
    label: "Recordings",
    step: StepIndex.RECORDINGS,
    title: "Recordings",
    saveBtnHidden: false,
    description: "Enter firm and optional recordings details",
  },
  {
    label: "Budgets",
    step: StepIndex.BUDGET,
    title: "Initial Budget",
    saveBtnHidden: false,
    description: "Enter the budget  details",
  },
  {
    label: "Royalties",
    step: StepIndex.ROYALTIES,
    title: "Royalties",
    saveBtnHidden: false,
    description: "Enter the contract royalties details",
  },
  {
    label: "Abatements",
    step: StepIndex.ABATEMENTS,
    title: "Abatements",
    saveBtnHidden: false,
    description: "Enter the contract royalties details",
  },
  {
    label: "BroadCasting",
    step: StepIndex.BROADCASTING,
    title: "Broadcasting right & Secondary Use",
    saveBtnHidden: false,
    description: "Enter the contract secondary use details",
  },
  {
    label: "Stacked",
    step: StepIndex.STACKED,
    title: "Broadcasting right & Secondary Use",
    saveBtnHidden: false,
    description: "Enter the contract secondary use details",
  },

  // {
  //   label: "Contract",
  //   step: StepIndex.CONTRACT,
  //   title: "",
  //   saveBtnHidden: false,
  //   description: "",
  // },
  // {
  //   label: "Contract II",
  //   step: StepIndex.CONTRACT2,
  //   title: "",
  //   saveBtnHidden: false,
  //   description: "",
  // },
  // {
  //   label: "Contract III",
  //   step: StepIndex.CONTRACT3,
  //   title: "",
  //   saveBtnHidden: false,
  //   description: "",
  // },
];
