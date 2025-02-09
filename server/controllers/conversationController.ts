import { Request, Response } from "express";
import prisma from "../config/db";

export const listAllConversations = async (res: Response) => {
  try {
    const conversations = await prisma.conversation.findMany({
      include: { messages: true },
    });
    res.json(conversations);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};

export const deleteConversation = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const conversations = await prisma.conversation.delete({
      where: { id: id },
    });

    res.json(conversations);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

export const createMessage = async (req: Request, res: Response) => {
  try {
    const { text, sender, conversationId } = req.body;

    const message = await prisma.message.create({
      data: { text, sender, conversationId },
    });

    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
