type Track = {
  id: string;
  catno: string;
  label: string;
  colour: string;
  length: number;
};

const track_catalog: Track[] = [
  { id: "1", catno: "TT8002", label: "166mm", colour: "#0bff01", length: 166 },
  { id: "2", catno: "TT8039", label: "332mm", colour: "#fe00f6", length: 322 },
];

export { track_catalog, type Track };
