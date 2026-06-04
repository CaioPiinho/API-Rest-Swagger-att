const express = require("express");
const app = express();
const PORT = 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Alunos",
      version: "1.0.0",
      description: "API REST de exemplo para a displicipla de Sistemas Web"
    },
    server: [{ url: "http://localhost:3000" }]
  },
  apis: ["./index.js"]
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /alunos:
 *  get:
 *   summary: Lista todos os alunos
 *   responses:
 *   200:
 *   description: Lista de alunos retornada com sucesso
 */

app.get("/alunos", (req, res) => {
  res.json(alunos);
});

/**
 * @swagger
 * /alunos:
 *   post:
 *   summary: Cadastro um novo aluno
 *   requestBody:
 *   required: true
 *   content:
 *   application/json:
 *   schema:
 *   type: object
 *   properties:
 *   nome:
 *   type: string
 *   curso:
 *   type: string
 *   responses:
 *   201:
 *   description: Aluno criado com sucesso
 */

app.post("/alunos", (req, res) => {
  const { nome, curso } = req.body;
  const novoAluno = {
    id: alunos.length ? alunos[alunos.length -1].id + 1 : 1,
    nome, curso
  };
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

/**
 * @swagger
 * /alunos/{id}:
 * put:
 * summary: Atualiza os dados de um aluno
 * parameters:
 * - in: path
 * nome: id
 * required: true
 * schema:
 * type: integer
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * nome { type: string }
 * curso { type: string }
 * respondes:
 * 200:
 * description: Aluno atualizado com sucesso
 * 404:
 * description: Aluno não encontrado
 */

app.put("/alunos/:id", (req, res) => {
  const aluno = alunos.find(a => a.id === Number(req.params.id));
  if (!aluno) {
    return res.status(404).json({ mensagem: "Aluno não encontrado" });
  }
  const { nome, curso } = req.body;
  aluno.nome = nome || aluno.nome;
  aluno.curso = curso || aluno.curso;
  res.json(aluno);
});

/**
 * @swagger
 * /alunos/{id}:
 * delete:
 * summary: Remove um aluno
 * parameters:
 * - in: path
 * nome: id
 * required: true
 * schema:
 * type: integer
 * responses:
 * 200:
 * description: Aluno removido com sucesso
 * 404:
 * description: Aluno não encontrado
 */

app.delete("/alunos/:id", (req, res) => {
  const indice = alunos.findIndex(a => a.id === Number(req.params.id));
  if (indice === -1) {
    return res.status(404).json({ mensagem: "Aluno não encontrado" });
    alunos.splice(indice, 1);
    res.status(204).send();
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
  console.log(`Documentação Swagger em http://localhost:${PORT}/api-docs`);

app.use(express.json());

let alunos = [
  { id: 1, nome: "Ana Souza", curso: "Sistemas Web" },
  { id: 2, nome: "Bruno Lima", curso: "Banco de Dados" }
];

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/alunos", (req, res) => {
  res.json(alunos);
});

app.get("/alunos/:id", (req, res) => {
  const alunos = alunos.find(a => a.id === Number(req.params.id));
  if (!alunos) {
    return res.status(404).json({ mensagem: "Aluno não encontrado" });
  }
res.json(aluno);
});

app.put("/alunos/:id", (req, res) => {
  const alunos = alunos.find(a => a.id === Number(req.params.id));
  if (!alunos) {
    return res.status(404).json({ mensagem: "Aluno não encontrado" });
  }
  const { nome, curso } = req.body;
  aluno.nome = nome || aluno.nome;
  aluno.curso = curso || aluno.curso;
  res.json(aluno);
});

app.delete("/alunos/:id", (req, res) => {
  const indice = alunos.findIndex(a => a.id === Number(req.params.id));
  if (indice === -1) {
    return res.status(404).json({ mensagem: "Aluno não encontrado" });
  }
  alunos.splice(indice, 1);
  res.status(204).send();
});