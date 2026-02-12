import type { Anchor } from "./memoryLane.data";

export interface MemoryEdge {
  from: string;
  to: string;

  fromAnchor: Anchor;
  toAnchor: Anchor;

  via?: { x: number; y: number }[];
}
