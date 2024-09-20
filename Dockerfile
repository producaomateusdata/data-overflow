# Use a imagem oficial do Node.js como base
FROM node:20-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Construa a aplicação Next.js
RUN npm run build

# Exponha a porta em que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
