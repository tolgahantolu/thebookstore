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

  type Query {
    getBooks: [Book]
  }
`;

export default typeDefs;
