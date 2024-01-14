
# Usando la imagen bajo mi arquitectura
# FROM  node:19.2-alpine3.16

# Usando la imagen con la plataforma
# FROM --platform=linux/amd64 node:19.2-alpine3.16

# Usando la imagen con multiples arquitecturas
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16

# Dependencias de desarrollo
FROM  node:19.2-alpine3.16 as deps
#cd /app
WORKDIR /app
#Destino app
COPY package.json ./
#Instalar dependencias
RUN npm install

# Nuevo stage: Build y Tests
FROM  node:19.2-alpine3.16 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules 
COPY . . 
RUN npm run test

# Nuevo stage, Dependencias de Producción
FROM  node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

# Nuevo stage: Ejecutar la App
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD ["node", "app.js"]



# #Destino app
# COPY . .

# # Realizar test
# RUN npm run test

# # Eliminar archivos y directorios no necesarios
# RUN rm -rf tests
# RUN rm -rf node_modules

# # Instalar las dependencias de producción
# RUN npm install --prod

# #Comando
# CMD ["node", "app.js"]


#  docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t wagnercastillo117/cron-ticket:latest --push .