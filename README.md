# Dockerize NodeJS example app
A simple example NodeJS + Mongodb to illustrate how to dockerize a NodeJS for local development.

Original tutorial - https://medium.com/@sunnykay/docker-development-workflow-node-express-mongo-4bb3b1f7eb1e

## Getting Started
To start local development, simply start up the images with docker compose.
```bash
docker compose up
```

## Building Docker
### NodeJS
Building the NodeJS container
```bash
docker build -t node-test:0.1 .
```

## Running Docker
### NodeJS
Running the NodeJS container
```bash
docker run -ti node-test:0.1
```
