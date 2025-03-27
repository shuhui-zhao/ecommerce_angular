import { Schema, model, connect } from 'mongoose';

interface IProduct {
  id: Number;
  title: String;
  image: String;
  price: Number;
  stock: Number;
}

const ProductSchema = new Schema<IProduct>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

export const Product = model<IProduct>('Product', ProductSchema);

// run().catch((err) => console.log(err));

// async function run() {
//    // 4. Connect to MongoDB
//   await connect('mongodb://127.0.0.1:27017/test');

// const user = new User({
//   name: 'Bill',
//   email: 'bill@initech.com',
//   avatar: 'https://i.imgur.com/dM7Thhn.png',
// });
// await user.save();

// console.log(user.email); // 'bill@initech.com'
// }
