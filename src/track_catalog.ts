type TrackSpec = {
  id: string;
  catno: string;
  label: string;
  colour: string;
  length: number;
};

const SLEEPER_LENGTH = 22;
const TRACK_GUAGE = 12;

const track_catalog: TrackSpec[] = [
  { id: "1", catno: "TT8002", label: "166mm", colour: "#0bff01", length: 166 },
  { id: "2", catno: "TT8039", label: "332mm", colour: "#fe00f6", length: 322 },
];

export { SLEEPER_LENGTH, TRACK_GUAGE, track_catalog, type TrackSpec };
