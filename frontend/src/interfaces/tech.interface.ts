import {z} from 'zod';
export const TechInterface =
z.array(
    z.object({
        technology: z.string(),
        icons:     z.string(),
    })
);