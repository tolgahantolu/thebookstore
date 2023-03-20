import { Schema, model } from 'mongoose';

const authorSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    novelPrize: {
      type: Number,
      required: true,
      trim: true,
      default: null,
    },
    bio: {
      type: String,
      required: true,
      trim: true,
    },
    books: {
      type: Array,
      required: true,
    },
    date: {
      type: Date,
      default: new Date(),
    },
  },
  { collection: 'authors' },
);

export default model('author', authorSchema);
