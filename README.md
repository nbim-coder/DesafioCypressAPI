# DesafioCypressAPI

Foi realizado toda a instalação: cypress, npm, dependencias e todas as alterações necessárias para o desenvolvimento da automação api.
Segui a documentação para a realização dos testes. 

Teste de Cypress relacionada a um desafio, onde tenho que testar api de acordo com a documentação.

Instalações necessárias:

git
Node.js
Visual Studio Code
Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando git --version && node --version && npm --version em seu terminal de linha de comando.

Criamos uma pasta local no nosso computador E realizamos os procedimentos por meio dela

Instalação Cypress:

Abrimos o terminal na raiz do projeto.
Executamos o comando: npm install cypress --save-dev
Para abrir a interface do Cypress: npx cypress open
Para executar testes no modo headless (sem interface do usuário): npx cypress run
Após a instalação foi gerada a estrutura básica:

cypress/ ├── e2e/ ├── fixtures/ ├── support/ cypress.config.js

Execução dos testes:

Na pasta e2e nos arquivos, começamos a programar os testes

Utilizando o comando "describe", com a descrição de tudo o que terá dentro dos nosso testes.
Utilizamos os casos de teste com o comando "it".
A nossa base foi a documentação com suas devidas api e requisições.
Construímos de acordo com cenários especificados.
E assim finalizamos os testes.
