import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    popular: {
      type: Boolean,
      required: true,
      trim: true,
      default: false,
    },
    date: {
      type: Date,
      default: new Date(),
    },
  },
  { collection: 'categories' },
);

export default model('category', categorySchema);
