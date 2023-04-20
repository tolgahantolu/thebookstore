import bookSchema from '../../models/book';
import authorSchema from '../../models/author';

const resolvers = {
  Query: {
    getBooks: async (): Promise<any> => {
      try {
        const allBooks = await bookSchema.find();
        return allBooks;
      } catch (error) {
        //throw new Error(error.message);
        console.log(error.message);
      }
    },

    getAuthors: async (): Promise<any> => {
      try {
        const allAuthors = await authorSchema.find();
        return allAuthors;
      } catch (error) {
        //throw new Error(error.message);
        console.log(error.message);
      }
    },
  },
};

export default resolvers;
