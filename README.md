# Chat Application

This is a full-stack chat interface that simulates a real-time conversation with an AI assistant. While it doesn’t connect to a live model like OpenAI, it realistically mimics how users interact with AI chatbots, with loading delays, input control, and dynamic responses.

Built as a demonstration of both frontend and backend integration in a full-stack monorepo, this project highlights my ability to create thoughtful, user-centered experiences and structured, scalable backend APIs.

---

## Why This Project Matters

In today's world, AI interfaces are everywhere — but building a responsive, user-friendly chat experience takes more than just connecting to an API.

This project shows how I approach:

- Real-time feedback and UI responsiveness
- Managing user interactions through clean state management
- Writing and documenting backend logic that validates, processes, and returns responses
- Structuring a full-stack application using best practices

Employers and recruiters looking to see how I think through **UX, code quality, and communication between client-server layers** will find this project useful.

---

## Problems This Project Solves

- Simulates real-world AI chat interface behavior
- Disables input and mimics “thinking” states for realism
- Uses schema validation (Zod) to ensure backend robustness
- Demonstrates clean monorepo organization
- Makes use of Swagger for self-documented APIs
- Shows practical use of Redux Toolkit for state control

This is not a toy — it’s a representation of how I build real apps: stable, user-focused, and easy to maintain.

---

## ⚙️ Project Structure

```
chat-app/
│
├── client/        # Frontend: Next.js + Redux Toolkit + TailwindCSS
└── server/        # Backend: Express.js + TypeScript + Zod + Swagger
```

- **Client**: Handles UI rendering, state management, and chat interactions
- **Server**: Validates input, handles simulated bot responses, and exposes documented API endpoints

---

## 🛠️ Tech Stack

### Frontend:

- **React (Next.js)**
- **Redux Toolkit**
- **TailwindCSS**
- **TypeScript**

### Backend:

- **Node.js (Express)**
- **Zod** for request validation
- **Swagger** for API documentation
- **PostgreSQL** (optional)
- **Docker** (optional container setup)
- **TypeScript**

---

## 🎬 Live Demo (GIF)

Here’s a short preview of the project in action:

![Chat Demo](link-to-your-demo.gif)

> User sends a message → input is disabled → bot "types" a response → realistic feedback cycle

---

## 📄 How to Run Locally (Optional)

```bash
# Clone the project
git clone https://github.com/your-username/chat-app.git
cd chat-app

# Start the backend
cd server
yarn install
yarn dev

# Start the frontend
cd ../client
yarn install
yarn dev
```

---

## 🧩 Extra Notes

- The chatbot response is mocked — the goal here is not AI logic, but interface simulation
- Swagger docs are available for the backend to view/test endpoints
- Fully type-safe stack, with schema validation and clean API boundaries

---

## 💼 For Employers & Recruiters

This project was built to showcase my full-stack development skills, especially around:

- Building interactive, user-friendly frontend apps
- Designing well-structured APIs
- Writing clean, maintainable code in TypeScript
- Thinking through product-level concerns like UI states, validation, and scalability

If you're hiring for someone who can **own both sides of the stack** and focus on user experience, this is a small taste of how I work.
