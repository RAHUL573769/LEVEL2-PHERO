{
  let name: string[] = ["rahul", "rohit"];
  console.log(name);

  const rollNumber: Array<number> = [1, 2, 3, 4];
  console.log(rollNumber);

  type GenericArray<T> = Array<T>;

  const fruitsName: GenericArray<string> = ["Rahul"];
  console.log(fruitsName);
}
