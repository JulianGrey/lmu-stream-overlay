export interface StandingsStatus {
  bestLapTime: number;
  carClass: string;
  driverName: string;
  fuelFraction: number;
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
  standingsData?: StandingsStatus[];
}
