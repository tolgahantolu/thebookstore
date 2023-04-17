"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var typeDefs = "#graphql\n  type Book {\n\tid: ID!\n    title: String!\n    genre: [String]!\n\tdesc: String!\n\tauthor: String\n\tprice: Int!\n\tdiscount: Boolean!\n\tdiscountPrice: Int!\n\tfeaturedImage: String\n\timages: [String]!\n\tadditionalInfo: [String]!\n\treviews: [String]\n\tbestSeller: Boolean\n  }\n\n  type Query {\n    getBooks: [Book]\n  }\n";
var _default = typeDefs;
exports.default = _default;