import { Request, Response } from "express";
import prisma from "../config/db";
import { v4 as uuidv4 } from "uuid";

/**
 * @swagger
 * tags:
 *   name: Conversations
 *   description: API for managing conversations and messages
 */

/**
 * @swagger
 * /api/conversations:
 *   get:
 *     summary: Get all conversations
 *     tags: [Conversations]
 *     responses:
 *       200:
 *         description: List of conversations with messages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Conversation'
 *       500:
 *         description: Internal server error
 */
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

/**
 * @swagger
 * /api/conversations:
 *   post:
 *     summary: Create a new conversation
 *     tags: [Conversations]
 *     responses:
 *       200:
 *         description: Conversation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conversation'
 *       500:
 *         description: Internal server error
 */
export const createConversation = async (req: Request, res: Response) => {
  try {
    const data = [
      {
        id: `MSG-${uuidv4()}`,
        sender: "BOT",
        text: "Hi, how can I help you?",
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

/**
 * @swagger
 * /api/conversations/{id}:
 *   delete:
 *     summary: Delete a conversation by ID
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The conversation ID
 *     responses:
 *       200:
 *         description: Conversation deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conversation'
 *       500:
 *         description: Internal server error
 */
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

/**
 * @swagger
 * /api/messages:
 *   post:
 *     summary: Create a new message in a conversation
 *     tags: [Conversations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: The message text
 *               sender:
 *                 type: string
 *                 description: The sender of the message (e.g., USER or BOT)
 *               conversationId:
 *                 type: string
 *                 description: The ID of the conversation
 *             example:
 *               text: "Hello, how are you?"
 *               sender: "USER"
 *               conversationId: "CON-12345"
 *     responses:
 *       200:
 *         description: Messages created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 *       500:
 *         description: Internal server error
 */
export const createMessage = async (req: Request, res: Response) => {
  try {
    const { text, sender, conversationId } = req.body;

    const messages = [
      {
        id: `MSG-${uuidv4()}`,
        text,
        sender,
        conversationId,
      },
      {
        id: `MSG-${uuidv4()}`,
        text: "This is an AI generated response",
        sender: "BOT",
        conversationId,
      },
    ];

    const createdMessages = await prisma.$transaction(
      messages.map((message) =>
        prisma.message.create({
          data: message,
        })
      )
    );

    res.status(200).json(createdMessages);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Conversation:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The conversation ID
 *         createdAt:
 *           type: string
 *           description: The date and time the conversation was created
 *         messages:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Message'
 *       example:
 *         id: "CON-12345"
 *         createdAt: "2023-10-01T12:00:00Z"
 *         messages:
 *           - id: "MSG-67890"
 *             text: "Hi, how can I help you?"
 *             sender: "BOT"
 *             conversationId: "CON-12345"
 *
 *     Message:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The message ID
 *         text:
 *           type: string
 *           description: The message text
 *         sender:
 *           type: string
 *           description: The sender of the message (e.g., USER or BOT)
 *         conversationId:
 *           type: string
 *           description: The ID of the conversation
 *       example:
 *         id: "MSG-67890"
 *         text: "Hi, how can I help you?"
 *         sender: "BOT"
 *         conversationId: "CON-12345"
 */
