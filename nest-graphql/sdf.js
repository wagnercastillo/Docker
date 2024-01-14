
docker container run --name nest_app -w /app -p 80:3000 -v "$(pwd):/app" node:18-alpine3.18 sh -c "yarn install && yarn start:dev"
