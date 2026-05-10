import { ref } from 'vue';
import { httpClient } from '@/services/api.ts';
import type { ZodSchema } from 'zod';
// <T> placeholder для типа моего интерфейсика какой закину с таким и будет работать
export function httpClientGet<T>(route: string, schema: ZodSchema<T>) {
    const data = ref<T | null>(null);
    async function fetchData() {
        const response = await httpClient.get(route);
        data.value = schema.parse(response.data);
    }
    return {data, fetchData};
}