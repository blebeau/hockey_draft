export interface Player {
  id: string | null;
  averageDraftPick?: number | null;
  name: string | null;
  games: number | null;
  img: string | null;
  weight: number | null;
  age: number | null;
  team: string | null;
  position: string | null;
  height: string | null;

  goals?: number | null;
  assists?: number | null;
  powerPlayGoals?: number | null;
  powerPlayPoints?: number | null;
  shortHandedGoals?: number | null;
  shortHandedPoints?: number | null;
  shots?: number | null;
  hits?: number | null;
  pim?: number | null;
  plusMinus?: number | null;
  blocked?: number | null;

  goalAgainstAverage?: number | null;
  savePercentage?: number | null;
  shotsAgainst?: number | null;
  shutouts?: number | null;
  wins?: number | null;
}
