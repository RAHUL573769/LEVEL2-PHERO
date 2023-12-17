use("newdb1");

db.practise.insertOne({ name: "John Smith" });
db.practise.find();
db.practise.insertMany([
  { name: "Rahul Rudra", age: "23" },
  { name: "Dadu", age: "23" }
]);

db.practise.find({ name: "Dadu" });

db.practise.findOne();

db.practise.insertMany([
  { name: "Rahulia Rudra", age: "20" },
  { name: "Dad", age: "12" },
  { name: "Dad", age: "13" },
  { name: "Dadi", age: "14" },
  { name: "Rad", age: "15" },
  { name: "Dadu Bhai", age: "16" }
]);

db.practise.find({ age: { $gt: 10 } });
db.practise.find({ name: { $eq: "Dad" } });
db.practise.find({ name: { $eq: "Elizabeth Turner" } });

// db.practise.findBy();
// db.practise.find({
//   $and: [$eq:[ $name: "Elizabeth Turner" }, { $email: "gpringrk@livejournal.com" }]]
// });

// db.practise.find({$and:[$eq:[{name:{$eq:"Elizabeth Turner"}}]]})

db.practise.find({
  $and: [{ name: "Elizabeth Turner" }, { email: "gpringrk@livejournal.com" }]
});

db.practise.find({
  $or: [{ name: "Elizabeth Turner" }, { email: "gpringrk@livejournal.com" }]
});

