const mongoose = require('mongoose')

//configurando o mongoose
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://localhost/aprendendo", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB conectado")
    }).catch((erro) => {
        console.log("houve um erro ao se connectar ao mongodb" + erro)
    })

// Model-Usuarios
//defenindo o model
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})
//colection
    const user = mongoose.model('usuarios', UsuarioSchema)
    new user({
        nome: "Jorge",
        sobrenome: "Cardoso",
        email: "email@email.com",
        idade: 21,
        pais: "Portugal"
    }).save().then(() => {
        console.log('Usuario criado com sucesso')
    }).catch((err) =>{
        console.log("Houve um erro ao registar o usuario" + err)
    })
