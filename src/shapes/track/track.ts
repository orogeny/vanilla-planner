import { Pose } from "../../lib/pose";

type Track = {
  kind: "straight" | "unknown";
  colour: string;
  outline: string;
  endpoints: Pose[];
  render: (ctx: CanvasRenderingContext2D) => void;
};

export { type Track };
