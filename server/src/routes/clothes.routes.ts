import { Router } from 'express';
import { ClothesController } from '../controllers/clothes.controller';

const router = Router();
const clothesController = new ClothesController();

router.get('/', clothesController.getAll.bind(clothesController));
router.get('/:id', clothesController.getById.bind(clothesController));
router.post('/', clothesController.create.bind(clothesController));
router.put('/:id', clothesController.update.bind(clothesController));
router.delete('/:id', clothesController.delete.bind(clothesController));

export default router;
