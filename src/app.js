import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js"

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) =>{
    console.error('erro de conexão', erro);
});

conexao.once("open", () =>{
    console.log("Conexão com o BD feito com sucesso");
})

const app = express();
app.use(express.json());//middleware


//quem vai cuidar das rotas é o express
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async(req, res) => {
    //chamar o modelo
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
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

//mongodb+srv://arthurazevedods:<password>@cluster0.vjss1c4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0