https://thecode.media/chto-takoe-express-js/

# Express Route Prefix — почему `/user` перестал работать

## Проблема

Было:

```js
app.use('/user', userRoutes);
```

и внутри `user.routes.js`:

```js
router.get('/user', getCurrentUser);
```

Из-за этого Express объединяет пути:

```txt
/user + /user
```

И итоговый URL становится:

```txt
/user/user
```

Поэтому запрос на:

```txt
/user
```

перестаёт работать.

---

# Правильный вариант

## app.js

```js
import express from 'express';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());

app.use('/user', userRoutes);

export default app;
```

---

## user.routes.js

```js
import { Router } from 'express';
import { getCurrentUser } from '../controllers/user.controller.js';

const router = Router();

router.get('/', getCurrentUser);

export default router;
```

---

## user.controller.js

```js
import { getUser } from '../services/user.service.js';

export async function getCurrentUser(req, res) {
    const user = await getUser();
    res.json(user);
}
```

---

## user.service.js

```js
import { prisma } from '../config/db.js';

export async function getUser() {
    let user = await prisma.user.findFirst();

    if (!user) {
        user = await prisma.user.create({
            data: {
                fullName: 'Никита',
                userName: 'mirita',
                profession: 'backend developer at Контур',
                experience: '1 year experience',
                age: 22,
                city: 'Новосибирск',
                stack: 'PHP / Vue',
            },
        });
    }

    return user;
}
```

---

## db.js

```js
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
    url: 'file:./dev.db',
});

export const prisma = new PrismaClient({
    adapter,
});
```

---

# Как работает Route Prefix

## app.js

```js
app.use('/user', userRoutes);
```

Это задаёт общий префикс:

```txt
/user
```

---

## Внутри router

```js
router.get('/');
```

Express автоматически объединяет:

```txt
/user + /
```

И получается:

```txt
/user
```

---

# Примеры

## app.js

```js
app.use('/posts', postRoutes);
```

## post.routes.js

```js
router.get('/');
router.get('/:id');
router.post('/');
```

---

# Итоговые URL

| Route                | URL        |
| -------------------- | ---------- |
| `router.get('/')`    | `/posts`   |
| `router.get('/:id')` | `/posts/1` |
| `router.post('/')`   | `/posts`   |

---

# Главное правило

## В `app.use()`

Пишется общий путь:

```js
app.use('/user', userRoutes);
```

---

## В router

Пишутся только внутренние пути:

```js
router.get('/');
router.get('/:id');
router.post('/');
```

Без повторения `/user`.

---

# Почему так делают

Так код:

* чище
* проще масштабируется
* меньше повторений
* удобнее разделять роуты
* легче поддерживать

Это стандартная практика в Express backend проектах.
