import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import conversationRoutes from "./routes/conversationRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", conversationRoutes);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
