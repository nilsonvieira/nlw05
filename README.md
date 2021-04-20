# nlw05

# Instalação do Node e Dependências do Projeto
```bash
# Repo do nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# Verifica a Versão
nvm --version
# Instala o Node
nvm install node
# Verifica a versão do node e do npm
node -v
npm -v
# Use o NPM para instalar o yarn
npm install --global yarn
# Inicializa do yarn
yarn init -y
# Instala a Dependência express
yarn add express
# Habilita o Types da Express em modo Desenvolvimento (-D)
yarn add @types/express -D 
# Adiciona o Typescript Deps em modo Dev (-D)
yarn add typescript -D
# Inicializa o Typescript
yarn tsc --init
# Adiciona  a Dependência do Typescript para Node em modo Dev
yarn add ts-node-dev -D
# Executa em Dev
yarn dev
```
