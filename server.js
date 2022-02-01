// importar o express framework
const express = require('express'); // importa o modulo express framework
const app = express(); // inicializa um objeto de aplicações express


const lista_produtos = { 
    produtos: [
       { id: 1, descricao: 'Feijao', marca: 'Pink'},
       { id: 2, descricao: 'Arroz', marca: 'Tio João' },
       { id: 3, descricao: 'Iogurte', marca: 'Itambé'},
       { id: 4, descricao: 'Coca-Cola', marca: 'Coca-Cola' },
       { id: 5, descricao: 'Doce de Leite', marca: 'Viçosa'},
       { id: 6, descricao: 'Manteiga', marca: 'Porto Alegre' },
    ]
  }

app.use(express.json());
app.use(express.urlencoded())


// Create
app.post ('/produtos', (req, res) => { 
    let obj = req.body;
    obj.id = lista_produtos.produtos.length() + 1;

    lista_produtos.produtos.push(obj)
});

// Read
// todos
app.get('/produtos', (req, res) => {
    res.json(lista_produtos);
});

// um id em especifico
app.get('/produtos/:id', (req, res) => {
    let id = parseInt(req.params.id); // obtem o id do produto requerido

    let idx = lista_produtos.produtos.findIndex( o => o.id === id );

    if(idx != -1){
        res.status(200).json(lista_produtos.produtos[idx]);
    }else{
        res.status(404).json( { message: 'Item nao encontrado' } );
    }

});

// Update
app.put ('/produtos/:id', (req, res) => { })


// Delete
app.delete('/produtos/:id', (req, res) => {
    let id = parseInt(req.params.id); // obtem o id do produto requerido

    let idx = lista_produtos.produtos.findIndex( o => o.id === id );

    if(idx != -1){
        lista_produtos.produtos.splice(idx, 1);

        res.status(200).json({ message: 'Item excluído com sucesso' });
    }else{
        res.status(404).json( { message: 'Item nao encontrado' } );
    }

});






// abre o servidor HTTP na porta 3000
app.listen(3000, ()=>{
    console.log('Servidor rodando na URL http://localhost:3000');
});

