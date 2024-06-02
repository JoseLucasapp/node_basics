# NodeJS4Noobs

<h1 align="center">
  <img width="150" src="https://codigosimples.net/wp-content/uploads/2017/03/nodejs.png"/>
</h1>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Introdução
Node.js é um ambiente de execução JavaScript que permite executar código JavaScript no lado do servidor. Desenvolvido sobre o motor V8 do Google Chrome, ele é rápido e eficiente. Node.js é amplamente utilizado para criar aplicações web escaláveis e de alto desempenho.

## Pré-requistos

### Sistema Operacional
Node.js é compatível com os principais sistemas operacionais:

- **Windows** (Windows 7 e versões superiores)
- **macOS** (10.10 e versões superiores)
- **Linux** (diversas distribuições como Ubuntu, Debian, CentOS, etc.)

### Node.js
Você precisa instalar o Node.js na sua máquina. Aqui estão os passos para instalar:

**Windows:**
Acesse o site oficial do Node.js: nodejs.org.
Baixe o instalador recomendado para o Windows.
Execute o instalador e siga as instruções na tela.

**macOS:**
Acesse o site oficial do Node.js: nodejs.org.
Baixe o instalador recomendado para o macOS.
Execute o instalador e siga as instruções na tela.
Ou, se preferir, pode usar um gerenciador de pacotes como Homebrew:

```
brew install node

```
**Linux:**
Em distribuições baseadas em Debian (como Ubuntu):

```
sudo apt update
sudo apt install nodejs npm
```
Em distribuições baseadas em Red Hat (como CentOS):

```
sudo yum install nodejs npm
```
Ou você pode usar um gerenciador de versões como nvm (Node Version Manager) para instalar e gerenciar diferentes versões do Node.js:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install node
```

### npm (Node Package Manager)
O npm é instalado automaticamente com o Node.js. Ele é utilizado para gerenciar pacotes (bibliotecas e frameworks) que você pode usar em seus projetos Node.js.

### Conhecimento Básico de JavaScript
Como Node.js é baseado em JavaScript, é importante ter um entendimento básico da linguagem. Conceitos como variáveis, funções, loops, e manipulação de arrays são essenciais.

## Conteúdo do Repositório

### App_nodejs_padrao e apps
O básico de uma api em Node, como criar um servidor e as primeiras rotas.

### chat_multiroom
O primeiro contato com sockets, que vão conectar mais de uma pessoa em tempo real.

### instagram_clone
Essa aplicação é um conjunto de uma api com um frontend, mas sem fugir do mundo do Node, e será o primeiro contato com EJS, para a criação de telas para seu servidor de maneira direta.

### mmorpg_got
Aqui nós iremos criar um mini rpg utilizando os recursos aprendidos nos outros repositórios.

### noticias
Api de noticias
