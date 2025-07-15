import fs from "fs-extra";
import path from "path";
import { Topic } from "../entities/Topic";

const DB_PATH = path.join(__dirname, "db.json");

type DB = {
  topics: Topic[];
};

async function readDB(): Promise<DB> {
  if (!(await fs.pathExists(DB_PATH))) {
    await fs.writeJSON(DB_PATH, { topics: [] }, { spaces: 2 });
  }

  const data = await fs.readJSON(DB_PATH);

  if (!data.topics) {
    data.topics = [];
  }

  return data;
}

async function writeDB(data: DB) {
  await fs.writeJSON(DB_PATH, data, { spaces: 2 });
}

export const db = {
  async getTopics(): Promise<Topic[]> {
    const data = await readDB();
    return data.topics;
  },
  async addTopic(topic: Topic): Promise<void> {
    const data = await readDB();
    console.log(123, data);
    data.topics.push(topic);
    await writeDB(data);
  },
  async updateTopics(topics: Topic[]): Promise<void> {
    await writeDB({ topics });
  },
};
