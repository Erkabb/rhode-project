import gql from 'graphql-tag';

export const typeDefs = gql`
scalar Date
    type Product{
        _id:ID!
        name:String!
        detail:String
        unitPrice:String!
        size:String
        images:[String]!
        color:String!
        soldQuantity:String
        totalQuantity:String!
        discount:String
        brand: String
        category:[ID!]!
        createdAt: Date!
        updatedAt: Date!
    }   
    input ProductInput {
        name:String!
        detail:String
        unitPrice:String!
        size:String
        images:[String]!
        color:String!
        totalQuantity:String!
        brand: String   
        discount:String
        category:[ID!]!
    }
    type Response {
        message:String!
    }
    type Query {
        getProduct: [Product!]!
        getProductById(_id:ID!):Product!
    }
    type Mutation{
        createProduct(input: ProductInput!):Response!
    }
`