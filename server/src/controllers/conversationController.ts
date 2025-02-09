import { Request, Response } from "express";
import prisma from "../config/db";

export const listAllConversations = async (req: Request, res: Response) => {
  try {
    const conversations = await prisma.conversation.findMany({
      include: { messages: true },
    });

    res.status(200).json(conversations);
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

    res.status(200).json(conversations);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};

export const createMessage = async (req: Request, res: Response) => {
  try {
    const { text, sender, conversationId } = req.body;

    const message = await prisma.message.create({
      data: { text, sender, conversationId },
    });

    res.status(200).json(message);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};
