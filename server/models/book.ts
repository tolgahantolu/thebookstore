import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: Array,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    images: {
      type: Array,
      required: true,
    },
    additionalInfo: {
      type: Object,
      required: true,
    },
    reviews: {
      type: Array,
      required: false,
    },
  },
  { collection: 'books' },
);

export default model('book', bookSchema);
