import { Router } from "express";
import {
  listAllConversations,
  deleteConversation,
  createMessage,
  createConversation,
} from "../controllers/conversationController";

const router = Router();

router.get("/conversations", listAllConversations);

router.post("/conversation", createConversation);

router.delete("/conversation/:id", deleteConversation);

router.post("/messages", createMessage);

export default router;
