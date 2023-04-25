# Docker

## Comandos

```
docker container run \
-dp 3306:3306 \
--name world-db \
--env MARIADB_USER=example-user \
--env MARIADB_PASSWORD=user-password \
--env MARIADB_ROOT_PASSWORD=root-secret-password \
--env MARIADB_DATABASE=world-db \
--volume world-db:/var/lib/mysql \
--network world-app \
mariadb:jammy
```
```
docker container run \
--name phpmyadmin \
-d \
-e PMA_ARBITRARY=1 \
-p 8080:80 \
--network world-app \
phpmyadmin:5.2.0-apache
```

- Creación de Redes
```
docker network create world-app
docker network connect world-app <ID_Contedor_1>
docker network connect world-app <ID_Contedor_2>
```

```
docker container run \
--name nest-app \
-w /app \
-p 81:3000 \
-v "$(pwd)":/app \
node:16-alpine3.16 \
sh -c "yarn install && yarn start:dev"
```