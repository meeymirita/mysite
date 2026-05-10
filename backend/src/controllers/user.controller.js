import {getSocialsMe, getList, getUser, getAboutMe} from "../services/user.service.js";
export async function getCurrentUser(req, res) {
    const user = await getUser();
    res.json(user);
}
export async function getTechList (req, res) {
    const techList = await getList();
    res.json(techList);
}
export async function getSocials(req,res){
    const socials = await getSocialsMe();
    res.json(socials);
}

export async function getAbout(req,res){
    const about = await getAboutMe();
    res.json(about);
}