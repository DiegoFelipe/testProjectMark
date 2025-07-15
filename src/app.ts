import express from "express";
import topicRoutes from "./routes/topics";

const app = express();
app.use(express.json());
app.use("/api/topics", topicRoutes);

export default app;
