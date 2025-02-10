import { Router } from "express";
import {
  listAllConversations,
  deleteConversation,
  createMessage,
  createConversation,
} from "../controllers/conversationController";
import { createMessageSchema } from "../schema/conversationSchema";
import { validate } from "../middleware/validationMiddleware";

const router = Router();

router.get("/conversations", listAllConversations);

router.post("/conversations", createConversation);

router.delete("/conversations/:id", deleteConversation);

router.post(
  "/conversations/:id/messages",
  validate(createMessageSchema),
  createMessage
);

export default router;
