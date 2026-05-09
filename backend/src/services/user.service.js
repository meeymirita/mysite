import { prisma } from "../config/db.js";

export async function getUser() {
    let user = await prisma.user.findFirst();

    if (!user) {
        user = await prisma.user.create({
            data: {
                fullName: 'Никита',
                userName: 'mirita',
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