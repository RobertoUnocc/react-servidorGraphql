// import { buildSchema } from 'graphql';

// const schema= buildSchema(`
    
//     // schema.graphql
// `);

// export default schema;
    
import { resolvers } from './resolvers';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';

//importSchema -> la ubicacion del schema
const typeDefs = importSchema('data/schema.graphql');

const schema = makeExecutableSchema({typeDefs,resolvers});
export { schema};