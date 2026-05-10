# Axios и `app.use()` в Vue 3

## Проблема

Вот здесь:

```ts
app.use(axios);
```

❌ `Axios` — НЕ Vue plugin.  
Его нельзя подключать через `app.use()`.

---

# Что происходит

Vue пытается:

- зарегистрировать axios как plugin
- axios внутри себя вызывает `merge`
- получается бесконечная рекурсия
- появляется ошибка:

```txt
Maximum call stack size exceeded
```

---

# ❌ Неправильно

```ts
import axios from 'axios';

app.use(axios);
```

---

# ✅ Удали это

```ts
app.use(axios);
```

---

# ✅ Правильный main.ts

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);

app.mount('#mirita');
```

---

# 💡 Как правильно использовать Axios

## services/api.ts

```ts
import axios from 'axios';

export const httpClient = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
});
```

---

# Использование

```ts
httpClient.get(...)
```

👉 Этого достаточно.

---

# 🔥 Почему запрос всё равно работал

Потому что:

- store вызвался
- axios отправил запрос
- backend ответил

Но Vue одновременно ломался на:

```ts
app.use(axios)
```

---

# ✅ Итог

## Никогда не делай

```ts
app.use(axios)
```

---

# Axios:

- просто импортируется
- и используется напрямую

---

# После удаления

```ts
app.use(axios)
```

ошибка:

```txt
Maximum call stack size exceeded
```

полностью исчезнет.