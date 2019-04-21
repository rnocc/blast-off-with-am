export interface Astronaut {
  name: string;
  year: number;
  group: number;
  status: string;
  birthdate: string;
  birthPlace: string;
  gender: string;
  almaMater: string;
  undergraduateMajor: string;
  graduateMajor: string;
  militaryRank: string;
  militaryBranch: string;
  spaceFlights: number;
  spaceFlightHours: number;
  spaceWalks: number;
  spaceWalkHours: number;
  missions: string;
  deathDate: string;
  deathMission: string;
  photo: string;
}

export interface Filter {
  category: string;
  displayName: string;
  options: Option[];
}

export interface FilterState {
  [key: string]: Option;
}

export type Option = string | number;
