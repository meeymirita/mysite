#  main.ts

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
# Использование

```ts
httpClient.get(...)
```
