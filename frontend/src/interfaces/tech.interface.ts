import {z} from 'zod';
export const TechInterface =
z.array(
    z.object({
        id:         z.int(),
        technology: z.string(),
        icons:      z.string(),
    })
);