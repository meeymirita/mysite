import {z} from 'zod';
export const  UserInterface = z.object( {
    createdAt:  z.string(),
    fullName:   z.string(),
    userName:   z.string(),
    profession: z.string(),
    experience: z.string(),
    age:        z.number(),
    city:       z.string(),
    stack:      z.string(),
});
