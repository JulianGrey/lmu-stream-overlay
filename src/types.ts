export interface SessionStatus {
  bestLapTime: number;
  carClass: string;
  driverName: string;
  lapsBehindLeader: number;
  lapsBehindNext: number;
  lapsCompleted: number;
  lastLapTime: number;
  pitting: boolean;
  position: number;
  timeBehindLeader: number;
  timeBehindNext: number;
}

export interface StandingsProps {
  raceData?: SessionStatus[];
  updateData: () => void;
}
