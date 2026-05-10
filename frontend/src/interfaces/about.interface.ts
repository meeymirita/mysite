import {z} from 'zod';

export const AboutInterface =
    z.array(
        z.object({
            id: z.int(),
            title: z.string(),
            desc: z.string(),
        })
    );