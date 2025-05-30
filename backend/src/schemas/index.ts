import {mergeTypeDefs} from '@graphql-tools/merge';
import {typeDefs as AuthTypeDefs} from './auth.schema';
import {typeDefs as ProductTypeDefs} from './product.schema';
import {typeDefs as CategoryTypeDefs} from './category.schema';
import {typeDefs as OrderTypeDefs} from "@/schemas/order.schema";
import {shopTypeDef} from "@/schemas/shop.schema";
import {MutationAndQueriesTypeDefs} from "@/schemas/mutation.schema";

export const typeDefs = mergeTypeDefs([AuthTypeDefs, ProductTypeDefs, CategoryTypeDefs, OrderTypeDefs, shopTypeDef, MutationAndQueriesTypeDefs]);