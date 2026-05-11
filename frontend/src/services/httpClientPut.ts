import {httpClient} from "@/services/api.ts";

export function httpClientPut(route: string, status :boolean){
    return httpClient.put(route, {
        status: status
    });
}
