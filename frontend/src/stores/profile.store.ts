import {defineStore} from "pinia";
import {API_ROUTES} from "@/services/api.ts";
import {httpClientGet} from "@/services/httpClientGet.ts";
import {UserInterface} from "@/interfaces/user.interface.ts";
export const useUserStore = defineStore('user', () => {
    const {data: user, fetchData: fetchUser} = httpClientGet(API_ROUTES.user, UserInterface);
    return {user, fetchUser}
})

// Так как в каждом сторе повторялась бы логика запроса хелпер для прокидывания роута и зод схемы

// const user = ref();
// async function fetchUser(){
//     const { data } = await httpClient.get(API_ROUTES.user);
//     user.value = UserInterface.parse(data); // zod real time tyype ckeck
// }
// return {user,fetchUser}
