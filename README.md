# Banco de dados relacional

Um banco de dados relacional é um conjunto de informações que organiza dados em relações predefinidas, em que os dados são armazenados em uma ou mais tabelas (ou "relações") de colunas e linhas, facilitando a visualização e a compreensão de como as diferentes estruturas de dados se relacionam.

## Proposito:

Projeto desenvolvido com  proposito de aprendizagem sobre bancos de dados relacional e a utilização de ferramentas back-end como node.js.

## Ferramentas Utilizadas:

>Teste de rotas: Insomnia
  - Ferramenta que auxilia na utilização e teste das rotas criadas.

>Visualização do banco de dados: Beekeeper Studio
  - Ferramenta que auxilia na visualização e melhor compreensão das tabelas e seus relacionamentos entre sí.

>Editor de código: Visual Studio Code
  - Editor de código utilizado para desenvolver o projeto.

## Bibliotecas Utilizadas:

### Desenvolvimento:

  - bcryptjs: Utilizada para fazer o processo de criptografia de senhas dos usuários.

  - nodemon: Auxilia no processo de desenvolvimento realizando o processo de recarregar o servido automaticamente.

### Dependências:

Necessário a instalação dos pacotes Nodejs através do terminal. Quando instalado, automaticamente realizara a instalação de todas as dependências salvas nos arquivos package-lock.json e package.json, trazendo a pasta node_modules.

  >Instalação bibliotecas json:
    npm install

  - express: Biblioteca utilizada para o gerenciamento das rotas.

  - express-async-errors: Biblioteca necessária para o tratamentos de erros de rotas.

  - knex: Query-builder (construtor de consultas), Construtor de consulta que permite construir instruções SQL independente do banco de dados utilizado.

  - SQLite: Biblioteca do banco de dados utilizado.

  - SQLite3: Utilizado para acessar e auxiliar na criação do tipo de banco de dados.

### Scripts:

Para facilitar na execução das múltiplas ferramentas utilizadas foi criado alguns comandos para se executar diretamente no terminal.

  >Inicialização do servido:
    
    - Padrão: npm run start

    - Nodemon: npm run dev

  >Biblioteca knex:

    - Inicialização: npm run knex

    - Criar tabela notes: npm run note

    - Criar tabela Tags: npm run tag

    - Executar as tabelas: npm run migrate

## Arquitetura:

O projeto conta com uma arquitetura que separa os arquivos por funcionalidades.

  - src: Pasta raiz

  - routes: Pasta responsável pela união de rotas das tabelas: users, notes e tags.

  - controller: Pasta responsável pelos métodos de cadastro e criação de novos usuários, notas e tags.

  - utils: Pasta raiz do middleware. Funções com acesso ao objeto de solicitação(request), reposta(response) e sua próxima função(next). Padronizando repostas para possíveis exceções não previstas no código.

  - database: Pasta responsável pela criação e armazenagem das tabelas  e dados dos usuários, notas e tags.

  - server.js: Pasta de entrada e saída das requisições e respostas dos usuários.

  - knexfile.js: Arquivo de configuração e conexão da biblioteca knex com a aplicação.

  - .gitignore: Arquivo que impede a pasta node_modules de sofrer upload, pois é pesada e de fácil instalação.