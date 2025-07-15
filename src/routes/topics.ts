import { TopicService } from "../services/TopicService";
import { Router } from "express";
import { db } from "./../db/dbStore";
import { TopicFactory } from "../entities/factories/TopicFactory";

const router = Router();

router.post("/", async (req, res) => {
  const { name, content, parentTopicId } = req.body;
  const topic = TopicFactory.create(name, content, parentTopicId);
  console.log("db:", db); // DEBUG: deve mostrar o objeto com funções
  await db.addTopic(topic);
  res.status(201).json(topic);
});

router.get("/tree/:id", async (req, res) => {
  const tree = await TopicService.getTopicTree(req.params.id);
  if (!tree) return res.status(404).send("Topic not found");
  res.json(tree);
});

export default router;
