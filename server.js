
import express from 'express';
import { logger } from './middlewares/logger.js';

const app = express();

app.use(express.json());
// app.use(logger);

const PORT=3000;

app.listen(PORT, () => console.log('Servidor rodando em http://localhost:3000'));

/*
//parametros não comentados
app.get('/produtos/:categoria/:id', (req, res) => {

  //navegagor: http://localhost:3000/produtos/tenis/7
  const {categoria, id} = req.params;

  res.send(`Produto de categoria ${categoria} e id ${id}.`);
  //resposta: Produto de categoria tenis e id 7
});
*/

// parâmetro nomeados
app.get('/produtos', (req, res) => {
  //navegagor: http://localhost:3000/produtos?pagina=1&limite=10
  const {pagina, limite} = req.query;

  res.send(`Página ${pagina} de ${limite}.`)
});

app.post('/produtos',logger, (req, res) => {
  const {nome, preco} = req.body;
  const id = req.user_id;


  res.status(201).json({id,nome, preco});
});