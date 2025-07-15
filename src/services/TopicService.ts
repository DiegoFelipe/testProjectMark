import { Topic } from "../entities/Topic";
import { db } from "../db/dbStore";

export class TopicService {
  static async getTopicTree(topicId: string): Promise<Topic | null> {
    const topics = await db.getTopics();
    const buildTree = (id: string): Topic | null => {
      const topic = topics.find((t) => t.id === id);
      if (!topic) return null;
      const children = topics.filter((t) => t.parentTopicId === id);
      (topic as any).children = children.map((c) => buildTree(c.id));
      return topic;
    };
    return buildTree(topicId);
  }
}
