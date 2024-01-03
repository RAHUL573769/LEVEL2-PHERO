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

const namesArray: string[] = ["Raul"];

const ourTuple: readonly [boolean, string] = [false, "Rahul"];

console.log(ourTuple);
const user: {
  firstName: string;
  middleName: string;
  company: "Rahuk"; //litersal
} = {
  firstName: "Rahul",
  middleName: "Rudr,,a",
  company: "Rahuk"
};

console.log(user);

const graph: [x: number, y: number] = [222.5, 12.3];
console.log(graph);
