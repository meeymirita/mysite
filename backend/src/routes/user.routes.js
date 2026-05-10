import { Router } from 'express';
import {getCurrentUser, getSocials, getTechList} from '../controllers/user.controller.js';

const router = Router();

router.get('/', getCurrentUser);
router.get('/tech-list', getTechList);
router.get('/socials', getSocials);

export default router;