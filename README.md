# DevOps-starter

Dit is de starter github repository voor de DevOps course van Avans Informatica 's Hertogenbosch blok 11 DevOps.

Kijk op de blackboard course om de opdrachten voor deze repository te verbeteren.

# Week 2

[![Api CI](https://github.com/sgvanpelt/devops-assignments-sgvanpelt/actions/workflows/api.yml/badge.svg)](https://github.com/sgvanpelt/devops-assignments-sgvanpelt/actions/workflows/api.yml)
[![Frontend CI](https://github.com/sgvanpelt/devops-assignments-sgvanpelt/actions/workflows/frontend.yml/badge.svg)](https://github.com/sgvanpelt/devops-assignments-sgvanpelt/actions/workflows/frontend.yml)

# Week 3

docker network create devops-assignments

# Mongo

docker run --name mongo -d --rm --network devops-assignments -p 27017:27017 mongo:latest

-- voor mongo die container verwijderd waardoor data kwijt is:

docker run --rm -p 3000:3000 --network devops-assignments ${pwd}/data:/data/db --env DB=mongo --name api api

# Api

docker run --rm -p 3000:3000 --network devops-assignments --env DB=mongo --name api api

# Frontend

docker run --rm -p 4200:4200 --name frontend frontend

# Week 4
docker-compose up --build

# Week 5
docker swarm init

docker node ls 

docker stack deploy --compose-file docker-compose.yml sockshop

docker stack rm sockshop

docker swarm leave --force
