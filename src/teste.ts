import { db } from "./db/Database.ts";

console.log("db:", db);

(async () => {
  try {
    const topics = await db.getTopics();
    console.log("topics:", topics);
  } catch (error) {
    console.error("Error:", error);
  }
})();
