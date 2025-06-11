
import { Router } from "express";
import {logger} from '../middlewares/logger.js'
import { Produtos } from "../controllers/Products.js";

export const produtos = Router();

const cProdutos = new Produtos();

produtos.get('/', cProdutos.index);

produtos.post('/',logger,cProdutos.create);

