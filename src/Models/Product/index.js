import { model, Schema } from 'mongoose';

const productSchema = new Schema({
  marke: String,
  bauJahr: Number,
  kilometre: Number,
  Price: Number,
});

export default model('Product', productSchema);
