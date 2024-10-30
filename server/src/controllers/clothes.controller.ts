import { Request, Response } from 'express';
import { ClothesService } from '../services/clothes.service';

export class ClothesController {
    private clothesService = new ClothesService();

    async getAll(req: Request, res: Response) {
        const clothes = await this.clothesService.getAllClothes();
        res.json(clothes);
    }

    async getById(req: Request, res: Response) {
        const clothes = await this.clothesService.getClothesById(req.params.id);
        res.json(clothes);
    }

    async create(req: Request, res: Response) {
        const newClothes = await this.clothesService.createClothes(req.body);
        res.status(201).json(newClothes);
    }

    async update(req: Request, res: Response) {
        const updatedClothes = await this.clothesService.updateClothes(req.params.id, req.body);
        res.json(updatedClothes);
    }

    async delete(req: Request, res: Response) {
        await this.clothesService.deleteClothes(req.params.id);
        res.status(204).send();
    }
}
