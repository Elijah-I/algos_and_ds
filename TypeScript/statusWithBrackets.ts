type Status = "idle" | "pending" | "fulfilled";

type StatusWithBrackets = `[${Status}]`;

const status: StatusWithBrackets = "[idle]";
