//import http from "http";
import app from "./src/app.js";
const PORT = 3000;

app.listen(PORT, () =>{
    console.log("servidor escutando!")
});

// (req,res) - callback
/*

const rotas = {
    "/": "-> Curso de Node.js e Express", //rota base
    "/livros": "-> Entrei na rota livros",
    "/autores": "-> Entrei na rota autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type":"text/plain"}); //cabeçalho HTTP - 200(ok) e o tipo de conteúdo
    //res.end("Curso de Node.js");//tipo de conteúdo
    res.end(rotas[req.url]); //

//alguém se conectou ao servidor na porta 3000
server.listen(PORT, () =>{
    console.log("servidor escutando!")
});
});
*/



