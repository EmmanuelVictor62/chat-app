# chat-app

```md
# Chat Application

A real-time chat application built with Next.js, Express.js, Prisma, and PostgreSQL. This project includes features such as chatbot interactions, and API validation using Zod.

The chatbot mimics a typical chatbot interaction but currently sends a hardcoded response for testing purposes instead of generating dynamic replies.

## 🚀 Technologies Used

- **Frontend:** Next.js, TailwindCSS, Redux Toolkit
- **Backend:** Express.js, Prisma, PostgreSQL
- **API Validation:** Zod
- **Documentation:** Swagger
- **State Management:** Redux Toolkit

## 📁 Project Structure
```

chat-app/
│── client/ # Next.js frontend
│ ├── components/ # Reusable UI components
| |-- hooks /# Reusable Hook functions
│ ├── pages/ # Application pages
│ ├── store/ # Redux store setup
| |-- slices/# Redux toolkit slices
| |-- services/# Api call functionality
│ ├── styles/ # Global styles
│ └── utils/ # Utility functions
│
│── server/ # Express.js backend
│ ├── config/ # Database and environment configurations
│ ├── controllers/ # API request handlers
│ ├── middleware/ # Middleware (e.g., validation, authentication)
│ ├── routes/ # API routes
│ ├── schemas/ # Zod validation schemas
│ ├── services/ # Business logic
│ ├── swagger/ # API documentation
│ └── prisma/ # Prisma schema and migrations
│
│── .env # Environment variables
│── README.md # Project documentation
│── package.json # Project dependencies
│── tsconfig.json # TypeScript configuration

````

## 🔧 Setup and Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/EmmanuelVictor62/chat-app.git
cd chat-app
````

### 2️⃣ Set up environment variables

Create a `.env` file in the `server/` directory and add:

```sh
DATABASE_URL="postgresql://user:password@localhost:5334/chat_db?schema=public"
```

### 3️⃣ Install dependencies

Run the following command in the root directory:

```sh
npm install
```

### 4️⃣ Run database migrations

```sh
cd server
npx prisma migrate dev
```

### 5️⃣ Start the backend server

```sh
cd server
npm run dev
```

### 6️⃣ Start the frontend

```sh
cd client
npm run dev
```

## 📝 API Documentation

Swagger documentation is available at:

```
http://localhost:5334/api/docs
```

## ✅ Validation

All API requests are validated using Zod. If the request does not meet the schema requirements, the server returns a 400 response with error details.

## 📌 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

**Made with ❤️ by Emmanuel Victor. **

```

```
