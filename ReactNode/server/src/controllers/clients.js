import commands from "../models/clientsModel.js";

function findAll(req, res) {
  commands.findAll().then((result) => res.json(result));
}


function addClient(req, res) {
  commands.create({
    nome: req.body.nome,
    email: req.body.email,
  }).then((result) => res.json(result));
}

async function updateClient(req, res) {
  await commands.update(
    {
      nome: req.body.nome,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  commands.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteClient(req, res) {
  await commands.destroy({
    where: {
      id: req.params.id,
    },
  });

  commands.findAll().then((result) => res.json(result));
}

export default { findAll, addClient, updateClient, deleteClient };
