import { Player } from "./PlayerTypes";
import { Member } from "./Member";

export type DraftRoom = {
  id: string;
  players: Player[];
  members: Member[];
};
