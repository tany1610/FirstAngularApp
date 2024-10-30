import mongoose, { Document, Schema } from 'mongoose';

export interface Clothes extends Document {
    name: string;
    image: string;
    price: number;
    rating: number;
}

const clothesSchema: Schema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true }
});

export const ClothesModel = mongoose.model<Clothes>('Clothes', clothesSchema);
