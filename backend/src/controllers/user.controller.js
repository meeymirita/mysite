import {getList, getUser} from "../services/user.service.js";
export async function getCurrentUser(req, res) {
    const user = await getUser();
    res.json(user);
}

export async function getTechList (req, res) {
    const techList = await getList();
    res.json(techList);
}