import { Request, Response } from "express";
import prisma from "../config/db";
import { v4 as uuidv4 } from "uuid";

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

export const createConversation = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    const data = [
      {
        id: `MSG-${uuidv4()}`,
        sender: "BOT",
        text: "Hi, how can I help you?",
      },
      {
        id: `MSG-${uuidv4()}`,
        sender: "USER",
        text: message,
      },
      {
        id: `MSG-${uuidv4()}`,
        sender: "BOT",
        text: "This is an AI generated message",
      },
    ];

    const conversation = await prisma.conversation.create({
      data: {
        id: `CON-${uuidv4()}`,
        messages: { create: data },
      },
      include: { messages: true },
    });

    res.status(200).json(conversation);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};

export const deleteConversation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const conversations = await prisma.conversation.delete({
      where: { id },
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
      data: { id: `MSG-${uuidv4()}`, text, sender, conversationId },
    });

    res.status(200).json(message);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};
