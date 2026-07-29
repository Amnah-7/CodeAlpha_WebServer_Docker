# Docker Web Server using Docker

## Project Overview

This project was developed as part of the **CodeAlpha DevOps Internship (Task 4)**.

The objective of this project is to deploy a static website using **Docker** and the **Nginx Web Server**. The website is containerized and accessible through a Docker container using port mapping.

## Technologies Used

- Docker
- Nginx
- HTML
- CSS
- JavaScript

## Features

- Static website deployment using Docker
- Responsive user interface
- Live digital clock
- Docker commands section
- Containerized web application

## Project Structure

```
CodeAlpha_WebServer_Docker/
│── Dockerfile
│── index.html
│── style.css
│── script.js
│── README.md
```

## Docker Commands

```bash
docker build -t codealpha-webserver .

docker run -d -p 8080:80 --name mywebserver codealpha-webserver

docker ps

docker stop mywebserver

docker rm mywebserver
```

## How to Run

1. Build the Docker image

```bash
docker build -t codealpha-webserver .
```

2. Run the container

```bash
docker run -d -p 8080:80 --name mywebserver codealpha-webserver
```

3. Open the application

```
http://localhost:8080
```

## Author

**Amnah**

CodeAlpha DevOps Internship