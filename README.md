<h2 align="center">
DevRun
</h2>

<h4 align="center"> 
	 👨‍💻
</h4>

<br/>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/erichmantai/devrun">

	
  <a href="https://www.linkedin.com/in/erichmantai/">
    <img alt="Made by ErichMantai" src="https://img.shields.io/badge/made%20by-erichmantai-%2304D361">
  </a>

</p>

<p align="center">
  <a href="#sobre-o-devrun">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>


## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

[NodeJS][nodejs] 💻 </br>
[Typescript][typescript] 📘 </br>
[Postgres][postgres] 🎲 </br>
[Jest][jest] 🃏 </br>
[Docker][docker] 🐳 </br>
[ReactJS][react] 💙 </br>


## Como usar ? 🤔

É necessário que você tenha algumas ferramentas instaladas antes de clonar este projeto. 

 - [Git](https://git-scm.com) 
 - [VSCode](https://code.visualstudio.com/) ou algum outro editor de sua prferência
 - [Node.js](https://nodejs.org/) (recomendado a versão LTS do site oficial) 
 - [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) como gerenciador de pacotes. *Ao instalar o **NodeJS** o **NPM** é instalado automaticamente*.
 - [Docker](https://www.docker.com/) **Recomendado**, mas não necessário. Este projeto possui suporte ao **Docker** o que facilita a configuração do nosso backend, por isso recomendamos 🐳


 ### Vamos começar!! ✍

Abra o terminal como administrador e clone o repositório:

```bash
# Clone o repositório
$ git clone https://github.com/erichmantai/devrun.git
```

## Rodando o frontend da aplicação

```bash
# Vá para o diretório devrun/
$ cd devrun
# Vá para o diretório frontend/
$ cd frontend
# Instale as dependências
$ yarn
# Inicie a aplicação
$ yarn start
```
Neste momento você deverá ter o seu browser aberto automaticamente rodando a aplicação na porta 3000 *http://localhost:3000*

## Rodando o backend da aplicação
É necessário abrir uma nova aba ou um novo terminal para este procedimento
```bash
# Volte um diretório, caso vc esteja em /devrun/frontend
$ cd ..
# Vá para o diretório backend/
$ cd backend
# Instale as dependências
$ yarn
# Executando os testes unitários da nossa aplicação
$ yarn jest
# Subindo os containers docker da nossa aplicação
$ docker-compose up -d
# Verificando os nossos containers que estão rodando
$ docker ps #deve listar 2 containers, o devrun e postgres
# Rodando as migrations
$ yarn typeorm migration:run
# Checando se nossa aplicação esta rodando corretamente 
$ docker logs devrun -f

# Caso tenha algum erro ao subir os containers docker use o comando abaixo para recria-los
$ docker-compose up --build --force-recreate
```
Neste momento temos a nossa aplicação com o backend e seus serviços em execução, com o backend rodando na porta 3333. *http://localhost:3333*

## Como contribuir

- Faça um fork;
- Crie uma nova branch com a sua feature: `git checkout -b my-feature`;
- Commit as suas alterações: `git commit -m 'feat: My new feature'`;
- Empurre para o repositório remoto a sua nova branch: `git push origin my-feature`.

Abra um pull request para analisarmos as mudanças.

Você também pode nos ajudar abrindo issues.

## :memo: License



Made with ♥ by Erich Mantai :wave: [Get in touch!](https://www.linkedin.com/in/erichmantai/)

[typescript]: https://www.typescriptlang.org/
[react]: https://reactjs.org/
[postgres]: https://www.postgresql.org/
[jest]: https://jestjs.io/pt-BR/
[docker]: https://www.docker.com/
[nodejs]: https://nodejs.org/en/
[react-bootstrap]: https://react-bootstrap.github.io/

