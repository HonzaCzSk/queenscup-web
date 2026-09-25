export type Category = "u12" | "u13" | "u14";

export type MatchStatus = "scheduled" | "live" | "finished" | "upcoming";

export type MatchType =
  | "group"
  | "qf"
  | "ninth"
  | "seventh"
  | "fifth"
  | "third"
  | "final"
  | string;

export interface Partner {
  _id: string;
  name: string;
  url?: string;
  level: "general" | "main" | "partner" | "media";
  logo?: string;
}

export interface Player {
  number?: string | number;
  name: string;
}

export interface Team {
  _id: string;
  name: string;
  category: Category | string;
  country?: string;
  venue?: string;
  coach?: string;
  logo?: string;
  players?: Player[];
}

export interface MatchQuarter {
  scoreA?: number;
  scoreB?: number;
}

export interface MatchTeamRef {
  name: string;
  country?: string;
}

export interface Match {
  _id: string;
  category: Category | string;
  day: number;
  datetime: string;
  venue: string;
  court: string;
  matchType: MatchType;
  group?: string;
  scoreA?: number;
  scoreB?: number;
  status: MatchStatus;
  quarters?: MatchQuarter[];
  streamUrl?: string;
  teamA?: MatchTeamRef;
  teamB?: MatchTeamRef;
}

export interface Settings {
  showSchedule?: Record<string, boolean>;
  showTeams?: Record<string, boolean>;
}