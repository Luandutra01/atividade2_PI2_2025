# API de Games

Esta aplicação é uma API REST desenvolvida com Node.js, Express e MongoDB para gerenciar registros de jogos. Os prints do funcionamento estão na pasta prints_postman

## Funcionalidades
- **CRUD de Games:** Criar, listar, buscar por ID, atualizar e remover jogos.
- **Validação:** Validação dos campos obrigatórios e tipos no cadastro de jogos.
- **Filtros:** Permite filtrar jogos por nome usando query string.

## Middlewares
- **express.json:** Faz o parsing do corpo das requisições em JSON.
- **Logger (exemplo):** Pode ser adicionado para registrar cada requisição recebida.
- **Handler de erros:** Captura erros de validação, cast de ID e outros, retornando mensagens apropriadas.

## Como rodar a aplicação
1. Instale as dependências:
   ```
   npm install
   ```
2. Configure a variável de ambiente `MONGODB_URI` com a string de conexão do MongoDB Atlas.
3. Inicie o servidor:
   ```
   node server.js
   ```
4. Acesse os endpoints via Postman ou outro cliente HTTP em `http://localhost:3000/games`.

## Estrutura de pastas
- `models/`: Schemas do Mongoose
- `routes/`: Rotas da API
- `db.js`: Conexão com o banco de dados
- `server.js`: Inicialização do servidor
