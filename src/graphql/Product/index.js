import gql from 'graphql-tag';
import Product from '../../Models/Product';

export const ProductTypeDef = gql`
  # extend type Query {
  #   book: String
  # }

  type Product {
    marke: String!
    bauJahr: Int
    kilometre: Int
    price: Int
  }
  input ProductInput {
    marke: String!
    bauJahr: Int
    kilometre: Int
    price: Int
  }

  type Mutation {
    addProduct(data: ProductInput): Product!
  }
`;

export const ProductResolvers = {
  Mutation: {
    async addProduct(_, { data: { marke, bauJahr, kilometre, price } }) {
      const newProduct = new Product({
        marke,
        bauJahr,
        kilometre,
        price,
      });

      const response = await newProduct.save();
      return { ...response._doc, id: response.id };
    },
  },
};
