import mongoose, { ConnectOptions } from 'mongoose';

const db = (): void => {
  mongoose.set('strictQuery', false);

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      console.log('MongoDB connect: Success');
    })
    .catch((err) => {
      //  throw new Error(err.message);
      console.log('MongoDB connect: Fail', err.message);
    });
};

export default db;
