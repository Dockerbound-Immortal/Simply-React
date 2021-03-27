# MERN Stack

A basic MERN stack, there is another version of this in which Nginx is used a as a gateway to the application allowing for faster static file transfers, and more secure communication between the client and API.

This can be restructured into microservices. 

## Usage

To get started, make sure you have [Docker installed](https://docs.docker.com/docker-for-mac/install/) on your system, and then clone this repository.

Next, navigate in your terminal to the directory you cloned this, and spin up the containers for the web server by running `docker-compose up -d --build`.

- **react** - `:3000`
- **mongodb** - `:27017`
- **mongo-express** - `:8081`
- **node** - `:3000`

## Persistent Mongo Storage

Persistent storage is handled by a docker volume, this ensures that when you take down and spin up containers your data is not lost. 