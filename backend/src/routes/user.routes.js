import { Router } from 'express';
import {getCurrentUser, getTechList} from '../controllers/user.controller.js';

const router = Router();

router.get('/', getCurrentUser);
router.get('/tech-list', getTechList);

export default router;