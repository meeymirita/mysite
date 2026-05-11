import {defineStore} from "pinia";
import {API_ROUTES} from "@/services/api.ts";
import {TechInterface} from "@/interfaces/tech.interface.ts";
import {httpClientGet} from "@/services/httpClientGet.ts";
import {httpClientPut} from "@/services/httpClientPut.ts";
export const useTechStore = defineStore('tech', () => {
    const {data: tech, fetchData: fetchTech } = httpClientGet(API_ROUTES.tech, TechInterface)

    async function updateSkillsList(id: number, status :boolean) {
        const response = await httpClientPut(API_ROUTES.tech + '/' + id, status);
        return response.data
    }
    return {tech, fetchTech, updateSkillsList}
});
