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
  name: "Firm" | "Optional" | "Other",
  description: string;
}

export type ProgramType = {
  label: string;
  checked: boolean;
}

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
]