import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conversationRoutes from "./routes/conversationRoutes";

dotenv.config();

const app = express();
app.use(express.json({}));
app.use(cors());

app.use("/api", conversationRoutes);

export default app;
