import {getSocialsMe, getSkills, getUser, getAboutMe, updateSkills} from "../services/user.service.ts";
export async function getCurrentUser(req, res) {
    const user = await getUser();
    res.json(user);
}
export async function getSkillsList (req, res) {
    const techList = await getSkills();
    res.json(techList);
}
export async function updateSkillsList(req, res) {
    try {
        const skillId = parseInt(req.params.id);
        const skillStatus = req.body.status;
        const update = await updateSkills(skillId, skillStatus);
        return res.json({
            success: true,
            data: update
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Ошибка обновления'
        });
    }
}
export async function getSocials(req,res){
    const socials = await getSocialsMe();
    res.json(socials);
}

export async function getAbout(req,res){
    const about = await getAboutMe();
    res.json(about);
}