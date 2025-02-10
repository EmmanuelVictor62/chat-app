import { Router } from "express";
import {
  listAllConversations,
  deleteConversation,
  createMessage,
  createConversation,
} from "../controllers/conversationController";

const router = Router();

router.get("/conversations", listAllConversations);

router.post("/conversations", createConversation);

router.delete("/conversations/:id", deleteConversation);

router.post("/conversations/:id/messages", createMessage);

export default router;
