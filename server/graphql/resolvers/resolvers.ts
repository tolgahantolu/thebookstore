import bookSchema from '../../models/book';

const resolvers = {
  Query: {
    getBooks: async () => {
      try {
        const allBooks = await bookSchema.find();
        console.log(typeof allBooks);
        return allBooks;
      } catch (error) {
        //throw new Error(error.message);
        console.log(error.message);
      }
    },
  },
};

export default resolvers;
