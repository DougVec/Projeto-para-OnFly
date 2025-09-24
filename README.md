# Desafio n8n - Conector Customizado (Random.org)

Este repositório contém o código-fonte de um conector (nó) customizado para a plataforma n8n, como solução para o desafio proposto.

O conector `Random` se conecta à API pública do [Random.org](https://www.random.org/) para gerar números verdadeiramente aleatórios a partir de um valor mínimo e máximo.

## Funcionalidades

- **Nome do Nó:** Random
- **Operação:** True Random Number Generator
- **Inputs:**
    - `Min`: O valor mínimo para o número aleatório (inclusivo).
    - `Max`: O valor máximo para o número aleatório (inclusivo).
- **Output:** Retorna um campo `randomNumber` com o número gerado.
- **Ícone:** Possui um ícone customizado para fácil identificação.

---

## Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão LTS, ex: 22.x)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o ambiente n8n com o conector customizado.

### 1. Instalar Dependências do Conector

Primeiro, navegue até a pasta do conector e instale as dependências do Node.js. Isso é necessário para compilar o código TypeScript para JavaScript.

```bash
cd n8n-nodes-random
npm install
```

Após a instalação, compile o projeto:

```bash
npm run build
```

Isso criará uma pasta `dist` dentro de `n8n-nodes-random` com o código JavaScript compilado, que será utilizado pelo n8n.

### 2. Configurar e Iniciar o Ambiente n8n

O arquivo `docker-compose.yml` na raiz do projeto foi configurado para subir uma instância do n8n e um banco de dados PostgreSQL.

O Docker Compose também está configurado para montar a pasta `n8n-nodes-random` no diretório de conectores customizados da instância do n8n.

Para iniciar o ambiente, execute o seguinte comando na raiz do projeto (`c:\PROJETOONFLY`):

```bash
docker-compose up -d
```

O n8n estará disponível em [http://localhost:5678](http://localhost:5678) após alguns instantes.

### 3. Verificar o Conector no n8n

1.  Acesse a interface do n8n em [http://localhost:5678](http://localhost:5678).
2.  Crie um novo workflow.
3.  Clique no botão `+` para adicionar um novo nó.
4.  Na barra de busca, digite "Random".
5.  Você deverá ver o conector customizado com seu ícone. Adicione-o ao seu workflow.
6.  Configure os campos "Min" e "Max" e execute o nó para ver o resultado!

---

## Estrutura do Projeto

```
.
├── n8n-nodes-random/   # Pacote do conector customizado
│   ├── nodes/
│   │   └── Random/
│   │       ├── Random.node.ts    # Lógica e definição do nó
│   │       └── random.svg        # Ícone do nó
│   ├── package.json      # Dependências e scripts do conector
│   └── ...
├── docker-compose.yml  # Arquivo para orquestrar os contêineres n8n e Postgres
└── README.md           # Este arquivo
```

