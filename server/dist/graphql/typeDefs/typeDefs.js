"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var typeDefs = "#graphql\n  type Book {\n\tid: ID!\n    title: String!\n    genre: [String]!\n\tdesc: String!\n\tauthor: String\n\tprice: Int!\n\tdiscount: Boolean!\n\tdiscountPrice: Int!\n\tfeaturedImage: String\n\timages: [String]!\n\tadditionalInfo: [String]!\n\treviews: [String]\n\tbestSeller: Boolean\n  }\n\n  type Author {\n\tid: ID!\n\timage: String!\n\tname: String!\n\tsurname: String!\n\tnovelPrize: Int\n\tbio: String!\n\tbooks: [Book]\n\tauthorOTM: Boolean\n  }\n \n  type Testimonial {\n\tid: ID!\n\tcustomerImage: String!\n\tcustomerName: String!\n\tcustomerComment: String!\n  }\n\n  type Query {\n    getBooks: [Book]\n\tgetAuthors: [Author]\n\tgetTestimonials: [Testimonial]\n  }\n";
var _default = typeDefs;
exports.default = _default;