import { Schema, model } from 'mongoose';
import * as mongoose from 'mongoose';

mongoose.pluralize(null);

const databaseSchema = new Schema({
  field: String
}, {
  timestamps: true
});

const ProductModel = model('product', databaseSchema);

export default ProductModel;