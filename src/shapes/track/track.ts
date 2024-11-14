import { Pose } from "../../lib/pose";

class Track {
  readonly kind: string;
  readonly colour: string;
  readonly outline: string;
  endpoints: Pose[];

  constructor(
    kind: string,
    colour: string,
    outline: string,
    endpoints: Pose[]
  ) {
    this.kind = kind;
    this.colour = colour;
    this.outline = outline;
    this.endpoints = endpoints;
  }
}

export { Track };
