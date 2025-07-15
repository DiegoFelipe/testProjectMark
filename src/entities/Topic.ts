import { ITopic } from './interfaces/ITopic';

export class Topic implements ITopic {
  constructor(
    public id: string,
    public name: string,
    public content: string,
    public createdAt: string,
    public updatedAt: string,
    public version: number,
    public parentTopicId?: string,
  ) {}
}
