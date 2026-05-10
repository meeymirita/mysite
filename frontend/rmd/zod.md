# Zod — Runtime Validation

## Что такое Zod

`Zod` — библиотека для проверки данных во время выполнения (`runtime`).

TypeScript проверяет только код,  
но НЕ проверяет данные с сервера.

Пример:

```ts
const { data } = await axios.get<User>();
```

TypeScript просто верит, что сервер вернул `User`.

Если backend пришлёт неправильные данные:

```json
{
  "id": "hello"
}
```

ошибки не будет.

---

# Зачем нужен Zod

Zod проверяет реальные данные runtime.

Если типы не совпадают:

- выбрасывается ошибка
- приложение не получает сломанные данные

---

# Установка

```bash
npm install zod
```

---

# Создание схемы

## user.interfaces.ts

```ts
import { z } from 'zod';

export const UserSchema = z.object({
    id: z.number(),
    createdAt: z.string(),
    fullName: z.string(),
    userName: z.string(),
    profession: z.string(),
    experience: z.string(),
    age: z.number(),
    stack: z.string(),
});
```

---

# Автоматическая TypeScript типизация

```ts
export type User = z.infer<typeof UserSchema>;
```

---

# Использование в Pinia Store

## profile.store.ts

```ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API_ROUTES, httpClient } from '@/services/api.ts';
import { UserSchema } from '@/interfaces/user.interfaces.ts';

export const useUserStore = defineStore('user', () => {

    const user = ref(null);

    async function fetchUser() {

        const response = await httpClient.get(API_ROUTES.user);

        const validatedUser = UserSchema.parse(response.data);

        user.value = validatedUser;
    }

    return { user, fetchUser };
});
```

---

# Как работает parse()

```ts
UserSchema.parse(response.data)
```

Zod проверяет:

- существует ли поле
- правильный ли тип
- соответствует ли объект схеме

---

# Пример ошибки

## Schema

```ts
id: z.boolean()
```

## Backend вернул

```json
{
  "id": 1
}
```

## Результат

```txt
ZodError:
Expected boolean, received number
```

---

# Основные типы

| Zod | TypeScript |
|---|---|
| `z.string()` | `string` |
| `z.number()` | `number` |
| `z.boolean()` | `boolean` |
| `z.array()` | `array` |
| `z.object()` | `object` |

---

# Optional поля

```ts
city: z.string().optional()
```

---

# Массив

```ts
const UsersSchema = z.array(UserSchema);
```

---

# Safe Parse

`parse()` выбрасывает ошибку.

Если нужно безопасно:

```ts
const result = UserSchema.safeParse(data);
```

---

# Проверка

```ts
if (result.success) {
    console.log(result.data);
} else {
    console.log(result.error);
}
```

---

# Главное

## TypeScript

Проверяет:

- код
- IDE
- compile-time

---

## Zod

Проверяет:

- реальные данные
- backend response
- runtime

---

# Современный подход

```txt
Zod + TypeScript + Axios + Pinia
```

Это популярная связка в современных Vue/React проектах.