# CORS, dotenv и ошибка `Maximum call stack size exceeded`

## 🔴 Главная ошибка

Вот это:

```js
import { env } from 'prisma/config';
```

и:

```js
origin: env('DOMAIN_URL'),
```

❌ Это НЕ Express env.

`prisma/config` тут использовать нельзя.

Из-за этого backend ломается.

---

# ✅ Как правильно

## 1. Установи dotenv

Если ещё нет:

```bash
npm install dotenv
```

---

# 2. В начале app.js

```js
import 'dotenv/config';
```

---

# 3. Используй process.env

## app.js

```js
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.DOMAIN_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use('/user', userRoutes);

export default app;
```

---

# ✅ .env

Создай файл:

```env
DOMAIN_URL=http://localhost:5173
```

---

# 🔴 Ещё ошибка

Ты использовал:

```js
const cors = require('cors');
```

Но у тебя:

```json
"type": "module"
```

Значит нужен `import`, а не `require`.

---

# ✅ Правильно

```js
import cors from 'cors';
```

---

# 🚨 Почему был stack overflow

Ошибка:

```txt
RangeError: Maximum call stack size exceeded
```

часто появляется когда:

- backend падает
- axios делает retry/re-render
- Vue ловит бесконечный цикл ошибок

---

# ✅ Что сделать сейчас

## app.js

```js
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.DOMAIN_URL,
    credentials: true
}));

app.use('/user', userRoutes);

export default app;
```

---

# .env

```env
DOMAIN_URL=http://localhost:5173
```

---

# Перезапусти backend

```bash
npm run dev
```

или:

```bash
node server.js
```

---

# 💡 Если после этого будет CORS

Проверь:

- backend реально работает на `3000`
- frontend реально работает на `5173`
- сервер НЕ упал

---

# 🔥 Быстрая проверка

Открой в браузере:

```txt
http://localhost:3000/user
```

---

# Если URL не открывается

Значит backend всё ещё падает.