import { Pose } from "../../lib/pose";

type Track = {
  kind: "straight" | "unknown";
  colour: string;
  outline: string;
  endpoints: Pose[];
};

export { type Track };
