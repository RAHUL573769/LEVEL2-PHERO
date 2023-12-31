let anything: any;
anything = "Next Level Developer";

(anything as string).length;

const kgToGram = (value: "string" | "number"): string | number | undefined => {
  if (typeof value === "string") {
    return `The value is ${value}`;
  } else if (typeof value === "number") {
    return value;
  } else {
    return undefined;
  }
};
