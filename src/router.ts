import { Router } from "express";
import { createCategory } from "./app/useCases/createCategory";
import { listCategories } from "./app/useCases/listCategories";
export const router = Router();

//rota Listar caterias
router.get("/categories", listCategories);
//Rota Create Category
router.post("/categories", createCategory);