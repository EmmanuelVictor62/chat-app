import { Router } from "express";
import {
  listAllConversations,
  deleteConversation,
  createMessage,
} from "../controllers/conversationController";

const router = Router();

router.get("/conversations", listAllConversations);

router.delete("/conversation/:id", deleteConversation);

router.post("/messages", createMessage);

export default router;