db.practise1.insertMany([
  {
    _id: {
      $oid: "6550a413ea0371cbab510f12"
    },
    name: "Industrial",
    category: "Baby Bags",
    price: 456.38
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f13"
    },
    name: "Baby Accessories",
    category: "Software",
    price: 1102.21
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f14"
    },
    name: "Shoes",
    category: "Baby School Supplies",
    price: 411.43
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f15"
    },
    name: "Baby Fitness Equipment",
    category: "Baby Health",
    price: 1804.09
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f16"
    },
    name: "Software",
    category: "Stationery",
    price: 316.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f17"
    },
    name: "Baby Accessories",
    category: "Clothing",
    price: 249.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f18"
    },
    name: "Baby Car Seats",
    category: "Baby Home Improvement",
    price: 141.3
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f19"
    },
    name: "Baby Bedding",
    category: "Baby Outdoor",
    price: 1411.98
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f1a"
    },
    name: "Hobbies",
    category: "Baby Sports",
    price: 728.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f1b"
    },
    name: "Jewelry",
    category: "Baby Fitness Equipment",
    price: 1994.59
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f1c"
    },
    name: "Baby Carriers",
    category: "Baby Games",
    price: 1265.55
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f1d"
    },
    name: "Hobbies",
    category: "Baby Collectibles",
    price: 1506.39
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f1e"
    },
    name: "Cameras",
    category: "Party Supplies",
    price: 1573.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f1f"
    },
    name: "Games",
    category: "Furniture",
    price: 624.05
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f20"
    },
    name: "Baby Cameras",
    category: "Musical Instruments",
    price: 1581.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f21"
    },
    name: "Baby Strollers",
    category: "Software",
    price: 1667.24
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f22"
    },
    name: "Grocery",
    category: "Beauty",
    price: 676.9
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f23"
    },
    name: "Cameras",
    category: "Baby Art",
    price: 317.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f24"
    },
    name: "Baby Bath",
    category: "Home Improvement",
    price: 359.28
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f25"
    },
    name: "Gifts",
    category: "Baby Grocery",
    price: 1458.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f26"
    },
    name: "Baby Bath",
    category: "Baby Art",
    price: 988.25
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f27"
    },
    name: "Sports",
    category: "Beauty",
    price: 1983.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f28"
    },
    name: "Baby Gifts",
    category: "Garden",
    price: 1232.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f29"
    },
    name: "Office Supplies",
    category: "Shoes",
    price: 425.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f2a"
    },
    name: "Baby Electronics",
    category: "Books",
    price: 36.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f2b"
    },
    name: "Baby Art",
    category: "Electrical",
    price: 747.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f2c"
    },
    name: "Software",
    category: "Baby Strollers",
    price: 1563.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f2d"
    },
    name: "Office Supplies",
    category: "Baby Art",
    price: 267.86
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f2e"
    },
    name: "Furniture",
    category: "Appliances",
    price: 1733.45
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f2f"
    },
    name: "Baby Grocery",
    category: "Baby Bags",
    price: 1699.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f30"
    },
    name: "Gifts",
    category: "Party Supplies",
    price: 418.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f31"
    },
    name: "Luggage",
    category: "Baby Accessories",
    price: 421.06
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f32"
    },
    name: "Food",
    category: "Baby Bedding",
    price: 595.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f33"
    },
    name: "Beauty",
    category: "Hobbies",
    price: 832.55
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f34"
    },
    name: "Baby Outdoor",
    category: "Baby Gear",
    price: 1022.43
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f35"
    },
    name: "Books",
    category: "Kitchen",
    price: 986.22
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f36"
    },
    name: "Appliances",
    category: "Home Improvement",
    price: 620.36
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f37"
    },
    name: "Automotive",
    category: "Baby School Supplies",
    price: 810.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f38"
    },
    name: "Baby Fitness Equipment",
    category: "Baby Car Seats",
    price: 306.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f39"
    },
    name: "Luggage",
    category: "Baby Hobbies",
    price: 1261.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f3a"
    },
    name: "Baby Tools",
    category: "Baby Gifts",
    price: 527.35
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f3b"
    },
    name: "Baby Gear",
    category: "Appliances",
    price: 1505.94
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f3c"
    },
    name: "Electronics",
    category: "Baby Fitness Equipment",
    price: 248.17
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f3d"
    },
    name: "Garden",
    category: "Beauty",
    price: 1116.22
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f3e"
    },
    name: "Home Decor",
    category: "Fitness Equipment",
    price: 1246.1
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f3f"
    },
    name: "Baby Movies",
    category: "Toys",
    price: 1267.19
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f40"
    },
    name: "Baby Electronics",
    category: "Software",
    price: 504.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f41"
    },
    name: "Home Improvement",
    category: "Baby Appliances",
    price: 381.49
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f42"
    },
    name: "Baby Tools",
    category: "Garden",
    price: 424.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f43"
    },
    name: "Baby Musical Instruments",
    category: "Kitchen",
    price: 670.22
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f44"
    },
    name: "Baby Movies",
    category: "Baby Movies",
    price: 1993.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f45"
    },
    name: "Home Decor",
    category: "Garden",
    price: 1296.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f46"
    },
    name: "Baby Gifts",
    category: "Office Supplies",
    price: 1248.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f47"
    },
    name: "Baby Pet Supplies",
    category: "Baby Accessories",
    price: 1420.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f48"
    },
    name: "Baby Collectibles",
    category: "Baby Strollers",
    price: 360.7
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f49"
    },
    name: "Tools",
    category: "Shoes",
    price: 74.69
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f4a"
    },
    name: "Baby Safety",
    category: "Baby Party Supplies",
    price: 77.17
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f4b"
    },
    name: "Baby Movies",
    category: "Baby Gifts",
    price: 951.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f4c"
    },
    name: "Art",
    category: "Hobbies",
    price: 867.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f4d"
    },
    name: "Baby Hobbies",
    category: "Baby Carriers",
    price: 477.3
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f4e"
    },
    name: "Baby Electronics",
    category: "Baby Grocery",
    price: 1472.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f4f"
    },
    name: "Industrial",
    category: "Technology",
    price: 1660.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f50"
    },
    name: "Baby Accessories",
    category: "Health",
    price: 969.92
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f51"
    },
    name: "Accessories",
    category: "Garden",
    price: 1156.58
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f52"
    },
    name: "Baby Bedding",
    category: "Tools",
    price: 974.74
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f53"
    },
    name: "Baby Gifts",
    category: "Baby Feeding",
    price: 1513.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f54"
    },
    name: "Electronics",
    category: "Outdoor",
    price: 580.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f55"
    },
    name: "Baby",
    category: "Kitchen",
    price: 487.92
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f56"
    },
    name: "Tools",
    category: "Baby Electronics",
    price: 35.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f57"
    },
    name: "Office Supplies",
    category: "Fitness Equipment",
    price: 645.05
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f58"
    },
    name: "Health",
    category: "Baby Books",
    price: 1027.7
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f59"
    },
    name: "Industrial",
    category: "Baby Movies",
    price: 187.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f5a"
    },
    name: "Baby Gifts",
    category: "Fitness",
    price: 1088.19
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f5b"
    },
    name: "Appliances",
    category: "Travel",
    price: 1467.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f5c"
    },
    name: "Pets",
    category: "Tools",
    price: 1861.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f5d"
    },
    name: "Baby Cameras",
    category: "Baby Industrial",
    price: 1098.51
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f5e"
    },
    name: "Baby Industrial",
    category: "Baby Sports",
    price: 1449
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f5f"
    },
    name: "Baby Home Improvement",
    category: "Home Decor",
    price: 1214.58
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f60"
    },
    name: "Baby Bedding",
    category: "Baby Cameras",
    price: 312.73
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f61"
    },
    name: "Baby Feeding",
    category: "Electrical",
    price: 1244.96
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f62"
    },
    name: "Baby Sports",
    category: "Shoes",
    price: 1022.56
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f63"
    },
    name: "Automotive",
    category: "Baby Sports",
    price: 1056.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f64"
    },
    name: "Baby Diapering",
    category: "Party Supplies",
    price: 550.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f65"
    },
    name: "Baby Furniture",
    category: "Baby Books",
    price: 870.44
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f66"
    },
    name: "Luggage",
    category: "Baby Sports",
    price: 1166.92
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f67"
    },
    name: "Books",
    category: "Baby Games",
    price: 1836.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f68"
    },
    name: "Baby Gear",
    category: "Baby Clothing",
    price: 1158.8
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f69"
    },
    name: "Industrial",
    category: "Books",
    price: 794.44
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f6a"
    },
    name: "Baby Games",
    category: "Baby Sports",
    price: 1113.35
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f6b"
    },
    name: "Stationery",
    category: "Baby Books",
    price: 1247.56
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f6c"
    },
    name: "Baby Hobbies",
    category: "Baby Gear",
    price: 993.83
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f6d"
    },
    name: "Baby Movies",
    category: "Baby Gifts",
    price: 51.91
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f6e"
    },
    name: "Beauty",
    category: "Musical Instruments",
    price: 1511.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f6f"
    },
    name: "Baby Carriers",
    category: "Baby Electrical",
    price: 1577.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f70"
    },
    name: "Books",
    category: "Baby Crafts",
    price: 1544.07
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f71"
    },
    name: "Garden",
    category: "Baby Clothing",
    price: 167.97
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f72"
    },
    name: "Baby Musical Instruments",
    category: "Health",
    price: 204.88
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f73"
    },
    name: "Baby Sports",
    category: "Electronics",
    price: 1158.69
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f74"
    },
    name: "Stationery",
    category: "Baby Pet Supplies",
    price: 759.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f75"
    },
    name: "Baby Toys",
    category: "Baby Musical Instruments",
    price: 1543.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f76"
    },
    name: "Sports",
    category: "Baby Strollers",
    price: 1814.51
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f77"
    },
    name: "Baby Luggage",
    category: "Baby Software",
    price: 1598.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f78"
    },
    name: "Baby Movies",
    category: "Baby Gear",
    price: 1102.05
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f79"
    },
    name: "Art",
    category: "Pet Supplies",
    price: 1568.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f7a"
    },
    name: "Jewelry",
    category: "Beauty",
    price: 1604.96
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f7b"
    },
    name: "School Supplies",
    category: "Baby Bags",
    price: 1912.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f7c"
    },
    name: "Baby Gear",
    category: "Technology",
    price: 128.68
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f7d"
    },
    name: "Baby Furniture",
    category: "Baby Watches",
    price: 789.53
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f7e"
    },
    name: "Baby Carriers",
    category: "Baby Health",
    price: 1693.35
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f7f"
    },
    name: "Baby Collectibles",
    category: "Baby Music",
    price: 430.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f80"
    },
    name: "Baby Health",
    category: "Baby Grocery",
    price: 1893.91
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f81"
    },
    name: "Baby Watches",
    category: "Baby Car Seats",
    price: 723.95
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f82"
    },
    name: "Baby Luggage",
    category: "Baby Crafts",
    price: 1089.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f83"
    },
    name: "Baby Art",
    category: "Baby Software",
    price: 1159.2
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f84"
    },
    name: "Furniture",
    category: "Baby Health",
    price: 1886.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f85"
    },
    name: "Baby Games",
    category: "Baby Music",
    price: 210.09
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f86"
    },
    name: "Fitness",
    category: "Crafts",
    price: 608.38
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f87"
    },
    name: "Baby Carriers",
    category: "Baby Industrial",
    price: 683.42
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f88"
    },
    name: "Baby Strollers",
    category: "Baby Strollers",
    price: 1621.01
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f89"
    },
    name: "Baby Games",
    category: "Baby Stationery",
    price: 1863.96
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f8a"
    },
    name: "Baby Grocery",
    category: "Baby Toys",
    price: 444.01
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f8b"
    },
    name: "Baby Furniture",
    category: "Baby Books",
    price: 379.27
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f8c"
    },
    name: "Baby Gear",
    category: "Watches",
    price: 917.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f8d"
    },
    name: "Baby Art",
    category: "Outdoor",
    price: 990.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f8e"
    },
    name: "Baby Furniture",
    category: "Watches",
    price: 102.35
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f8f"
    },
    name: "Clothing",
    category: "Stationery",
    price: 322.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f90"
    },
    name: "Baby Travel",
    category: "Crafts",
    price: 573.95
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f91"
    },
    name: "Tools",
    category: "Baby Tools",
    price: 116.61
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f92"
    },
    name: "Baby",
    category: "Outdoor",
    price: 1558.42
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f93"
    },
    name: "Baby Crafts",
    category: "Baby Musical Instruments",
    price: 1410.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f94"
    },
    name: "Baby Art",
    category: "Cameras",
    price: 1540.82
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f95"
    },
    name: "Furniture",
    category: "Baby Gear",
    price: 954.4
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f96"
    },
    name: "Baby Carriers",
    category: "Industrial",
    price: 139.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f97"
    },
    name: "Baby Gifts",
    category: "Baby Stationery",
    price: 463.08
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f98"
    },
    name: "Baby",
    category: "Accessories",
    price: 1165.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f99"
    },
    name: "Baby Party Supplies",
    category: "Baby Sports",
    price: 503.55
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f9a"
    },
    name: "Sports",
    category: "Fitness",
    price: 138.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f9b"
    },
    name: "Baby Appliances",
    category: "Baby Diapering",
    price: 850.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f9c"
    },
    name: "Electronics",
    category: "Outdoor",
    price: 1352.27
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f9d"
    },
    name: "Home Decor",
    category: "Toys",
    price: 443.81
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f9e"
    },
    name: "Bags",
    category: "Baby Games",
    price: 1522.35
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510f9f"
    },
    name: "Baby Stationery",
    category: "Baby Bedding",
    price: 1043.06
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fa0"
    },
    name: "Fitness",
    category: "Baby Hobbies",
    price: 431.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fa1"
    },
    name: "Baby Strollers",
    category: "Toys",
    price: 1179.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fa2"
    },
    name: "Watches",
    category: "Luggage",
    price: 1677.57
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fa3"
    },
    name: "Collectibles",
    category: "Watches",
    price: 1666.04
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fa4"
    },
    name: "Baby Toys",
    category: "Baby Carriers",
    price: 239.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fa5"
    },
    name: "Baby Electronics",
    category: "Hobbies",
    price: 1029.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fa6"
    },
    name: "Shoes",
    category: "Baby Diapering",
    price: 1588.73
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fa7"
    },
    name: "Games",
    category: "Fitness Equipment",
    price: 1029.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fa8"
    },
    name: "Baby Home Improvement",
    category: "Baby Gear",
    price: 355.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fa9"
    },
    name: "Furniture",
    category: "Baby Party Supplies",
    price: 908.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510faa"
    },
    name: "Gifts",
    category: "Home Improvement",
    price: 441.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fab"
    },
    name: "Baby Safety",
    category: "Baby Books",
    price: 1890.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fac"
    },
    name: "Bags",
    category: "Home Decor",
    price: 947.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fad"
    },
    name: "Baby Feeding",
    category: "Baby Gear",
    price: 1682.74
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fae"
    },
    name: "Baby Party Supplies",
    category: "Baby Gifts",
    price: 347.85
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510faf"
    },
    name: "Garden",
    category: "Baby Fitness Equipment",
    price: 965.55
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fb0"
    },
    name: "Baby Sports",
    category: "Food",
    price: 1530.09
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fb1"
    },
    name: "Baby Bath",
    category: "Baby Gifts",
    price: 345.86
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fb2"
    },
    name: "Baby Industrial",
    category: "Baby Books",
    price: 1998.01
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fb3"
    },
    name: "Baby Safety",
    category: "Appliances",
    price: 1208.92
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fb4"
    },
    name: "Baby Stationery",
    category: "Beauty",
    price: 1778.16
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fb5"
    },
    name: "Baby Collectibles",
    category: "Home Decor",
    price: 111.1
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fb6"
    },
    name: "Baby Electronics",
    category: "Health",
    price: 599.78
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fb7"
    },
    name: "Watches",
    category: "Furniture",
    price: 1320.53
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fb8"
    },
    name: "Office Supplies",
    category: "Baby Carriers",
    price: 1994.09
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fb9"
    },
    name: "Clothing",
    category: "Fitness Equipment",
    price: 1408.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fba"
    },
    name: "Electronics",
    category: "Home Improvement",
    price: 1071.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fbb"
    },
    name: "Toys",
    category: "Cameras",
    price: 1709.83
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fbc"
    },
    name: "Baby Gifts",
    category: "Hobbies",
    price: 692.7
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fbd"
    },
    name: "Movies",
    category: "Bags",
    price: 470.83
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fbe"
    },
    name: "Baby Movies",
    category: "Clothing",
    price: 1180.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fbf"
    },
    name: "Food",
    category: "Toys",
    price: 350.45
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fc0"
    },
    name: "Gifts",
    category: "Baby Safety",
    price: 10.27
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fc1"
    },
    name: "Electrical",
    category: "Grocery",
    price: 432.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fc2"
    },
    name: "Baby Industrial",
    category: "Baby Nursery",
    price: 412.76
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fc3"
    },
    name: "School Supplies",
    category: "Baby Home Improvement",
    price: 76.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fc4"
    },
    name: "Baby Gifts",
    category: "Baby Gifts",
    price: 440.25
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fc5"
    },
    name: "Baby Electronics",
    category: "Pet Supplies",
    price: 1780.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fc6"
    },
    name: "Gifts",
    category: "Garden",
    price: 1650.97
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fc7"
    },
    name: "Fitness Equipment",
    category: "Baby Furniture",
    price: 981.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fc8"
    },
    name: "Baby Crafts",
    category: "Automotive",
    price: 713.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fc9"
    },
    name: "Baby Art",
    category: "Shoes",
    price: 851.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fca"
    },
    name: "Garden",
    category: "Bags",
    price: 534.08
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fcb"
    },
    name: "Shoes",
    category: "Baby Crafts",
    price: 84.54
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fcc"
    },
    name: "Baby Furniture",
    category: "Baby Bath",
    price: 653.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fcd"
    },
    name: "Baby Gifts",
    category: "Furniture",
    price: 120.26
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fce"
    },
    name: "Baby Bedding",
    category: "Baby Bags",
    price: 1853.83
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fcf"
    },
    name: "Art",
    category: "Watches",
    price: 1421.76
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fd0"
    },
    name: "Baby Stationery",
    category: "Baby Outdoor",
    price: 971.19
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fd1"
    },
    name: "Baby Pet Supplies",
    category: "Baby Fitness Equipment",
    price: 1218.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fd2"
    },
    name: "Electronics",
    category: "Baby Watches",
    price: 1038.21
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fd3"
    },
    name: "Toys",
    category: "Watches",
    price: 1907.01
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fd4"
    },
    name: "Home Improvement",
    category: "Baby Crafts",
    price: 1481.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fd5"
    },
    name: "Baby Bags",
    category: "Baby Accessories",
    price: 1041.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fd6"
    },
    name: "Baby Grocery",
    category: "Baby Watches",
    price: 658.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fd7"
    },
    name: "Baby Feeding",
    category: "Baby Bath",
    price: 1829.78
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fd8"
    },
    name: "Music",
    category: "Baby Carriers",
    price: 153.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fd9"
    },
    name: "Baby Luggage",
    category: "Baby Accessories",
    price: 425.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fda"
    },
    name: "Baby Gifts",
    category: "Baby Toys",
    price: 342.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fdb"
    },
    name: "Baby Travel",
    category: "Health",
    price: 846.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fdc"
    },
    name: "Kitchen",
    category: "Travel",
    price: 331.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fdd"
    },
    name: "Baby Electrical",
    category: "Baby Feeding",
    price: 1052.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fde"
    },
    name: "Clothing",
    category: "School Supplies",
    price: 136.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fdf"
    },
    name: "Baby Accessories",
    category: "Music",
    price: 1946.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fe0"
    },
    name: "Baby Books",
    category: "Baby Grocery",
    price: 170.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fe1"
    },
    name: "Pets",
    category: "Collectibles",
    price: 1971.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fe2"
    },
    name: "Shoes",
    category: "Food",
    price: 1041.49
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fe3"
    },
    name: "Baby Accessories",
    category: "Baby Gifts",
    price: 710.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fe4"
    },
    name: "Collectibles",
    category: "Health",
    price: 1662.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fe5"
    },
    name: "Gifts",
    category: "Baby Accessories",
    price: 622.1
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fe6"
    },
    name: "Baby School Supplies",
    category: "Baby Clothing",
    price: 702.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fe7"
    },
    name: "Home Improvement",
    category: "Baby Nursery",
    price: 855.26
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fe8"
    },
    name: "Baby Music",
    category: "Health",
    price: 1095.27
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fe9"
    },
    name: "Furniture",
    category: "Baby Stationery",
    price: 1647.81
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fea"
    },
    name: "Toys",
    category: "Food",
    price: 1377.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510feb"
    },
    name: "Games",
    category: "Baby Software",
    price: 1066.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fec"
    },
    name: "Baby Games",
    category: "Baby Electronics",
    price: 1979.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fed"
    },
    name: "Industrial",
    category: "Toys",
    price: 580.97
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fee"
    },
    name: "Fitness Equipment",
    category: "Baby Clothing",
    price: 963.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fef"
    },
    name: "Food",
    category: "Baby Luggage",
    price: 1351.58
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ff0"
    },
    name: "Baby Tools",
    category: "Baby Travel",
    price: 177.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ff1"
    },
    name: "Beauty",
    category: "Baby Accessories",
    price: 1357.58
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ff2"
    },
    name: "Baby Electronics",
    category: "Outdoor",
    price: 377.04
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ff3"
    },
    name: "Baby Carriers",
    category: "Food",
    price: 1957.86
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ff4"
    },
    name: "Baby Crafts",
    category: "Party Supplies",
    price: 500.27
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ff5"
    },
    name: "Baby Tools",
    category: "Baby Watches",
    price: 1181.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ff6"
    },
    name: "Baby Art",
    category: "Baby Toys",
    price: 827.26
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ff7"
    },
    name: "Baby Movies",
    category: "Fitness Equipment",
    price: 8.44
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ff8"
    },
    name: "Baby Luggage",
    category: "Baby Cameras",
    price: 1386.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ff9"
    },
    name: "Baby Diapering",
    category: "Outdoor",
    price: 989.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ffa"
    },
    name: "Music",
    category: "Baby Electrical",
    price: 1211.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ffb"
    },
    name: "Baby School Supplies",
    category: "Baby Bedding",
    price: 1188.76
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ffc"
    },
    name: "Baby Gifts",
    category: "Baby Travel",
    price: 250.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ffd"
    },
    name: "Clothing",
    category: "Baby Luggage",
    price: 1355.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510ffe"
    },
    name: "Bags",
    category: "Shoes",
    price: 1142.97
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab510fff"
    },
    name: "Baby Safety",
    category: "Toys",
    price: 1906.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511000"
    },
    name: "Baby Tools",
    category: "Baby Toys",
    price: 478.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511001"
    },
    name: "Baby Games",
    category: "Fitness Equipment",
    price: 1324.59
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511002"
    },
    name: "Baby Bedding",
    category: "Food",
    price: 1499.69
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511003"
    },
    name: "Baby Feeding",
    category: "Baby Gifts",
    price: 969.42
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511004"
    },
    name: "Baby Crafts",
    category: "Baby Software",
    price: 734.1
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511005"
    },
    name: "Baby Crafts",
    category: "Baby Electrical",
    price: 1961.81
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511006"
    },
    name: "Gifts",
    category: "Baby Sports",
    price: 1702.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511007"
    },
    name: "Baby Gifts",
    category: "Baby Tools",
    price: 858.38
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511008"
    },
    name: "Baby Bags",
    category: "Baby Travel",
    price: 160.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511009"
    },
    name: "Baby Strollers",
    category: "Stationery",
    price: 1752.45
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51100a"
    },
    name: "Software",
    category: "Technology",
    price: 1737.9
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51100b"
    },
    name: "Baby Music",
    category: "Tools",
    price: 1096.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51100c"
    },
    name: "Outdoor",
    category: "Baby Bedding",
    price: 675.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51100d"
    },
    name: "Cameras",
    category: "Baby Sports",
    price: 817.07
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51100e"
    },
    name: "Beauty",
    category: "Art",
    price: 1652.55
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51100f"
    },
    name: "Toys",
    category: "School Supplies",
    price: 1897.97
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511010"
    },
    name: "Baby Gear",
    category: "Baby Sports",
    price: 478.22
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511011"
    },
    name: "Appliances",
    category: "Outdoor",
    price: 425.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511012"
    },
    name: "Baby Nursery",
    category: "Office Supplies",
    price: 353.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511013"
    },
    name: "Baby Games",
    category: "Automotive",
    price: 1154.04
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511014"
    },
    name: "Luggage",
    category: "Baby Sports",
    price: 262.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511015"
    },
    name: "Baby Pet Supplies",
    category: "Appliances",
    price: 1172.36
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511016"
    },
    name: "Electronics",
    category: "Baby Bags",
    price: 272.6
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511017"
    },
    name: "Luggage",
    category: "Baby Gifts",
    price: 1744.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511018"
    },
    name: "Baby Diapering",
    category: "Watches",
    price: 1067.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511019"
    },
    name: "Baby Accessories",
    category: "Baby Watches",
    price: 1297.1
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51101a"
    },
    name: "Musical Instruments",
    category: "Baby Sports",
    price: 1591.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51101b"
    },
    name: "Baby Gifts",
    category: "Books",
    price: 752.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51101c"
    },
    name: "Pet Supplies",
    category: "Baby Car Seats",
    price: 53.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51101d"
    },
    name: "Outdoor",
    category: "Furniture",
    price: 1146.94
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51101e"
    },
    name: "Baby Gifts",
    category: "Baby Accessories",
    price: 1348.78
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51101f"
    },
    name: "Movies",
    category: "Bags",
    price: 793.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511020"
    },
    name: "Software",
    category: "Baby Industrial",
    price: 1592.83
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511021"
    },
    name: "Musical Instruments",
    category: "Fitness Equipment",
    price: 30.86
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511022"
    },
    name: "Baby Fitness Equipment",
    category: "Baby Party Supplies",
    price: 898.6
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511023"
    },
    name: "Beauty",
    category: "Electrical",
    price: 1101.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511024"
    },
    name: "Baby Diapering",
    category: "Electrical",
    price: 1365
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511025"
    },
    name: "Baby Watches",
    category: "Art",
    price: 519.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511026"
    },
    name: "Baby Home Improvement",
    category: "Furniture",
    price: 1892.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511027"
    },
    name: "Automotive",
    category: "Baby Party Supplies",
    price: 1185.43
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511028"
    },
    name: "Party Supplies",
    category: "Musical Instruments",
    price: 1201.85
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511029"
    },
    name: "Sports",
    category: "Baby Electrical",
    price: 1241.16
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51102a"
    },
    name: "Jewelry",
    category: "Grocery",
    price: 1769.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51102b"
    },
    name: "Baby",
    category: "Baby Accessories",
    price: 48.45
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51102c"
    },
    name: "Automotive",
    category: "Home Improvement",
    price: 1447.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51102d"
    },
    name: "Cameras",
    category: "Baby Clothing",
    price: 411.07
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51102e"
    },
    name: "Baby Movies",
    category: "Music",
    price: 699.68
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51102f"
    },
    name: "Garden",
    category: "Travel",
    price: 150.9
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511030"
    },
    name: "Baby Furniture",
    category: "Gifts",
    price: 1918.25
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511031"
    },
    name: "Baby Crafts",
    category: "Watches",
    price: 587.68
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511032"
    },
    name: "Toys",
    category: "Industrial",
    price: 1830.98
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511033"
    },
    name: "Baby Toys",
    category: "Fitness Equipment",
    price: 737.22
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511034"
    },
    name: "Baby Accessories",
    category: "Crafts",
    price: 1414.3
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511035"
    },
    name: "Cameras",
    category: "Health",
    price: 152.83
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511036"
    },
    name: "Baby Accessories",
    category: "Automotive",
    price: 1616.47
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511037"
    },
    name: "Food",
    category: "Baby Luggage",
    price: 1355.53
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511038"
    },
    name: "Baby Bags",
    category: "Baby Nursery",
    price: 932.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511039"
    },
    name: "Baby Grocery",
    category: "Electronics",
    price: 1890.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51103a"
    },
    name: "Baby Sports",
    category: "Office Supplies",
    price: 1894.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51103b"
    },
    name: "Bags",
    category: "Gifts",
    price: 37.7
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51103c"
    },
    name: "Baby Accessories",
    category: "Home Improvement",
    price: 764.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51103d"
    },
    name: "Home Improvement",
    category: "Automotive",
    price: 1708.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51103e"
    },
    name: "Baby Furniture",
    category: "Electrical",
    price: 553.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51103f"
    },
    name: "Baby Gear",
    category: "Baby Movies",
    price: 1348.83
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511040"
    },
    name: "Baby Gear",
    category: "Baby Crafts",
    price: 1090.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511041"
    },
    name: "Pets",
    category: "Baby Gifts",
    price: 590.06
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511042"
    },
    name: "Baby Nursery",
    category: "Baby Electronics",
    price: 1518.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511043"
    },
    name: "Luggage",
    category: "Hobbies",
    price: 916.29
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511044"
    },
    name: "Baby Tools",
    category: "Baby Health",
    price: 895.6
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511045"
    },
    name: "Garden",
    category: "Baby Car Seats",
    price: 195.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511046"
    },
    name: "Baby Outdoor",
    category: "Musical Instruments",
    price: 539.61
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511047"
    },
    name: "Stationery",
    category: "Baby Electronics",
    price: 7.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511048"
    },
    name: "Baby Movies",
    category: "Baby Carriers",
    price: 1661.44
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511049"
    },
    name: "Baby Movies",
    category: "Baby",
    price: 1645.29
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51104a"
    },
    name: "Cameras",
    category: "Pets",
    price: 1054.19
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51104b"
    },
    name: "Baby Hobbies",
    category: "Baby Gifts",
    price: 1686.8
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51104c"
    },
    name: "Baby Bath",
    category: "Baby Art",
    price: 1137.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51104d"
    },
    name: "Party Supplies",
    category: "Baby Home Improvement",
    price: 1569.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51104e"
    },
    name: "Music",
    category: "Baby Safety",
    price: 361.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51104f"
    },
    name: "Baby Outdoor",
    category: "Baby Outdoor",
    price: 869.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511050"
    },
    name: "Baby Stationery",
    category: "Baby Crafts",
    price: 302.57
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511051"
    },
    name: "Baby Collectibles",
    category: "Baby Hobbies",
    price: 1080.11
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511052"
    },
    name: "Musical Instruments",
    category: "Baby Pet Supplies",
    price: 1315.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511053"
    },
    name: "Baby Books",
    category: "Baby Luggage",
    price: 871.73
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511054"
    },
    name: "Sports",
    category: "Grocery",
    price: 1715.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511055"
    },
    name: "Home Improvement",
    category: "Baby Electronics",
    price: 1317.48
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511056"
    },
    name: "Baby Gifts",
    category: "Software",
    price: 1511.6
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511057"
    },
    name: "School Supplies",
    category: "Baby School Supplies",
    price: 884.43
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511058"
    },
    name: "Kitchen",
    category: "Office Supplies",
    price: 54.98
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511059"
    },
    name: "Gifts",
    category: "Grocery",
    price: 231.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51105a"
    },
    name: "Crafts",
    category: "Party Supplies",
    price: 1991.76
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51105b"
    },
    name: "Baby Diapering",
    category: "Fitness Equipment",
    price: 1496.92
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51105c"
    },
    name: "Baby Safety",
    category: "Bags",
    price: 219
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51105d"
    },
    name: "Baby Party Supplies",
    category: "Musical Instruments",
    price: 90.07
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51105e"
    },
    name: "Crafts",
    category: "Baby Carriers",
    price: 191.88
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51105f"
    },
    name: "Furniture",
    category: "Baby Gear",
    price: 1368.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511060"
    },
    name: "Baby Grocery",
    category: "Fitness",
    price: 475.69
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511061"
    },
    name: "Baby Bedding",
    category: "Baby Fitness Equipment",
    price: 17.31
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511062"
    },
    name: "Baby Car Seats",
    category: "Luggage",
    price: 1498.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511063"
    },
    name: "Furniture",
    category: "Garden",
    price: 882.82
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511064"
    },
    name: "Baby School Supplies",
    category: "School Supplies",
    price: 1942.86
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511065"
    },
    name: "Baby Music",
    category: "Luggage",
    price: 1061.69
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511066"
    },
    name: "Gifts",
    category: "Bags",
    price: 1488.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511067"
    },
    name: "Electrical",
    category: "Food",
    price: 1578.26
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511068"
    },
    name: "Travel",
    category: "Fitness",
    price: 1116.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511069"
    },
    name: "Baby Outdoor",
    category: "Baby Party Supplies",
    price: 1952.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51106a"
    },
    name: "Baby Cameras",
    category: "Books",
    price: 1712.3
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51106b"
    },
    name: "Music",
    category: "Baby Safety",
    price: 1475.59
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51106c"
    },
    name: "Baby Gifts",
    category: "Books",
    price: 768.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51106d"
    },
    name: "Baby Furniture",
    category: "Baby Pet Supplies",
    price: 1687
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51106e"
    },
    name: "Musical Instruments",
    category: "Baby Hobbies",
    price: 710.83
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51106f"
    },
    name: "Musical Instruments",
    category: "Baby Accessories",
    price: 1643.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511070"
    },
    name: "Jewelry",
    category: "Baby Electrical",
    price: 587.57
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511071"
    },
    name: "Baby Musical Instruments",
    category: "Baby Travel",
    price: 618.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511072"
    },
    name: "Movies",
    category: "Jewelry",
    price: 541.59
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511073"
    },
    name: "Watches",
    category: "Bags",
    price: 575.99
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511074"
    },
    name: "Sports",
    category: "Art",
    price: 1306.08
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511075"
    },
    name: "Accessories",
    category: "Gifts",
    price: 1816.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511076"
    },
    name: "Baby Accessories",
    category: "Automotive",
    price: 907.78
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511077"
    },
    name: "Baby Diapering",
    category: "Food",
    price: 928.24
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511078"
    },
    name: "Baby",
    category: "Collectibles",
    price: 1967.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511079"
    },
    name: "Baby Hobbies",
    category: "Baby",
    price: 554.3
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51107a"
    },
    name: "Baby Crafts",
    category: "Beauty",
    price: 1037.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51107b"
    },
    name: "Collectibles",
    category: "Baby Gear",
    price: 693.31
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51107c"
    },
    name: "Furniture",
    category: "Baby Outdoor",
    price: 1445.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51107d"
    },
    name: "Books",
    category: "Baby Bedding",
    price: 90.19
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51107e"
    },
    name: "Music",
    category: "Baby Fitness Equipment",
    price: 529.98
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51107f"
    },
    name: "Art",
    category: "Music",
    price: 34.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511080"
    },
    name: "Baby Home Improvement",
    category: "Baby Crafts",
    price: 1243.8
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511081"
    },
    name: "Baby Tools",
    category: "Beauty",
    price: 1399.38
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511082"
    },
    name: "Baby Books",
    category: "Baby Feeding",
    price: 1020.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511083"
    },
    name: "Industrial",
    category: "Art",
    price: 1722.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511084"
    },
    name: "Collectibles",
    category: "Art",
    price: 436.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511085"
    },
    name: "Baby Sports",
    category: "Baby Cameras",
    price: 1465
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511086"
    },
    name: "Beauty",
    category: "Baby Movies",
    price: 1334.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511087"
    },
    name: "Art",
    category: "Baby Tools",
    price: 53.36
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511088"
    },
    name: "Gifts",
    category: "Beauty",
    price: 704.92
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511089"
    },
    name: "Electronics",
    category: "Baby Accessories",
    price: 749.18
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51108a"
    },
    name: "Baby Accessories",
    category: "Stationery",
    price: 1438.54
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51108b"
    },
    name: "Baby Furniture",
    category: "Health",
    price: 1859.7
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51108c"
    },
    name: "Food",
    category: "Baby Bedding",
    price: 702.36
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51108d"
    },
    name: "Baby Party Supplies",
    category: "Baby Musical Instruments",
    price: 316.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51108e"
    },
    name: "Hobbies",
    category: "Health",
    price: 989.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51108f"
    },
    name: "Baby Nursery",
    category: "Clothing",
    price: 1308.6
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511090"
    },
    name: "Baby Games",
    category: "Appliances",
    price: 73.04
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511091"
    },
    name: "Books",
    category: "Clothing",
    price: 775.24
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511092"
    },
    name: "Baby Books",
    category: "School Supplies",
    price: 864.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511093"
    },
    name: "Baby Gear",
    category: "Musical Instruments",
    price: 1749.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511094"
    },
    name: "Baby Gifts",
    category: "Hobbies",
    price: 1610.47
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511095"
    },
    name: "Baby Car Seats",
    category: "Stationery",
    price: 1902.42
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511096"
    },
    name: "Baby Hobbies",
    category: "Baby Appliances",
    price: 320.38
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511097"
    },
    name: "Toys",
    category: "Gifts",
    price: 1535.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511098"
    },
    name: "Baby Diapering",
    category: "Food",
    price: 1487.47
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511099"
    },
    name: "Bags",
    category: "Baby Gifts",
    price: 296.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51109a"
    },
    name: "Appliances",
    category: "Luggage",
    price: 198.35
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51109b"
    },
    name: "Baby Furniture",
    category: "Baby School Supplies",
    price: 1599.86
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51109c"
    },
    name: "Technology",
    category: "Baby Appliances",
    price: 1518.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51109d"
    },
    name: "Home Decor",
    category: "Food",
    price: 923.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51109e"
    },
    name: "Luggage",
    category: "Baby Stationery",
    price: 1807.95
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51109f"
    },
    name: "Baby Home Improvement",
    category: "Sports",
    price: 1694.58
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110a0"
    },
    name: "Home Improvement",
    category: "Baby Feeding",
    price: 1785.08
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110a1"
    },
    name: "Baby Movies",
    category: "Crafts",
    price: 1220.73
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110a2"
    },
    name: "Baby Gifts",
    category: "Baby School Supplies",
    price: 241.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110a3"
    },
    name: "Kitchen",
    category: "Toys",
    price: 1293.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110a4"
    },
    name: "Cameras",
    category: "Home Decor",
    price: 1977.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110a5"
    },
    name: "Baby Games",
    category: "Electronics",
    price: 529.43
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110a6"
    },
    name: "Home Decor",
    category: "Home Improvement",
    price: 1747.99
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110a7"
    },
    name: "Electronics",
    category: "Home Improvement",
    price: 985.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110a8"
    },
    name: "Baby Appliances",
    category: "Electronics",
    price: 633.43
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110a9"
    },
    name: "Clothing",
    category: "Baby Toys",
    price: 1203.35
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110aa"
    },
    name: "Baby Cameras",
    category: "Beauty",
    price: 1936.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ab"
    },
    name: "Home Decor",
    category: "Automotive",
    price: 1225.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ac"
    },
    name: "Baby Stationery",
    category: "Baby Tools",
    price: 1254.82
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ad"
    },
    name: "Watches",
    category: "Furniture",
    price: 1988.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ae"
    },
    name: "Baby Cameras",
    category: "Baby Furniture",
    price: 711.24
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110af"
    },
    name: "Gifts",
    category: "Pets",
    price: 1055.38
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110b0"
    },
    name: "Home Decor",
    category: "Baby Industrial",
    price: 944.05
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110b1"
    },
    name: "Accessories",
    category: "Baby School Supplies",
    price: 1522.61
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110b2"
    },
    name: "Food",
    category: "Baby Health",
    price: 66.29
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110b3"
    },
    name: "Baby Tools",
    category: "Tools",
    price: 1330.19
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110b4"
    },
    name: "Baby Travel",
    category: "Baby",
    price: 56.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110b5"
    },
    name: "Baby Music",
    category: "Baby Luggage",
    price: 282.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110b6"
    },
    name: "Baby School Supplies",
    category: "Health",
    price: 1098.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110b7"
    },
    name: "Games",
    category: "Cameras",
    price: 758.39
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110b8"
    },
    name: "Party Supplies",
    category: "Jewelry",
    price: 89.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110b9"
    },
    name: "Baby Art",
    category: "Baby Bags",
    price: 217.48
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ba"
    },
    name: "Baby Software",
    category: "Beauty",
    price: 121.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110bb"
    },
    name: "Baby Nursery",
    category: "Movies",
    price: 365.76
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110bc"
    },
    name: "Baby Electronics",
    category: "Baby Electrical",
    price: 1043.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110bd"
    },
    name: "Cameras",
    category: "Baby Fitness Equipment",
    price: 1151.48
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110be"
    },
    name: "Games",
    category: "Baby Car Seats",
    price: 307.7
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110bf"
    },
    name: "Baby Art",
    category: "Baby Gear",
    price: 1986.95
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110c0"
    },
    name: "Baby Stationery",
    category: "Baby Health",
    price: 117.22
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110c1"
    },
    name: "Music",
    category: "Luggage",
    price: 580.81
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110c2"
    },
    name: "Baby Software",
    category: "Baby Toys",
    price: 1849.09
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110c3"
    },
    name: "Baby Outdoor",
    category: "Baby Industrial",
    price: 1348.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110c4"
    },
    name: "Baby Watches",
    category: "Fitness",
    price: 585.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110c5"
    },
    name: "Luggage",
    category: "Baby Travel",
    price: 1484.91
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110c6"
    },
    name: "Baby Tools",
    category: "Baby Accessories",
    price: 171.44
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110c7"
    },
    name: "Baby Strollers",
    category: "Baby Movies",
    price: 597.95
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110c8"
    },
    name: "Baby Appliances",
    category: "Art",
    price: 1515.99
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110c9"
    },
    name: "Beauty",
    category: "Food",
    price: 1459.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ca"
    },
    name: "Baby Electronics",
    category: "Watches",
    price: 80.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110cb"
    },
    name: "Baby Car Seats",
    category: "Baby Art",
    price: 543.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110cc"
    },
    name: "Crafts",
    category: "Baby Electrical",
    price: 542.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110cd"
    },
    name: "Pets",
    category: "Music",
    price: 796.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ce"
    },
    name: "Baby Games",
    category: "Baby Movies",
    price: 1709.11
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110cf"
    },
    name: "Baby Home Improvement",
    category: "Baby Pet Supplies",
    price: 274.56
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110d0"
    },
    name: "Baby Feeding",
    category: "Baby Gear",
    price: 763.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110d1"
    },
    name: "Baby Art",
    category: "Clothing",
    price: 1879.04
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110d2"
    },
    name: "Furniture",
    category: "Baby Fitness Equipment",
    price: 32.11
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110d3"
    },
    name: "Automotive",
    category: "Baby Gear",
    price: 330.97
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110d4"
    },
    name: "Books",
    category: "Baby Gear",
    price: 1513.21
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110d5"
    },
    name: "Baby School Supplies",
    category: "Kitchen",
    price: 1546.47
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110d6"
    },
    name: "Baby Books",
    category: "Baby Health",
    price: 861.43
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110d7"
    },
    name: "Hobbies",
    category: "Baby School Supplies",
    price: 1380.39
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110d8"
    },
    name: "Technology",
    category: "Baby Musical Instruments",
    price: 244.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110d9"
    },
    name: "Pets",
    category: "Accessories",
    price: 628.74
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110da"
    },
    name: "Party Supplies",
    category: "Baby Gifts",
    price: 1101.68
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110db"
    },
    name: "Baby Accessories",
    category: "Health",
    price: 320.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110dc"
    },
    name: "Baby Pet Supplies",
    category: "Cameras",
    price: 1166.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110dd"
    },
    name: "Baby Crafts",
    category: "Books",
    price: 1493.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110de"
    },
    name: "Baby Bedding",
    category: "Grocery",
    price: 319.7
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110df"
    },
    name: "Sports",
    category: "Gifts",
    price: 1817.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110e0"
    },
    name: "Crafts",
    category: "Office Supplies",
    price: 1469.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110e1"
    },
    name: "Grocery",
    category: "Baby Feeding",
    price: 473.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110e2"
    },
    name: "Baby Toys",
    category: "Baby Stationery",
    price: 1655.58
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110e3"
    },
    name: "Technology",
    category: "School Supplies",
    price: 1227.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110e4"
    },
    name: "Baby Industrial",
    category: "Office Supplies",
    price: 740.57
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110e5"
    },
    name: "Cameras",
    category: "Baby Bags",
    price: 1577.99
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110e6"
    },
    name: "Health",
    category: "Baby Bags",
    price: 1234.55
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110e7"
    },
    name: "Baby Toys",
    category: "Electronics",
    price: 87.11
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110e8"
    },
    name: "Food",
    category: "Baby Electronics",
    price: 1297.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110e9"
    },
    name: "Baby Crafts",
    category: "Baby Movies",
    price: 123.07
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ea"
    },
    name: "Baby Games",
    category: "Health",
    price: 941.57
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110eb"
    },
    name: "Electrical",
    category: "Baby Diapering",
    price: 1922.61
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ec"
    },
    name: "Appliances",
    category: "Office Supplies",
    price: 1580.78
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ed"
    },
    name: "Sports",
    category: "Party Supplies",
    price: 1027.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ee"
    },
    name: "Baby Games",
    category: "Home Decor",
    price: 1586.68
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ef"
    },
    name: "Baby Gear",
    category: "Baby Accessories",
    price: 731.82
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110f0"
    },
    name: "Jewelry",
    category: "Stationery",
    price: 1462.61
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110f1"
    },
    name: "Furniture",
    category: "Baby Art",
    price: 160.07
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110f2"
    },
    name: "Furniture",
    category: "Watches",
    price: 272.39
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110f3"
    },
    name: "Party Supplies",
    category: "Kitchen",
    price: 239.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110f4"
    },
    name: "Beauty",
    category: "School Supplies",
    price: 803
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110f5"
    },
    name: "Baby Feeding",
    category: "Baby Feeding",
    price: 83.29
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110f6"
    },
    name: "Baby Watches",
    category: "Baby Outdoor",
    price: 301.29
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110f7"
    },
    name: "Collectibles",
    category: "Kitchen",
    price: 1015.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110f8"
    },
    name: "Movies",
    category: "Clothing",
    price: 848.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110f9"
    },
    name: "Health",
    category: "Collectibles",
    price: 1789.61
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110fa"
    },
    name: "Baby Art",
    category: "Stationery",
    price: 1427.17
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110fb"
    },
    name: "Fitness",
    category: "Baby Movies",
    price: 608.24
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110fc"
    },
    name: "Baby Luggage",
    category: "Health",
    price: 152.29
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110fd"
    },
    name: "Software",
    category: "Accessories",
    price: 1777.35
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110fe"
    },
    name: "Baby Stationery",
    category: "Baby Diapering",
    price: 659.59
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5110ff"
    },
    name: "Baby Collectibles",
    category: "Electrical",
    price: 85.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511100"
    },
    name: "Baby Musical Instruments",
    category: "Crafts",
    price: 1882.76
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511101"
    },
    name: "Furniture",
    category: "Electronics",
    price: 384.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511102"
    },
    name: "Baby Pet Supplies",
    category: "Electrical",
    price: 1866.29
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511103"
    },
    name: "Baby Fitness Equipment",
    category: "Collectibles",
    price: 1090.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511104"
    },
    name: "School Supplies",
    category: "Software",
    price: 402.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511105"
    },
    name: "Baby Furniture",
    category: "Furniture",
    price: 953.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511106"
    },
    name: "Books",
    category: "Baby Art",
    price: 483.18
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511107"
    },
    name: "Baby Home Improvement",
    category: "Pets",
    price: 1729.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511108"
    },
    name: "Bags",
    category: "Hobbies",
    price: 506.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511109"
    },
    name: "Crafts",
    category: "Baby Nursery",
    price: 650.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51110a"
    },
    name: "Baby Electrical",
    category: "Baby Appliances",
    price: 1407.21
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51110b"
    },
    name: "Baby Health",
    category: "Food",
    price: 53.88
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51110c"
    },
    name: "Kitchen",
    category: "Baby Hobbies",
    price: 824.48
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51110d"
    },
    name: "Grocery",
    category: "Baby Cameras",
    price: 1756.11
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51110e"
    },
    name: "Software",
    category: "Baby Collectibles",
    price: 254.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51110f"
    },
    name: "Home Decor",
    category: "Watches",
    price: 1195.16
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511110"
    },
    name: "School Supplies",
    category: "School Supplies",
    price: 456.2
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511111"
    },
    name: "Hobbies",
    category: "Baby Nursery",
    price: 60.08
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511112"
    },
    name: "Baby Electronics",
    category: "Health",
    price: 60.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511113"
    },
    name: "Baby Travel",
    category: "Grocery",
    price: 1016.8
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511114"
    },
    name: "Baby Tools",
    category: "Baby Art",
    price: 870.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511115"
    },
    name: "Baby Books",
    category: "Cameras",
    price: 213.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511116"
    },
    name: "Baby Travel",
    category: "Music",
    price: 1364.94
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511117"
    },
    name: "Party Supplies",
    category: "Baby Luggage",
    price: 73.06
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511118"
    },
    name: "Toys",
    category: "Baby Strollers",
    price: 1816.57
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511119"
    },
    name: "Baby Tools",
    category: "Games",
    price: 54.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51111a"
    },
    name: "Tools",
    category: "Baby Watches",
    price: 1463.36
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51111b"
    },
    name: "Clothing",
    category: "Baby Outdoor",
    price: 768.18
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51111c"
    },
    name: "Health",
    category: "Baby Nursery",
    price: 1752.16
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51111d"
    },
    name: "Cameras",
    category: "Baby Electronics",
    price: 817.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51111e"
    },
    name: "Baby Art",
    category: "Food",
    price: 30.45
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51111f"
    },
    name: "Baby Safety",
    category: "Books",
    price: 1077.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511120"
    },
    name: "Baby Electronics",
    category: "Travel",
    price: 107.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511121"
    },
    name: "Baby Movies",
    category: "Appliances",
    price: 116.61
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511122"
    },
    name: "Gifts",
    category: "Grocery",
    price: 406.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511123"
    },
    name: "Home Decor",
    category: "Baby Nursery",
    price: 109.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511124"
    },
    name: "Baby Pet Supplies",
    category: "Party Supplies",
    price: 477.2
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511125"
    },
    name: "Bags",
    category: "Outdoor",
    price: 435.48
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511126"
    },
    name: "Movies",
    category: "Kitchen",
    price: 949.11
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511127"
    },
    name: "Baby Health",
    category: "Baby Hobbies",
    price: 68.95
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511128"
    },
    name: "Tools",
    category: "Baby Collectibles",
    price: 432.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511129"
    },
    name: "Baby Toys",
    category: "Baby Gear",
    price: 12.47
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51112a"
    },
    name: "Beauty",
    category: "Baby Health",
    price: 1831.01
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51112b"
    },
    name: "Baby Gifts",
    category: "Baby Tools",
    price: 1761.38
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51112c"
    },
    name: "Crafts",
    category: "Luggage",
    price: 1648.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51112d"
    },
    name: "Clothing",
    category: "Office Supplies",
    price: 585.8
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51112e"
    },
    name: "Baby Accessories",
    category: "Movies",
    price: 896.94
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51112f"
    },
    name: "Watches",
    category: "Luggage",
    price: 674.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511130"
    },
    name: "Baby Pet Supplies",
    category: "Baby Nursery",
    price: 487.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511131"
    },
    name: "Baby Hobbies",
    category: "Baby Fitness Equipment",
    price: 777.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511132"
    },
    name: "Baby Gear",
    category: "Bags",
    price: 848.09
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511133"
    },
    name: "Grocery",
    category: "Collectibles",
    price: 566.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511134"
    },
    name: "Baby Bags",
    category: "Beauty",
    price: 966.26
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511135"
    },
    name: "Appliances",
    category: "Baby Appliances",
    price: 1900.73
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511136"
    },
    name: "Baby Grocery",
    category: "Baby Collectibles",
    price: 1828.11
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511137"
    },
    name: "Stationery",
    category: "Pets",
    price: 1016.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511138"
    },
    name: "Kitchen",
    category: "Books",
    price: 693.16
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511139"
    },
    name: "Baby Furniture",
    category: "Baby Safety",
    price: 518.83
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51113a"
    },
    name: "Electrical",
    category: "Baby Accessories",
    price: 790.86
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51113b"
    },
    name: "Furniture",
    category: "Baby Electrical",
    price: 1072.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51113c"
    },
    name: "Baby Strollers",
    category: "Art",
    price: 928.73
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51113d"
    },
    name: "Baby Gifts",
    category: "School Supplies",
    price: 1185.08
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51113e"
    },
    name: "Furniture",
    category: "Technology",
    price: 1982.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51113f"
    },
    name: "Food",
    category: "Baby Grocery",
    price: 748.74
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511140"
    },
    name: "Technology",
    category: "Fitness Equipment",
    price: 1689.59
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511141"
    },
    name: "Grocery",
    category: "Baby Cameras",
    price: 1863.3
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511142"
    },
    name: "Cameras",
    category: "Baby Bedding",
    price: 730.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511143"
    },
    name: "Home Improvement",
    category: "Baby Books",
    price: 1021.2
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511144"
    },
    name: "Baby Stationery",
    category: "Baby Diapering",
    price: 1559.76
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511145"
    },
    name: "Baby Grocery",
    category: "Baby Bedding",
    price: 1790.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511146"
    },
    name: "Baby Watches",
    category: "Baby Tools",
    price: 1926.22
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511147"
    },
    name: "Baby Car Seats",
    category: "Baby Music",
    price: 915.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511148"
    },
    name: "Technology",
    category: "Electrical",
    price: 1201.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511149"
    },
    name: "Travel",
    category: "Baby Luggage",
    price: 1249.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51114a"
    },
    name: "Baby Bedding",
    category: "Electronics",
    price: 869.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51114b"
    },
    name: "Baby Strollers",
    category: "Home Improvement",
    price: 1744.81
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51114c"
    },
    name: "Movies",
    category: "Baby Gifts",
    price: 1160.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51114d"
    },
    name: "Pet Supplies",
    category: "Baby Books",
    price: 218.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51114e"
    },
    name: "Baby Strollers",
    category: "Baby Collectibles",
    price: 162.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51114f"
    },
    name: "Baby Hobbies",
    category: "Baby Tools",
    price: 1773.04
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511150"
    },
    name: "Baby Grocery",
    category: "Baby Musical Instruments",
    price: 1156.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511151"
    },
    name: "Baby Bath",
    category: "Fitness Equipment",
    price: 506.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511152"
    },
    name: "Jewelry",
    category: "Baby Travel",
    price: 1533.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511153"
    },
    name: "Baby Accessories",
    category: "Baby Crafts",
    price: 1006.6
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511154"
    },
    name: "Baby Bags",
    category: "Kitchen",
    price: 1037.48
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511155"
    },
    name: "Pet Supplies",
    category: "Party Supplies",
    price: 1702.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511156"
    },
    name: "Baby Clothing",
    category: "Luggage",
    price: 1124.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511157"
    },
    name: "Office Supplies",
    category: "Crafts",
    price: 1405.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511158"
    },
    name: "Baby Luggage",
    category: "Baby Hobbies",
    price: 1307.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511159"
    },
    name: "Health",
    category: "Toys",
    price: 1038.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51115a"
    },
    name: "Toys",
    category: "Luggage",
    price: 288.68
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51115b"
    },
    name: "Art",
    category: "Fitness Equipment",
    price: 1341.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51115c"
    },
    name: "Baby Outdoor",
    category: "Baby Safety",
    price: 1561.7
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51115d"
    },
    name: "Software",
    category: "Industrial",
    price: 1540.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51115e"
    },
    name: "Baby Industrial",
    category: "Baby Books",
    price: 1817.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51115f"
    },
    name: "Baby Gifts",
    category: "Baby Art",
    price: 1337.17
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511160"
    },
    name: "Outdoor",
    category: "Baby Grocery",
    price: 1787.39
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511161"
    },
    name: "Fitness Equipment",
    category: "Baby Gifts",
    price: 344.92
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511162"
    },
    name: "Home Improvement",
    category: "Fitness Equipment",
    price: 1724.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511163"
    },
    name: "Baby Fitness Equipment",
    category: "Baby Home Improvement",
    price: 821.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511164"
    },
    name: "Baby Luggage",
    category: "Technology",
    price: 771.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511165"
    },
    name: "Sports",
    category: "Baby Music",
    price: 889.7
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511166"
    },
    name: "Baby Software",
    category: "Music",
    price: 1611.59
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511167"
    },
    name: "Appliances",
    category: "Musical Instruments",
    price: 1169
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511168"
    },
    name: "Baby Music",
    category: "Toys",
    price: 1296.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511169"
    },
    name: "Baby Movies",
    category: "Toys",
    price: 730.05
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51116a"
    },
    name: "Food",
    category: "Baby Hobbies",
    price: 1157.83
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51116b"
    },
    name: "Grocery",
    category: "Electrical",
    price: 82.25
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51116c"
    },
    name: "Baby Books",
    category: "Fitness Equipment",
    price: 1111.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51116d"
    },
    name: "Electrical",
    category: "Baby Appliances",
    price: 1455.1
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51116e"
    },
    name: "Travel",
    category: "Baby Bedding",
    price: 1570.04
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51116f"
    },
    name: "Electronics",
    category: "Clothing",
    price: 1543.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511170"
    },
    name: "Baby Outdoor",
    category: "Baby Books",
    price: 65.47
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511171"
    },
    name: "Baby Books",
    category: "Electrical",
    price: 1513.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511172"
    },
    name: "Baby Movies",
    category: "Baby Art",
    price: 678.04
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511173"
    },
    name: "Books",
    category: "Baby Strollers",
    price: 1389.6
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511174"
    },
    name: "Garden",
    category: "Baby Gear",
    price: 1712.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511175"
    },
    name: "Baby Party Supplies",
    category: "Baby Toys",
    price: 294.58
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511176"
    },
    name: "Musical Instruments",
    category: "Books",
    price: 1094.6
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511177"
    },
    name: "Baby Gifts",
    category: "Games",
    price: 1203.88
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511178"
    },
    name: "Appliances",
    category: "Toys",
    price: 255.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511179"
    },
    name: "Baby Safety",
    category: "Movies",
    price: 1950.05
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51117a"
    },
    name: "Baby Gifts",
    category: "Art",
    price: 311.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51117b"
    },
    name: "Baby Toys",
    category: "Baby Tools",
    price: 279.82
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51117c"
    },
    name: "Office Supplies",
    category: "Garden",
    price: 877.97
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51117d"
    },
    name: "Baby Tools",
    category: "Baby Electrical",
    price: 566.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51117e"
    },
    name: "Baby Hobbies",
    category: "Baby Books",
    price: 1145.47
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51117f"
    },
    name: "Gifts",
    category: "Baby Gear",
    price: 1410.27
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511180"
    },
    name: "Baby Home Improvement",
    category: "Baby Bedding",
    price: 81.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511181"
    },
    name: "Baby Grocery",
    category: "Baby Home Improvement",
    price: 43.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511182"
    },
    name: "Gifts",
    category: "Electronics",
    price: 755.05
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511183"
    },
    name: "Sports",
    category: "Technology",
    price: 1640.97
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511184"
    },
    name: "Baby Hobbies",
    category: "Hobbies",
    price: 430.57
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511185"
    },
    name: "Baby Tools",
    category: "Pet Supplies",
    price: 983.56
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511186"
    },
    name: "Baby Accessories",
    category: "Baby Musical Instruments",
    price: 891.26
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511187"
    },
    name: "Beauty",
    category: "Baby Accessories",
    price: 1609.54
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511188"
    },
    name: "Baby Feeding",
    category: "Fitness Equipment",
    price: 315.39
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511189"
    },
    name: "Health",
    category: "Baby Bedding",
    price: 1894.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51118a"
    },
    name: "Bags",
    category: "Party Supplies",
    price: 1824.18
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51118b"
    },
    name: "Crafts",
    category: "Baby Party Supplies",
    price: 1890.2
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51118c"
    },
    name: "Baby Stationery",
    category: "Baby Appliances",
    price: 505.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51118d"
    },
    name: "Baby Industrial",
    category: "Baby Luggage",
    price: 1640.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51118e"
    },
    name: "Software",
    category: "Baby Safety",
    price: 982.28
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51118f"
    },
    name: "Baby Musical Instruments",
    category: "Appliances",
    price: 327.4
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511190"
    },
    name: "Baby Gear",
    category: "Baby Furniture",
    price: 144.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511191"
    },
    name: "Baby Tools",
    category: "Baby Gear",
    price: 799.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511192"
    },
    name: "Baby Luggage",
    category: "Pet Supplies",
    price: 1925.45
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511193"
    },
    name: "Electrical",
    category: "Baby Car Seats",
    price: 1416.36
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511194"
    },
    name: "Shoes",
    category: "Baby Gear",
    price: 1004.39
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511195"
    },
    name: "Sports",
    category: "Outdoor",
    price: 1702.57
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511196"
    },
    name: "Baby Safety",
    category: "Electrical",
    price: 1628.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511197"
    },
    name: "Baby Industrial",
    category: "Baby Gear",
    price: 1217.06
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511198"
    },
    name: "Electrical",
    category: "Baby Gear",
    price: 1377.55
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511199"
    },
    name: "Baby Pet Supplies",
    category: "Baby Art",
    price: 760.85
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51119a"
    },
    name: "Baby Bags",
    category: "Outdoor",
    price: 1149.3
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51119b"
    },
    name: "Baby Sports",
    category: "Baby Feeding",
    price: 54.24
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51119c"
    },
    name: "Baby Diapering",
    category: "Baby Musical Instruments",
    price: 657.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51119d"
    },
    name: "Baby Nursery",
    category: "Baby Gear",
    price: 890.18
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51119e"
    },
    name: "Baby Fitness Equipment",
    category: "Outdoor",
    price: 1671.22
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51119f"
    },
    name: "Baby Electrical",
    category: "Baby Nursery",
    price: 735.13
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111a0"
    },
    name: "Kitchen",
    category: "Baby Gear",
    price: 892.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111a1"
    },
    name: "Automotive",
    category: "Baby Appliances",
    price: 1520.47
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111a2"
    },
    name: "Baby Furniture",
    category: "Baby Collectibles",
    price: 1867.51
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111a3"
    },
    name: "Fitness",
    category: "Appliances",
    price: 1814.09
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111a4"
    },
    name: "Baby Feeding",
    category: "Baby Bedding",
    price: 1077.01
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111a5"
    },
    name: "Home Decor",
    category: "Baby Music",
    price: 50.81
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111a6"
    },
    name: "Baby Safety",
    category: "Baby Electronics",
    price: 1921.4
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111a7"
    },
    name: "Baby Clothing",
    category: "Home Improvement",
    price: 867.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111a8"
    },
    name: "Baby Outdoor",
    category: "Baby Feeding",
    price: 982.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111a9"
    },
    name: "Baby Gifts",
    category: "Kitchen",
    price: 1479.1
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111aa"
    },
    name: "School Supplies",
    category: "Cameras",
    price: 1473.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ab"
    },
    name: "Games",
    category: "Collectibles",
    price: 854.88
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ac"
    },
    name: "Baby Movies",
    category: "Electrical",
    price: 1118.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ad"
    },
    name: "Baby Tools",
    category: "Baby Clothing",
    price: 179.43
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ae"
    },
    name: "Office Supplies",
    category: "Baby Electrical",
    price: 1937.36
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111af"
    },
    name: "Baby Art",
    category: "Baby Electrical",
    price: 1397.22
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111b0"
    },
    name: "Sports",
    category: "Baby Cameras",
    price: 131.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111b1"
    },
    name: "Travel",
    category: "Accessories",
    price: 1403.59
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111b2"
    },
    name: "Baby Gifts",
    category: "Musical Instruments",
    price: 1006.73
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111b3"
    },
    name: "Watches",
    category: "Beauty",
    price: 833.96
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111b4"
    },
    name: "Watches",
    category: "Stationery",
    price: 612.56
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111b5"
    },
    name: "Baby Musical Instruments",
    category: "Baby Software",
    price: 607.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111b6"
    },
    name: "Baby Car Seats",
    category: "Musical Instruments",
    price: 1198.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111b7"
    },
    name: "Kitchen",
    category: "Baby Clothing",
    price: 1723.54
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111b8"
    },
    name: "Tools",
    category: "Baby School Supplies",
    price: 1150.74
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111b9"
    },
    name: "Office Supplies",
    category: "Baby Party Supplies",
    price: 680.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ba"
    },
    name: "Baby Musical Instruments",
    category: "Baby Toys",
    price: 900.27
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111bb"
    },
    name: "Home Improvement",
    category: "Baby Bedding",
    price: 1387.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111bc"
    },
    name: "Stationery",
    category: "Luggage",
    price: 187.31
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111bd"
    },
    name: "Office Supplies",
    category: "Baby Collectibles",
    price: 594.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111be"
    },
    name: "Baby Pet Supplies",
    category: "Gifts",
    price: 1586.96
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111bf"
    },
    name: "Appliances",
    category: "Baby Car Seats",
    price: 1981.92
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111c0"
    },
    name: "Industrial",
    category: "Electronics",
    price: 863.94
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111c1"
    },
    name: "Health",
    category: "Shoes",
    price: 1119.22
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111c2"
    },
    name: "Baby Art",
    category: "Baby Collectibles",
    price: 685.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111c3"
    },
    name: "Beauty",
    category: "Travel",
    price: 455.13
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111c4"
    },
    name: "Baby Crafts",
    category: "Baby Accessories",
    price: 601.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111c5"
    },
    name: "Movies",
    category: "Travel",
    price: 360.42
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111c6"
    },
    name: "Home Improvement",
    category: "Sports",
    price: 1686.36
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111c7"
    },
    name: "Baby",
    category: "Baby Carriers",
    price: 881.28
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111c8"
    },
    name: "Games",
    category: "Baby Appliances",
    price: 1927.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111c9"
    },
    name: "Baby Sports",
    category: "Movies",
    price: 1848.48
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ca"
    },
    name: "Technology",
    category: "Health",
    price: 1058.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111cb"
    },
    name: "Automotive",
    category: "Baby Crafts",
    price: 410.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111cc"
    },
    name: "Music",
    category: "Software",
    price: 1067.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111cd"
    },
    name: "Electronics",
    category: "Baby Strollers",
    price: 1098.37
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ce"
    },
    name: "Fitness Equipment",
    category: "Baby Appliances",
    price: 1362.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111cf"
    },
    name: "Baby Gifts",
    category: "Cameras",
    price: 916.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111d0"
    },
    name: "Baby Art",
    category: "Outdoor",
    price: 507.21
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111d1"
    },
    name: "Baby Music",
    category: "Baby Software",
    price: 1366.6
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111d2"
    },
    name: "Clothing",
    category: "Baby Crafts",
    price: 275.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111d3"
    },
    name: "Baby Feeding",
    category: "Health",
    price: 1615.54
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111d4"
    },
    name: "Baby Luggage",
    category: "Musical Instruments",
    price: 62.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111d5"
    },
    name: "Outdoor",
    category: "Baby Software",
    price: 1082.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111d6"
    },
    name: "Stationery",
    category: "Baby Nursery",
    price: 601.39
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111d7"
    },
    name: "Baby Movies",
    category: "Automotive",
    price: 12.9
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111d8"
    },
    name: "Furniture",
    category: "Sports",
    price: 1593.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111d9"
    },
    name: "Baby Collectibles",
    category: "Baby Bedding",
    price: 725.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111da"
    },
    name: "Baby Art",
    category: "Shoes",
    price: 29.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111db"
    },
    name: "Toys",
    category: "Baby Accessories",
    price: 693.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111dc"
    },
    name: "Baby Nursery",
    category: "Baby Nursery",
    price: 811.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111dd"
    },
    name: "Technology",
    category: "Shoes",
    price: 789.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111de"
    },
    name: "Baby Outdoor",
    category: "Baby Watches",
    price: 12.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111df"
    },
    name: "Baby Gifts",
    category: "Baby Software",
    price: 1300.13
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111e0"
    },
    name: "Baby Cameras",
    category: "Baby Electrical",
    price: 165.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111e1"
    },
    name: "Crafts",
    category: "Baby Travel",
    price: 1170.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111e2"
    },
    name: "Baby Industrial",
    category: "Home Improvement",
    price: 1268.81
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111e3"
    },
    name: "School Supplies",
    category: "Baby Crafts",
    price: 1636.44
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111e4"
    },
    name: "Baby Gifts",
    category: "Baby Watches",
    price: 1573.16
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111e5"
    },
    name: "Appliances",
    category: "Kitchen",
    price: 639.69
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111e6"
    },
    name: "Stationery",
    category: "Toys",
    price: 1598.74
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111e7"
    },
    name: "Baby",
    category: "Baby Gear",
    price: 532.08
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111e8"
    },
    name: "Baby Tools",
    category: "Stationery",
    price: 628.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111e9"
    },
    name: "Baby Accessories",
    category: "Health",
    price: 133.48
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ea"
    },
    name: "Baby Games",
    category: "Baby Cameras",
    price: 1011.43
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111eb"
    },
    name: "Fitness",
    category: "Baby Party Supplies",
    price: 1217.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ec"
    },
    name: "Music",
    category: "Software",
    price: 960.47
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ed"
    },
    name: "Baby Appliances",
    category: "Home Decor",
    price: 1848.69
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ee"
    },
    name: "Sports",
    category: "Luggage",
    price: 1442.13
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ef"
    },
    name: "Clothing",
    category: "School Supplies",
    price: 1857.61
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111f0"
    },
    name: "Baby Accessories",
    category: "Music",
    price: 1717.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111f1"
    },
    name: "Baby Party Supplies",
    category: "Watches",
    price: 869.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111f2"
    },
    name: "Baby Accessories",
    category: "Home Improvement",
    price: 181.73
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111f3"
    },
    name: "Kitchen",
    category: "Pets",
    price: 1461.74
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111f4"
    },
    name: "Baby Bath",
    category: "Automotive",
    price: 1858.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111f5"
    },
    name: "Baby Pet Supplies",
    category: "Musical Instruments",
    price: 1085.85
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111f6"
    },
    name: "Baby Collectibles",
    category: "Baby Industrial",
    price: 388.82
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111f7"
    },
    name: "Baby Fitness Equipment",
    category: "Shoes",
    price: 781.81
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111f8"
    },
    name: "Baby Art",
    category: "Fitness",
    price: 1898.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111f9"
    },
    name: "Grocery",
    category: "Automotive",
    price: 686.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111fa"
    },
    name: "Baby Car Seats",
    category: "Baby Collectibles",
    price: 1802.78
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111fb"
    },
    name: "Baby Cameras",
    category: "Baby Books",
    price: 644.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111fc"
    },
    name: "Baby Furniture",
    category: "Baby Furniture",
    price: 19.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111fd"
    },
    name: "Baby Books",
    category: "Baby School Supplies",
    price: 440.58
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111fe"
    },
    name: "Art",
    category: "Baby Home Improvement",
    price: 959.9
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5111ff"
    },
    name: "Music",
    category: "Baby Musical Instruments",
    price: 296.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511200"
    },
    name: "Software",
    category: "Home Decor",
    price: 926.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511201"
    },
    name: "Baby Nursery",
    category: "Pets",
    price: 451.8
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511202"
    },
    name: "Baby Stationery",
    category: "Baby Gifts",
    price: 950.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511203"
    },
    name: "Baby Stationery",
    category: "Tools",
    price: 1305.45
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511204"
    },
    name: "Food",
    category: "Travel",
    price: 69.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511205"
    },
    name: "Baby Sports",
    category: "Outdoor",
    price: 1495.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511206"
    },
    name: "Shoes",
    category: "Baby Outdoor",
    price: 770.95
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511207"
    },
    name: "Baby Carriers",
    category: "Baby Car Seats",
    price: 559.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511208"
    },
    name: "Garden",
    category: "Baby Movies",
    price: 323.86
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511209"
    },
    name: "Pets",
    category: "Baby Gear",
    price: 757.54
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51120a"
    },
    name: "Automotive",
    category: "Baby Watches",
    price: 949.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51120b"
    },
    name: "Baby Art",
    category: "Baby Pet Supplies",
    price: 743.25
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51120c"
    },
    name: "Baby Hobbies",
    category: "Furniture",
    price: 975.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51120d"
    },
    name: "Baby Fitness Equipment",
    category: "Industrial",
    price: 944.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51120e"
    },
    name: "Baby Books",
    category: "Baby Safety",
    price: 308.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51120f"
    },
    name: "Software",
    category: "Industrial",
    price: 444.98
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511210"
    },
    name: "Baby",
    category: "Baby Health",
    price: 1765.4
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511211"
    },
    name: "Baby Travel",
    category: "Kitchen",
    price: 1919.74
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511212"
    },
    name: "Baby Luggage",
    category: "Baby Travel",
    price: 1056.26
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511213"
    },
    name: "Kitchen",
    category: "Baby Stationery",
    price: 1668.4
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511214"
    },
    name: "Food",
    category: "Baby Luggage",
    price: 678.27
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511215"
    },
    name: "Gifts",
    category: "Toys",
    price: 991.21
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511216"
    },
    name: "Baby Software",
    category: "Party Supplies",
    price: 5.65
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511217"
    },
    name: "Baby Watches",
    category: "Baby Books",
    price: 188.01
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511218"
    },
    name: "Home Improvement",
    category: "Baby Home Improvement",
    price: 1654.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511219"
    },
    name: "Movies",
    category: "Home Decor",
    price: 1452.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51121a"
    },
    name: "Baby Industrial",
    category: "Tools",
    price: 1300.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51121b"
    },
    name: "Technology",
    category: "Baby Safety",
    price: 1780.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51121c"
    },
    name: "Travel",
    category: "Baby Sports",
    price: 1856.19
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51121d"
    },
    name: "Collectibles",
    category: "Baby Gear",
    price: 735.1
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51121e"
    },
    name: "Baby Gifts",
    category: "Software",
    price: 858.1
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51121f"
    },
    name: "Stationery",
    category: "Baby Grocery",
    price: 1210.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511220"
    },
    name: "Baby Hobbies",
    category: "Travel",
    price: 1665.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511221"
    },
    name: "Baby Hobbies",
    category: "Baby Clothing",
    price: 974.3
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511222"
    },
    name: "Electrical",
    category: "Baby Travel",
    price: 1619.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511223"
    },
    name: "Home Decor",
    category: "Fitness Equipment",
    price: 1567.51
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511224"
    },
    name: "Baby Musical Instruments",
    category: "Office Supplies",
    price: 1134.08
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511225"
    },
    name: "Baby Cameras",
    category: "Baby Home Improvement",
    price: 677.08
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511226"
    },
    name: "Baby Carriers",
    category: "Industrial",
    price: 1528.21
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511227"
    },
    name: "Baby Toys",
    category: "Bags",
    price: 1074.58
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511228"
    },
    name: "Tools",
    category: "Baby Art",
    price: 1326.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511229"
    },
    name: "Baby Pet Supplies",
    category: "Bags",
    price: 321.11
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51122a"
    },
    name: "Furniture",
    category: "Hobbies",
    price: 1687.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51122b"
    },
    name: "Baby Sports",
    category: "Baby Outdoor",
    price: 470.99
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51122c"
    },
    name: "Health",
    category: "Office Supplies",
    price: 1326.07
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51122d"
    },
    name: "Industrial",
    category: "Baby Furniture",
    price: 405.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51122e"
    },
    name: "Games",
    category: "Party Supplies",
    price: 526.86
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51122f"
    },
    name: "Baby Feeding",
    category: "Baby Gifts",
    price: 824.38
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511230"
    },
    name: "Clothing",
    category: "Baby Bags",
    price: 149.47
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511231"
    },
    name: "Cameras",
    category: "Baby Bedding",
    price: 170.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511232"
    },
    name: "Food",
    category: "Baby Party Supplies",
    price: 1586.27
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511233"
    },
    name: "Grocery",
    category: "Clothing",
    price: 754.56
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511234"
    },
    name: "Stationery",
    category: "Baby Party Supplies",
    price: 497.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511235"
    },
    name: "Baby Fitness Equipment",
    category: "Home Improvement",
    price: 364.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511236"
    },
    name: "Baby Software",
    category: "Baby Accessories",
    price: 894.36
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511237"
    },
    name: "Baby Accessories",
    category: "Baby Toys",
    price: 1457.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511238"
    },
    name: "Baby Bedding",
    category: "Home Improvement",
    price: 1602.96
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511239"
    },
    name: "Bags",
    category: "Electronics",
    price: 938.73
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51123a"
    },
    name: "Beauty",
    category: "Baby Software",
    price: 794.31
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51123b"
    },
    name: "Stationery",
    category: "Books",
    price: 1159.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51123c"
    },
    name: "Baby Clothing",
    category: "Baby Electrical",
    price: 1174.01
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51123d"
    },
    name: "Baby Bath",
    category: "Baby Cameras",
    price: 955.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51123e"
    },
    name: "Automotive",
    category: "Crafts",
    price: 1086.37
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51123f"
    },
    name: "Watches",
    category: "Travel",
    price: 1852.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511240"
    },
    name: "Baby Strollers",
    category: "Baby Party Supplies",
    price: 547.3
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511241"
    },
    name: "Technology",
    category: "Outdoor",
    price: 365.74
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511242"
    },
    name: "Baby Collectibles",
    category: "Games",
    price: 1265.28
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511243"
    },
    name: "Baby Diapering",
    category: "Baby Movies",
    price: 1597.58
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511244"
    },
    name: "Party Supplies",
    category: "Baby Clothing",
    price: 1844.31
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511245"
    },
    name: "Baby Software",
    category: "Baby Movies",
    price: 1191.69
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511246"
    },
    name: "Baby Musical Instruments",
    category: "Baby Games",
    price: 201.51
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511247"
    },
    name: "Cameras",
    category: "Stationery",
    price: 559.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511248"
    },
    name: "Automotive",
    category: "Games",
    price: 476.21
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511249"
    },
    name: "Kitchen",
    category: "Baby Software",
    price: 1181.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51124a"
    },
    name: "Industrial",
    category: "Software",
    price: 1404.89
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51124b"
    },
    name: "Baby Travel",
    category: "Baby Strollers",
    price: 240.55
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51124c"
    },
    name: "Baby Gear",
    category: "Office Supplies",
    price: 1078.28
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51124d"
    },
    name: "School Supplies",
    category: "Baby Cameras",
    price: 395.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51124e"
    },
    name: "Toys",
    category: "Baby Musical Instruments",
    price: 1453.67
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51124f"
    },
    name: "Technology",
    category: "Grocery",
    price: 1857.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511250"
    },
    name: "Musical Instruments",
    category: "Baby",
    price: 310.85
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511251"
    },
    name: "Baby Art",
    category: "Games",
    price: 407.51
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511252"
    },
    name: "Baby Books",
    category: "Baby Accessories",
    price: 18.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511253"
    },
    name: "Games",
    category: "Kitchen",
    price: 1646.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511254"
    },
    name: "Software",
    category: "Baby Books",
    price: 626.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511255"
    },
    name: "Baby Musical Instruments",
    category: "Travel",
    price: 139.81
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511256"
    },
    name: "Baby Accessories",
    category: "Baby Music",
    price: 54.26
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511257"
    },
    name: "Baby Carriers",
    category: "Home Decor",
    price: 1717.18
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511258"
    },
    name: "Gifts",
    category: "Pets",
    price: 1133.95
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511259"
    },
    name: "Art",
    category: "Baby Gifts",
    price: 1136.92
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51125a"
    },
    name: "Baby Travel",
    category: "Baby Books",
    price: 1606.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51125b"
    },
    name: "Automotive",
    category: "Baby Accessories",
    price: 1496.25
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51125c"
    },
    name: "Beauty",
    category: "Baby School Supplies",
    price: 1545.3
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51125d"
    },
    name: "Baby Feeding",
    category: "Baby Electronics",
    price: 936.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51125e"
    },
    name: "Bags",
    category: "Grocery",
    price: 1401.17
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51125f"
    },
    name: "Home Decor",
    category: "Baby Music",
    price: 491.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511260"
    },
    name: "Baby Nursery",
    category: "Baby Pet Supplies",
    price: 260.59
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511261"
    },
    name: "Luggage",
    category: "Automotive",
    price: 1108.7
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511262"
    },
    name: "Baby Accessories",
    category: "Baby Movies",
    price: 228.68
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511263"
    },
    name: "Beauty",
    category: "Books",
    price: 638.92
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511264"
    },
    name: "Health",
    category: "Baby Gifts",
    price: 1202.18
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511265"
    },
    name: "Baby Books",
    category: "Books",
    price: 1919.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511266"
    },
    name: "Baby Feeding",
    category: "Electronics",
    price: 1604.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511267"
    },
    name: "Baby Musical Instruments",
    category: "Baby Safety",
    price: 1094.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511268"
    },
    name: "Toys",
    category: "Baby Furniture",
    price: 1457.47
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511269"
    },
    name: "Home Decor",
    category: "Baby Books",
    price: 235.01
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51126a"
    },
    name: "Stationery",
    category: "Games",
    price: 824.19
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51126b"
    },
    name: "Baby Collectibles",
    category: "Sports",
    price: 935.02
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51126c"
    },
    name: "Electronics",
    category: "Baby Crafts",
    price: 1370.2
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51126d"
    },
    name: "Software",
    category: "Furniture",
    price: 1081.43
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51126e"
    },
    name: "Baby Luggage",
    category: "Baby Gifts",
    price: 938.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51126f"
    },
    name: "Travel",
    category: "Gifts",
    price: 1045.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511270"
    },
    name: "Baby Sports",
    category: "Baby Tools",
    price: 835.2
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511271"
    },
    name: "Baby Strollers",
    category: "Musical Instruments",
    price: 1072.88
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511272"
    },
    name: "Tools",
    category: "Luggage",
    price: 138.85
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511273"
    },
    name: "Clothing",
    category: "Baby Outdoor",
    price: 497.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511274"
    },
    name: "Games",
    category: "Baby Gear",
    price: 1744.7
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511275"
    },
    name: "Baby Cameras",
    category: "Baby Watches",
    price: 1159.21
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511276"
    },
    name: "Travel",
    category: "Baby Furniture",
    price: 1059.74
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511277"
    },
    name: "Bags",
    category: "Baby Games",
    price: 91.51
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511278"
    },
    name: "Sports",
    category: "Baby Industrial",
    price: 1962.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511279"
    },
    name: "Gifts",
    category: "Jewelry",
    price: 914.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51127a"
    },
    name: "Baby Art",
    category: "Electronics",
    price: 1454.17
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51127b"
    },
    name: "Jewelry",
    category: "Shoes",
    price: 1319.36
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51127c"
    },
    name: "Baby",
    category: "Party Supplies",
    price: 1490.3
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51127d"
    },
    name: "Baby Movies",
    category: "Baby Sports",
    price: 151.41
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51127e"
    },
    name: "Pet Supplies",
    category: "Baby Watches",
    price: 414.98
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51127f"
    },
    name: "Travel",
    category: "Baby Bath",
    price: 532.09
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511280"
    },
    name: "Appliances",
    category: "Baby Furniture",
    price: 1970.42
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511281"
    },
    name: "Musical Instruments",
    category: "Baby Sports",
    price: 916.42
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511282"
    },
    name: "Baby Art",
    category: "Kitchen",
    price: 787.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511283"
    },
    name: "Baby Carriers",
    category: "Baby Appliances",
    price: 802.45
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511284"
    },
    name: "Appliances",
    category: "Baby Nursery",
    price: 1561.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511285"
    },
    name: "Baby Fitness Equipment",
    category: "Automotive",
    price: 1532.24
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511286"
    },
    name: "Gifts",
    category: "Baby Sports",
    price: 668.14
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511287"
    },
    name: "Baby Cameras",
    category: "Baby Feeding",
    price: 1766
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511288"
    },
    name: "Shoes",
    category: "Baby Music",
    price: 1950.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511289"
    },
    name: "Baby Strollers",
    category: "Garden",
    price: 1723.96
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51128a"
    },
    name: "Collectibles",
    category: "Musical Instruments",
    price: 1112.51
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51128b"
    },
    name: "Baby Luggage",
    category: "Home Decor",
    price: 313.17
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51128c"
    },
    name: "Electronics",
    category: "Baby Pet Supplies",
    price: 19.81
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51128d"
    },
    name: "Baby Gifts",
    category: "Clothing",
    price: 1634.9
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51128e"
    },
    name: "Baby Gear",
    category: "Food",
    price: 1683.26
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51128f"
    },
    name: "Collectibles",
    category: "Baby Grocery",
    price: 80.26
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511290"
    },
    name: "Baby Feeding",
    category: "Baby Cameras",
    price: 1836.68
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511291"
    },
    name: "Electronics",
    category: "Baby Books",
    price: 19.54
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511292"
    },
    name: "Baby Diapering",
    category: "Baby Gear",
    price: 512.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511293"
    },
    name: "Cameras",
    category: "Hobbies",
    price: 189.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511294"
    },
    name: "Baby Music",
    category: "Baby Gear",
    price: 368.23
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511295"
    },
    name: "Party Supplies",
    category: "Health",
    price: 1379.61
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511296"
    },
    name: "Fitness",
    category: "Baby Hobbies",
    price: 279.2
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511297"
    },
    name: "Baby Accessories",
    category: "Baby Electrical",
    price: 586.98
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511298"
    },
    name: "Cameras",
    category: "Baby Software",
    price: 1783.06
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab511299"
    },
    name: "Sports",
    category: "Baby Music",
    price: 147.86
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51129a"
    },
    name: "Watches",
    category: "Party Supplies",
    price: 49.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51129b"
    },
    name: "Watches",
    category: "Baby Accessories",
    price: 271.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51129c"
    },
    name: "Electronics",
    category: "Baby Bedding",
    price: 401.88
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51129d"
    },
    name: "Baby Fitness Equipment",
    category: "Gifts",
    price: 185.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51129e"
    },
    name: "Bags",
    category: "Baby Strollers",
    price: 1616.94
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab51129f"
    },
    name: "Baby Electrical",
    category: "Baby Electronics",
    price: 737.37
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112a0"
    },
    name: "Party Supplies",
    category: "Movies",
    price: 810.93
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112a1"
    },
    name: "Food",
    category: "Baby Gifts",
    price: 996.48
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112a2"
    },
    name: "Electronics",
    category: "Baby Gifts",
    price: 1523.13
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112a3"
    },
    name: "Baby Nursery",
    category: "Baby Cameras",
    price: 1571.56
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112a4"
    },
    name: "Watches",
    category: "Kitchen",
    price: 1689.43
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112a5"
    },
    name: "Baby Carriers",
    category: "Baby Accessories",
    price: 1946.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112a6"
    },
    name: "Baby Books",
    category: "Baby Electrical",
    price: 1128.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112a7"
    },
    name: "Baby Music",
    category: "Health",
    price: 1992.72
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112a8"
    },
    name: "Baby Outdoor",
    category: "Baby",
    price: 1371.86
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112a9"
    },
    name: "Accessories",
    category: "Baby Accessories",
    price: 1674.69
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112aa"
    },
    name: "Baby Safety",
    category: "Baby Gifts",
    price: 1071.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ab"
    },
    name: "Baby Safety",
    category: "Art",
    price: 402.71
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ac"
    },
    name: "Baby Music",
    category: "Baby Bedding",
    price: 854.96
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ad"
    },
    name: "Grocery",
    category: "Baby Feeding",
    price: 31.94
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ae"
    },
    name: "Cameras",
    category: "Baby Appliances",
    price: 977.84
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112af"
    },
    name: "Tools",
    category: "Baby School Supplies",
    price: 611.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112b0"
    },
    name: "Office Supplies",
    category: "Gifts",
    price: 232.46
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112b1"
    },
    name: "Baby Electrical",
    category: "Movies",
    price: 1649.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112b2"
    },
    name: "Musical Instruments",
    category: "Sports",
    price: 1510.75
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112b3"
    },
    name: "Kitchen",
    category: "Baby Pet Supplies",
    price: 1722.19
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112b4"
    },
    name: "Baby Gear",
    category: "Baby Watches",
    price: 1003.56
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112b5"
    },
    name: "Baby Nursery",
    category: "Baby Gear",
    price: 946.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112b6"
    },
    name: "Baby Travel",
    category: "Baby Diapering",
    price: 1121.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112b7"
    },
    name: "Baby Health",
    category: "Music",
    price: 246.67
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112b8"
    },
    name: "Baby School Supplies",
    category: "Games",
    price: 463.06
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112b9"
    },
    name: "Baby Tools",
    category: "Baby Music",
    price: 939.09
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ba"
    },
    name: "Grocery",
    category: "Games",
    price: 1173.07
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112bb"
    },
    name: "Baby Accessories",
    category: "Baby Furniture",
    price: 522.81
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112bc"
    },
    name: "Baby Grocery",
    category: "Outdoor",
    price: 1376.15
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112bd"
    },
    name: "Baby Art",
    category: "Home Decor",
    price: 1854.6
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112be"
    },
    name: "Baby Bedding",
    category: "Outdoor",
    price: 1344.45
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112bf"
    },
    name: "School Supplies",
    category: "Toys",
    price: 51.21
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112c0"
    },
    name: "Art",
    category: "Baby Clothing",
    price: 745.68
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112c1"
    },
    name: "Grocery",
    category: "Accessories",
    price: 1670.08
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112c2"
    },
    name: "Watches",
    category: "Shoes",
    price: 601.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112c3"
    },
    name: "Baby Bags",
    category: "Travel",
    price: 1386.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112c4"
    },
    name: "Beauty",
    category: "Movies",
    price: 306.57
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112c5"
    },
    name: "Baby Toys",
    category: "Party Supplies",
    price: 367.12
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112c6"
    },
    name: "Watches",
    category: "Crafts",
    price: 417.83
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112c7"
    },
    name: "Baby Tools",
    category: "Baby Toys",
    price: 867.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112c8"
    },
    name: "Home Decor",
    category: "Baby",
    price: 7.38
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112c9"
    },
    name: "Baby Clothing",
    category: "Jewelry",
    price: 1090.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ca"
    },
    name: "Pets",
    category: "Baby Tools",
    price: 1817.39
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112cb"
    },
    name: "Baby Collectibles",
    category: "Stationery",
    price: 1508.9
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112cc"
    },
    name: "Bags",
    category: "Baby Safety",
    price: 657.16
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112cd"
    },
    name: "Baby Musical Instruments",
    category: "Cameras",
    price: 88.79
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ce"
    },
    name: "Cameras",
    category: "Baby Accessories",
    price: 14.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112cf"
    },
    name: "Baby",
    category: "Jewelry",
    price: 61.37
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112d0"
    },
    name: "Baby Musical Instruments",
    category: "Electronics",
    price: 421.33
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112d1"
    },
    name: "Bags",
    category: "Automotive",
    price: 1287.08
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112d2"
    },
    name: "Baby Bath",
    category: "Baby Bags",
    price: 1586.98
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112d3"
    },
    name: "Travel",
    category: "Clothing",
    price: 1315.59
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112d4"
    },
    name: "Baby Watches",
    category: "Crafts",
    price: 321.96
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112d5"
    },
    name: "Baby Art",
    category: "Baby Safety",
    price: 1986.26
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112d6"
    },
    name: "Baby Appliances",
    category: "Appliances",
    price: 1312.85
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112d7"
    },
    name: "Baby Tools",
    category: "Games",
    price: 1690.21
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112d8"
    },
    name: "Baby Collectibles",
    category: "Baby Strollers",
    price: 1560.2
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112d9"
    },
    name: "Furniture",
    category: "Baby Nursery",
    price: 1059.6
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112da"
    },
    name: "Furniture",
    category: "Accessories",
    price: 1200.52
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112db"
    },
    name: "Baby Appliances",
    category: "Musical Instruments",
    price: 1257.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112dc"
    },
    name: "Baby School Supplies",
    category: "Baby Art",
    price: 807.19
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112dd"
    },
    name: "Kitchen",
    category: "Stationery",
    price: 695.44
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112de"
    },
    name: "Baby Electronics",
    category: "Luggage",
    price: 780.34
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112df"
    },
    name: "Art",
    category: "Baby Travel",
    price: 414.74
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112e0"
    },
    name: "Baby Fitness Equipment",
    category: "Baby Electronics",
    price: 198.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112e1"
    },
    name: "Baby Luggage",
    category: "Electrical",
    price: 1962.45
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112e2"
    },
    name: "Baby Collectibles",
    category: "Baby Luggage",
    price: 616.09
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112e3"
    },
    name: "Home Improvement",
    category: "Baby Watches",
    price: 1681.32
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112e4"
    },
    name: "Baby Grocery",
    category: "Toys",
    price: 1634.4
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112e5"
    },
    name: "Baby Electrical",
    category: "Luggage",
    price: 529.13
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112e6"
    },
    name: "Technology",
    category: "Automotive",
    price: 5.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112e7"
    },
    name: "Baby Clothing",
    category: "Baby Appliances",
    price: 1888
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112e8"
    },
    name: "Baby Appliances",
    category: "Grocery",
    price: 1136.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112e9"
    },
    name: "Baby Software",
    category: "Stationery",
    price: 106.66
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ea"
    },
    name: "Office Supplies",
    category: "Beauty",
    price: 995.42
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112eb"
    },
    name: "Automotive",
    category: "Hobbies",
    price: 273.64
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ec"
    },
    name: "Collectibles",
    category: "Music",
    price: 1632.5
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ed"
    },
    name: "Baby Gifts",
    category: "Baby Strollers",
    price: 659.77
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ee"
    },
    name: "Baby Pet Supplies",
    category: "Office Supplies",
    price: 1200.37
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112ef"
    },
    name: "Baby Fitness Equipment",
    category: "Baby Cameras",
    price: 568.03
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112f0"
    },
    name: "Baby Party Supplies",
    category: "Baby Safety",
    price: 1250.42
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112f1"
    },
    name: "Industrial",
    category: "Baby Collectibles",
    price: 424.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112f2"
    },
    name: "Party Supplies",
    category: "Outdoor",
    price: 1232.62
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112f3"
    },
    name: "Health",
    category: "Baby Music",
    price: 1715.18
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112f4"
    },
    name: "Health",
    category: "Automotive",
    price: 838.22
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112f5"
    },
    name: "Baby Feeding",
    category: "Baby Travel",
    price: 345.73
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112f6"
    },
    name: "Luggage",
    category: "Electronics",
    price: 991.63
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112f7"
    },
    name: "Baby Art",
    category: "Office Supplies",
    price: 1603.87
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112f8"
    },
    name: "Art",
    category: "Baby Outdoor",
    price: 1068.76
  },
  {
    _id: {
      $oid: "6550a413ea0371cbab5112f9"
    },
    name: "Baby Appliances",
    category: "Pets",
    price: 1081.21
  }
]);

use("practisee1");
db.getCollectionNames();
db.products.find({
  $and: [
    {
      name: "Baby Appliances"
    },
    { price: { $gt: 1000 } }
  ]
});

db.products.updateOne(
  { _id: ObjectId("6550a413ea0371cbab510f12") },
  { $addToSet: { name: "Ind" } }
);

db.products.insertOne([
  {
    name: "Appliances",
    products: ["Great Product"]
  }
]);
use("practisee1");
db.products.find();
