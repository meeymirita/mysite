import {prisma} from "../config/db.js";
// иннформация про меня
export async function getUser() {
    let user = await prisma.user.findFirst();
    if (!user) {
        user = await prisma.user.create({
            data: {
                fullName: 'Никита',
                userName: 'Mirita',
                profession: 'backend developer at Контур',
                experience: '1 year experience',
                age: 22,
                city: 'Новосибирск',
                stack: 'PHP / Vue',
            },
        });
    }
    return user;
}
// лсит с технологиями
export async function getList(){
    return prisma.skills.findMany(
          { select: {id:true, technology: true, icons: true }
        }
    );
}
// для связи данные
export async function getSocialsMe(){
    return prisma.socials.findMany(
        { select: {id :true, name :true, link :true, icons :true }
        }
    );
}
// обо мне
export async function getAboutMe(){
    return prisma.aboutMe.findMany(
        { select: {id :true, title :true, desc :true}
        }
    );
}