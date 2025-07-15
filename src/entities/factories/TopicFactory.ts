import { Topic } from '../Topic';
import { v4 as uuidv4 } from 'uuid';

export class TopicFactory {
  static create(name: string, content: string, parentTopicId?: string): Topic {
    const now = new Date().toISOString();
    return new Topic(uuidv4(), name, content, now, now, 1, parentTopicId);
  }

  static createVersion(previous: Topic, newContent: string): Topic {
    const now = new Date().toISOString();
    return new Topic(
      uuidv4(),
      previous.name,
      newContent,
      previous.createdAt,
      now,
      previous.version + 1,
      previous.parentTopicId
    );
  }
}
