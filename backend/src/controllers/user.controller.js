import {getUser} from "../services/user.service.js";
export async function getCurrentUser(req, res) {
    const user = await getUser();
    res.json(user);
}