import { Sequelize } from "sequelize";
import db from "../db.js";

console.log("BANCO DE DADOS");

const def = db.define("usuarios", {
id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
},
nome: {
    type: Sequelize.STRING,
    allowNull: false,
},
email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
},
});

export default def;