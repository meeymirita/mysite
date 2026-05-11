# 🌸 mirita portfolio

Личный сайт-портфолио backend разработчика.  
Проект написан с использованием современного Vue + Express stack.

---

# ✨ Stack

## Frontend

- Vue 3
- TypeScript
- Pinia
- Vue Router
- Zod
- Vue Toastification
- Axios
- Vite

## Backend

- Express.js
- Prisma ORM
- SQLite
- better-sqlite3
- Node.js

## DevOps

- Docker
- Docker Compose
- Nginx

---

# 📸 Features

- Красивый glassmorphism UI
- Система технологий / skills
- Toast уведомления
- REST API
- Prisma ORM
- TypeScript validation
- Адаптивный дизайн
- Vue state management через Pinia
- Полный запуск через Docker

---

# 🐳 Run Project

## Start containers

```bash
docker compose -f docker-compose.local.yml up -d --build
```

---

# 🌐 Services

## Frontend

```bash
http://localhost:5173
```

## Backend

```bash
http://localhost:3000
```

---

# 🐳 Docker Compose

```yml
services:
  frontend:
    container_name: mira-frontend

    build:
      context: ./frontend

    ports:
      - "5173:5173"

    volumes:
      - ./frontend:/vue-app
      - /vue-app/node_modules

  backend:
    container_name: mira-backend

    build:
      context: ./backend

    ports:
      - "3000:3000"

    volumes:
      - ./backend:/express-app
      - /express-app/node_modules
```

---

# 🗄 Prisma

## Generate client

```bash
npx prisma generate
```

## Run migrations

```bash
npx prisma migrate dev
```

---

# 📦 Frontend Dependencies

```txt
Vue 3
TypeScript
Pinia
Vue Router
Zod
Axios
Vue Toastification
Vite
```

---

# 📦 Backend Dependencies

```txt
Express
Prisma
SQLite
better-sqlite3
dotenv
cors
```

---

# 🌐 Author

### Nikita / mirita

Backend Developer

```txt
PHP • Vue • Docker • Prisma • TypeScript
```

GitHub:

```txt
https://github.com/meeymirita
```

