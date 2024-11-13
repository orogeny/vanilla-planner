import { Pose } from "./vector";

class Track {
  readonly kind: string;
  endpoints: Pose[];

  constructor(kind: string, endpoints: Pose[]) {
    this.kind = kind;
    this.endpoints = endpoints;
  }
}

export { Track };
