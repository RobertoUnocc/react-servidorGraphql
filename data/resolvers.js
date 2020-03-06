
class Cliente{
    constructor(id,{nombre,apellido,empresa,emails,edad,tipo,pedidos}){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.empresa=empresa;
        this.emails=emails;
        this.edad=edad;
        this.tipo=tipo;
        this.pedidos = pedidos;
    }
}

// 
const clientesDB= {};



// El resolver
const resolvers = {
    getCliente: ({id}) =>{
        return new Cliente(id,clientesDB[id]);
    },
    crearCliente: ( {input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientesDB[id] = input;
        return new Cliente(id,input);
    }
    
}

export default resolvers;


/*crear Cliente
    mutation {
  crearCliente( input:{
    nombre: "Carlos"
    apellido:"unocc"
    empresa:"Google"
    email:"carls@gmail.com"
  }) {
    id
  }
}


obtener Cliente
query{
  getCliente(id:"bdd120977beb74811fd8"){
    nombre
  }
}
*/