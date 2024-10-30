import { ClothesModel, Clothes } from '../models/clothes.model';

export class ClothesData {
    async findAll(): Promise<Clothes[]> {
        return ClothesModel.find();
    }

    async findById(id: string): Promise<Clothes | null> {
        return ClothesModel.findById(id);
    }

    async create(clothes: Clothes): Promise<Clothes> {
        return ClothesModel.create(clothes);
    }

    async update(id: string, clothes: Partial<Clothes>): Promise<Clothes | null> {
        return ClothesModel.findByIdAndUpdate(id, clothes, { new: true });
    }

    async delete(id: string): Promise<Clothes | null> {
        return ClothesModel.findByIdAndDelete(id);
    }
}
