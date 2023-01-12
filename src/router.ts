import { Router } from 'express';
import PostController from './PostController';
import Post from './Post';

const router: Router = Router();

router.post('/posts', PostController.create);
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.put('/posts', PostController.update);
router.delete('/posts/:id', PostController.delete);

export default router;
