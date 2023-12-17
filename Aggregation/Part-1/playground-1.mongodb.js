use("newdb");

db.practise.insertOne({ name: "John Smith" });
db.practise.find();
db.practise.insertMany([
  { name: "Rahul Rudra", age: "23" },
  { name: "Dadu", age: "23" }
]);

db.practise.find({ name: "Dadu" });

db.practise.findOne();
