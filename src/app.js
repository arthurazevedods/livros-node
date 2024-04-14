import express from "express";

const app = express();
app.use(express.json());//middleware

const livros = [
    {
        id: 1,
        titulo: "O senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
];

function buscaLivro(id) {
    return livros.findIndex(livro =>{
        return livro.id === Number(id);
    });
}

//quem vai cuidar das rotas é o express
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

//:sinaliza que o id vai ser variável
app.get('/livros/:id', (req,res) =>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros",(req,res) =>{
    livros.push(req.body);
    res.status(201).send("livro cadastrado");
});

app.put("/livros/:id", (req,res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req,res) =>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro Removido");//ou 200 ou 204
});

export default app;