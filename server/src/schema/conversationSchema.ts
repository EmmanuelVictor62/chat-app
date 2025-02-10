import { z } from "zod";

export const createMessageSchema = z.object({
  text: z
    .string()
    .min(1, "Message cannot be empty")
    .max(500, "Message too long"),
  sender: z.enum(["USER", "BOT"]),
  conversationId: z.string(),
});
