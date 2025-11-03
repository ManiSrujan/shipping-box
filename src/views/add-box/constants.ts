const COUNTRY_OPTIONS = [
  { label: "Sweden (7.35 INR)", value: "Sweden" },
  { label: "China (11.53 INR)", value: "China" },
  { label: "Brazil (15.63 INR)", value: "Brazil" },
  { label: "Australia (50.09 INR)", value: "Australia" },
];

const COUNTRY_TO_RATE: Record<string, number> = {
  Sweden: 7.35,
  China: 11.53,
  Brazil: 15.63,
  Australia: 50.09,
};

const DEFAULT_COUNTRY = COUNTRY_OPTIONS[0].value;

const DEFAULT_COLOR = "#000000";

export { COUNTRY_OPTIONS, DEFAULT_COLOR, DEFAULT_COUNTRY, COUNTRY_TO_RATE };
