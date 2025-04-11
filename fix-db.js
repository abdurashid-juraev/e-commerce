const fs = require("fs");

const db = require("./data.json");

db.users = db.users.map((user) => ({
  ...user,
  id: Number(user.id),
}));

fs.writeFileSync("./data.json", JSON.stringify(db, null, 2));
console.log("✅ ID lar number ga o‘zgartirildi!");
