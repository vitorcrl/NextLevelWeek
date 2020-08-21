const express = require("express");
const server = express();

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses,
} = require("./pages");

//config nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});
//servidor
server
  //receber os dados do req.body
  .use(express.urlencoded({ extended: true }))
  //config arquivos estaticos (css,scripts images)
  .use(express.static("public"))
  //rotas dos arquivos
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  .listen(5500);

console.log("Servidor online:Ctrl+c pra desligar");
//para iniciar o server npm run dev, para reiniciar rs
