import { TeamMember } from "./types";

export const isOwner = (member: TeamMember) => {
  return member.role.toLowerCase().includes("owner");
};
