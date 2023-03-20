import { Schema, model } from 'mongoose';

const testimonialSchema = new Schema(
  {
    customerImage: {
      type: String,
      required: false,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerComment: {
      type: String,
      required: true,
    },
  },
  { collection: 'testimonials' },
);

export default model('testimonial', testimonialSchema);
