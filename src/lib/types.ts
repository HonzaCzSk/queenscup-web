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
  category: string;
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
  category: string;
  day: number;
  datetime: string;
  venue: string;
  court: string;
  matchType: string;
  group?: string;
  scoreA?: number;
  scoreB?: number;
  status: "upcoming" | "live" | "finished";
  quarters?: MatchQuarter[];
  streamUrl?: string;
  teamA?: MatchTeamRef;
  teamB?: MatchTeamRef;
}

export interface Settings {
  showSchedule?: Record<string, boolean>;
  showTeams?: Record<string, boolean>;
}