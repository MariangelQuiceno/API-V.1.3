import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProduct,
} from "./controllers/productController";

// Crear una instancia de Express
const app = express();

// Middleware para procesar el body de las solicitudes en formato JSON
app.use(bodyParser.json());

// Definir rutas y asociarlas a los controladores correspondientes
app.post("/products", createProduct);
app.put("/products/:id", updateProduct);
app.delete("/products/:id", deleteProduct);
app.get("/products", getProducts);
app.get("/products/:id", getProduct);

// Manejador de rutas no encontradas


// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
