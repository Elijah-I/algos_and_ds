type Status = "idle" | "pending" | "fulfilled";

type StatusWithBrackets = `[${Status}]`;
type StatusWithBracketsLong = { [K in Status]: `[${K}]` }[Status];

const status: StatusWithBracketsLong = "[idle]";
