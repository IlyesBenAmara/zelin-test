import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

router.get('/:id', UserController.getUser);
router.post('/', UserController.createUser);
router.put('/:id', UserController.editUserDetails);

export default router;
