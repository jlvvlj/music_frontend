export interface Recording {
  image: string;
  title: string;
  number: number;
  type: RecordingType;
  programType: ProgramType;
  completedAt: string;
  releasedAt: string;
  optionRightsLimit: string;
}

type RecordingType = {
  name: "Firm" | "Optional" | "Other",
  description: string;
}
type ProgramType = {
  name: "Firm" | "Optional" | "Other",
  description: string;
}