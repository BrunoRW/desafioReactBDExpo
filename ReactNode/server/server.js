import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";
import cors from "cors";


const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

console.log("CONNECTED")

db.sync(() => console.log(`BD conectado: ${process.env.DB_NAME}`));

app.listen(3000, e=> console.log("server aberto porta 3000"));

