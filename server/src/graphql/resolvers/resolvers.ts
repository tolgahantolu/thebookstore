import bookSchema from '../../models/book';

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
  },
};

export default resolvers;

//const books = [
//  {
//    title: 'The Awakening',
//    author: 'Kate Chopin',
//  },
//  {
//    title: 'City of Glass',
//    author: 'Paul Auster',
//  },
//];
//
//const resolvers = {
//  Query: {
//    books: () => books,
//  },
//};
//
//export default resolvers;
