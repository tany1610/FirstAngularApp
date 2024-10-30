import { ClothesData } from '../data/clothes.data';
import { Clothes } from '../models/clothes.model';

export class ClothesService {
    private clothesData = new ClothesData();

    async getAllClothes(): Promise<Clothes[]> {
        return this.clothesData.findAll();
    }

    async getClothesById(id: string): Promise<Clothes | null> {
        return this.clothesData.findById(id);
    }

    async createClothes(clothes: Clothes): Promise<Clothes> {
        return this.clothesData.create(clothes);
    }

    async updateClothes(id: string, clothes: Partial<Clothes>): Promise<Clothes | null> {
        return this.clothesData.update(id, clothes);
    }

    async deleteClothes(id: string): Promise<Clothes | null> {
        return this.clothesData.delete(id);
    }
}
