import { Schema, model } from 'mongoose';

const testimonialSchema = new Schema(
  {
    customerImage: {
      type: String,
      required: false,
      trim: true,
    },
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    customerComment: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: 'testimonials' },
);

export default model('testimonial', testimonialSchema);
