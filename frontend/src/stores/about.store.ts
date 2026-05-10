import {defineStore} from "pinia";
import {httpClientGet} from "@/services/httpClientGet.ts";
import {API_ROUTES} from "@/services/api.ts";
import {AboutInterface} from "@/interfaces/about.interface.ts";
export const useAboutStore = defineStore('about', () => {
    const {data: about, fetchData: fetchAbout} = httpClientGet(API_ROUTES.about , AboutInterface)
    return {about,fetchAbout}
})