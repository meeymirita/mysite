import { Router } from 'express';
import {getAbout, getCurrentUser, getSocials, getTechList} from '../controllers/user.controller.js';

const router = Router();

router.get('/', getCurrentUser);
router.get('/tech-list', getTechList);
router.get('/socials', getSocials);
router.get('/about', getAbout);

export default router;