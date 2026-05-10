# CORS, dotenv и ошибка
## 1.  dotenv

```bash
npm install dotenv
```
---
# 2.  app.js

```js
import 'dotenv/config';
```

---

# 3.  process.env

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

#  .env
 файл:

```env
DOMAIN_URL=http://localhost:5173
```

---

```json
"type": "module"
```

нужен `import`, а не `require`.

---
```js
import cors from 'cors';
```

---