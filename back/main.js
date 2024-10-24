import express from "express"
import dotenv from "dotenv"
import router from "./src/router.js";
import cors from "cors";


dotenv.config();

const app = express();

app.use(cors({
    origin: '*', // Permitir todas las solicitudes de origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  }));
  
app.use(router);

const port = process.env.PORT;
app.listen(port);


console.log("Server listening at");
console.log("http://localhost:" + port) 
