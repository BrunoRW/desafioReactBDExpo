import express from "express";
import users from "./src/controllers/clients.js";

const routes = express.Router();

routes.get("/users", users.findAll);
routes.post("/users", users.addClient);
routes.put("/users/:id", users.updateClient);
routes.delete("/users/:id", users.deleteClient);

console.log("BD")

export { routes as default };
