export interface ITopic {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  parentTopicId?: string;
}
