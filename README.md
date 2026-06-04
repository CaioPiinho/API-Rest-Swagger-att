# 🚀 API REST com Express + Swagger

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.18-blue)
![Swagger](https://img.shields.io/badge/Swagger-3.0-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Status-Concluído-success)

## 📖 Sobre este projeto

Este repositório foi criado como parte do meu aprendizado na disciplina de **Sistemas Web**. Aqui desenvolvi uma **API REST completa** utilizando **Node.js** e **Express**, documentada de forma interativa com **Swagger**, implementando todas as operações do CRUD (Create, Read, Update, Delete).

O objetivo principal foi compreender na prática como funcionam as APIs REST, os métodos HTTP, os códigos de status e a importância da documentação para outros desenvolvedores.

---

## 🎯 O que aprendi com este projeto

### ✅ Conceitos teóricos

| Conceito | O que entendi |
|----------|---------------|
| **API REST** | Um conjunto de regras e padrões que permitem a comunicação entre sistemas diferentes |
| **Métodos HTTP** | GET (buscar), POST (criar), PUT (atualizar), DELETE (remover) - cada um com seu propósito específico |
| **Códigos de status** | 200 (sucesso), 201 (criado), 204 (sem conteúdo), 400 (erro do cliente), 404 (não encontrado), 500 (erro do servidor) |
| **CRUD** | Mapeamento perfeito: Create→POST, Read→GET, Update→PUT, Delete→DELETE |
| **Swagger/OpenAPI** | Padrão para documentar APIs de forma interativa e legível |

### ✅ Habilidades práticas desenvolvidas

1. **Criar um servidor com Express** - Configurar rotas, middlewares (`express.json()`) e tratamento de requisições
2. **Trabalhar com JSON** - Receber dados via `req.body` e enviar respostas com `res.json()`
3. **Manipular parâmetros** - `req.params` para parâmetros de URL e `req.query` para query strings
4. **Swagger UI** - Gerar documentação interativa automaticamente com `swagger-jsdoc` e `swagger-ui-express`
5. **Git e GitHub** - Versionar código, criar repositório, usar `.gitignore` e fazer push
6. **Manipulação de arrays** - Usar `find()`, `findIndex()`, `splice()` para gerenciar dados em memória

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Versão | Finalidade |
|------------|--------|-------------|
| **Node.js** | 18.x | Ambiente de execução JavaScript |
| **Express** | 4.18.x | Framework para construção da API |
| **Swagger UI Express** | 5.0.x | Interface visual da documentação |
| **Swagger JSDoc** | 6.2.x | Geração da documentação via comentários |
| **Nodemon** | 3.0.x | Reinicialização automática (desenvolvimento) |
| **Git/GitHub** | - | Versionamento e hospedagem do código |

---

## 📋 Funcionalidades da API

### Operações implementadas

| Método | Rota | Funcionalidade | Status HTTP | CRUD |
|--------|------|----------------|-------------|------|
| 🔵 GET | `/alunos` | Listar todos os alunos | 200 OK | Read |
| 🔵 GET | `/alunos/{id}` | Buscar aluno por ID | 200 OK / 404 Not Found | Read |
| 🟢 POST | `/alunos` | Cadastrar novo aluno | 201 Created | Create |
| 🟡 PUT | `/alunos/{id}` | Atualizar aluno existente | 200 OK / 404 Not Found | Update |
| 🔴 DELETE | `/alunos/{id}` | Remover aluno | 204 No Content / 404 Not Found | Delete |

---

## 📊 Detalhamento dos Endpoints

### 🔵 GET /alunos
**Descrição:** Retorna a lista completa de todos os alunos cadastrados.

**Requisição:**
```http
GET http://localhost:3000/alunos