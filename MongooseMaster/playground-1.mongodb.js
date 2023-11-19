use("apolloLevel2");
db.databaseCollection.find({});
db.databaseCollection.find({ age: { $gt: 10, $lt: 50 } }, { age: 1 });

db.databaseCollection.find(
  {
    $and: [{ age: { $gt: 10 } }, { age: { $lt: 80 } }]
  },
  { name: 1 }
);

db.databaseCollection.find({ fName: { $exists: false } });

db.databaseCollection.find({
  $and: [{ friends: { $type: "array" } }, { name: { $type: "string" } }]
});
db.databaseCollection.find(
  {
    skills: {
      $elemMatch: {
        name: "JAVASCRIPT",
        level: "Expert",
        isLearning: true
      }
    }
  },
  { skills: 1 }
);
