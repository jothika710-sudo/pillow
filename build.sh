#!/bin/bash
# Login into Docker Hub
docker login -u $DOCKER_USERNAME -p $DOCKER_PASS

# Stopping the existing container
docker stop jothika
docker rm jothika

# Building the Docker image
docker build -t phone .

# Running a container from the created image
docker run -d --name jothika -p 80:80 phone

# Tagging the image for Docker Hub
docker tag phone jodin2101/phone:latest

# Pushing the image to Docker Hub
docker push jodin2101/phone:latest
