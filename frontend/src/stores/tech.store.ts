import {defineStore} from "pinia";
import {API_ROUTES} from "@/services/api.ts";
import {TechInterface} from "@/interfaces/tech.interface.ts";
import {httpClientGet} from "@/services/httpClientGet.ts";
export const useTechStore = defineStore('tech', () => {
    const {data: tech, fetchData: fetchTech } = httpClientGet(API_ROUTES.tech, TechInterface)
    return {tech, fetchTech}
});
