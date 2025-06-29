import gql from "graphql-tag";

export const MutationAndQueriesTypeDefs = gql`
  type Mutation {
    signUp(input: SignUpInput!): User!
    login(input: LoginInput!): AuthResponse!
    changePassword(input: ChangePasswordInput!): Response!
    recoverPassword(input: RecoverPasswordInput!): Response!
    createCategory(categoryName: String!): Category!
    createOrder(input: OrderInput!): OrderResponse!
    createProduct(input: ProductInput!): ProductResponse!
    createCompany(input: CompanyInput!): CompanyResponse!
    createBrand(input: BrandInput!): BrandResponse!
    createStore(input: StoreInput!): StoreResponse!
    getUploadSignature(input: SignatureInput): Signature!
    uploadVideo(input: VideoUploadInput!): VideoUploadResponse!
    addUser(input: AddUserInput!): User!
  }
  type Query {
    getUser: User!
    getUsers: [User!]!
    getCategory(_id: ID!): [Category!]!
    getCategories: [Category]!
    getOrder: [Order!]!
    getProduct: [Product!]!
    getProductById(_id: ID!): Product!
    getShop: [Companies!]!
    getShopById(_id: ID!): Companies!
    getSignature: Signature!
    getVideos: [VideoUpload!]!
    getVideoById(_id: ID!): VideoUpload!
  }
`;
