import {defineStore} from "pinia";
import {httpClientGet} from "@/services/httpClientGet.ts";
import {SocialsInterface} from "@/interfaces/socials.interface.ts";
import {API_ROUTES} from "@/services/api.ts";
export const useSocialsStore = defineStore('socials', () => {
    const {data: socials, fetchData: fetchSocials} = httpClientGet(API_ROUTES.socials , SocialsInterface)
    return {socials,fetchSocials}

})