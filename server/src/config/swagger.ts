import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat Application API",
      version: "1.0.0",
      description: "API documentation for the Chat Application",
    },
    servers: [
      {
        url: "http://localhost:5334",
        description: "Local server",
      },
    ],
  },
  apis: ["../routes/conversationRoutes.ts"],
};

const specs = swaggerJsdoc(options);

export default specs;
