const typeDefs = `#graphql
  type Book {
	id: ID!
    title: String!
    genre: [String]!
	desc: String!
	author: String
	price: Int!
	discount: Boolean!
	discountPrice: Int!
	featuredImage: String
	images: [String]!
	additionalInfo: [String]!
	reviews: [String]
	bestSeller: Boolean
  }

  type Author {
	id: ID!
	image: String!
	name: String!
	surname: String!
	novelPrize: Int
	bio: String!
	books: [Book]
	authorOTM: Boolean
  }
 
  type Testimonial {
	id: ID!
	customerImage: String!
	customerName: String!
	customerComment: String!
  }

  type Query {
    getBooks: [Book]
	getAuthors: [Author]
	getTestimonials: [Testimonial]
  }
`;

export default typeDefs;
