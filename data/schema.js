
import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

// import { importSchema } from 'graphql-import';
// const typeDefs =  importSchema('data/schema.graphql');
import {typeDefs} from './schemaGraphql'


const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
