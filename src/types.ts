export interface SessionStatus {
  bestLapTime: number;
  carClass: string;
  driverName: string;
  lapsBehindLeader: number;
  lapsBehindNext: number;
  lapsCompleted: number;
  pitting: boolean;
  timeBehindLeader: number;
  timeBehindNext: number;
}

export interface StandingsProps {
  raceData?: SessionStatus[];
  updateData: () => void;
}
