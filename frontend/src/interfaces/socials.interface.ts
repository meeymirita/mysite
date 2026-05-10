import {z} from 'zod';

export const SocialsInterface =
    z.array(
        z.object({
            id: z.int(),
            name: z.string(),
            link: z.string(),
            icons: z.string(),
        })
    );