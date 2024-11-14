import { Pose } from "../../lib/pose";

class Track {
  readonly kind: string;
  endpoints: Pose[];
  readonly outline: string;

  constructor(kind: string, endpoints: Pose[], outline: string) {
    this.kind = kind;
    this.endpoints = endpoints;
    this.outline = outline;
  }
}

export { Track };
