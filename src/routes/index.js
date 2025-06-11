
  import { Router } from "express";
  import { produtos } from "./products.js";

 export const rotas = Router();

  rotas.use('/produtos', produtos);