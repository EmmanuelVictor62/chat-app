import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const conversationData: Prisma.ConversationCreateInput[] = [
  {
    createdAt: "",
    messages: {
      create: [
        {
          text: "How can I help you today",
          sender: "bot",
        },
        {
          text: "I am a user and I am typing a response",
          sender: "user",
        },
        {
          text: "This is an AI generated response",
          sender: "bot",
        },
      ],
    },
  },
];

export async function main() {
  for (const conversation of conversationData) {
    await prisma.conversation.create({ data: conversation });
  }
}

main();
