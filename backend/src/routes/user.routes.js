import { Router } from 'express';
import {getAbout, getCurrentUser, getSkillsList, getSocials, updateSkillsList} from '../controllers/user.controller.js';

const router = Router();

router.get('/', getCurrentUser);

router.get('/tech-list', getSkillsList);
router.put('/tech-list/:id', updateSkillsList);

router.get('/socials', getSocials);
router.get('/about', getAbout);

export default router;