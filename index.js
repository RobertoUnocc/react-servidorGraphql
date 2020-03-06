import express from 'express';
// graphql
import graphqlHTTP from 'express-graphql';
import Schema from './data/schema';
// resolver
import resolvers from './data/resolvers'

const app = express();
const root= resolvers;


app.get('/', (req, res) => {
    res.send('Todo Listo');
})


app.use('/graphql', graphqlHTTP({
    // que esquema va a utilizar
    schema: Schema, //schema: schema->schema,
    // el resolver se pasa como rootValue
    rootValue: root,
    // utilizar graphiql
    graphiql: true
}))

app.listen(3000, () => console.log('El servidor esta funcionando en el puero 3000'))