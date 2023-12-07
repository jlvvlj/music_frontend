export interface Recording {
  image: string;
  title: string;
  number: string;
  recordingType: string;
  programType: string;
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
type ProgramType = {
  name: "Firm" | "Optional" | "Other",
  description: string;
}