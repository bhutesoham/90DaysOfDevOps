# Docker Cheat Sheet

## Container Commands

  ----------------------------------------------------------------------------------------
  Command                 Description             Example
  ----------------------- ----------------------- ----------------------------------------
  `docker run`            Create and start a new  `docker run -d -p 8080:80 nginx`
                          container               

  `docker ps`             List running containers `docker ps`

  `docker ps -a`          List all containers     `docker ps -a`

  `docker stop`           Stop a running          `docker stop container_id`
                          container               

  `docker rm`             Remove a container      `docker rm container_id`

  `docker exec`           Execute a command in a  `docker exec -it container_id /bin/sh`
                          running container       

  `docker logs`           View container logs     `docker logs container_id`
  ----------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Image Commands

  -----------------------------------------------------------------------------------------
  Command                 Description             Example
  ----------------------- ----------------------- -----------------------------------------
  `docker build`          Build an image from a   `docker build -t myapp:v1 .`
                          Dockerfile              

  `docker pull`           Download image from     `docker pull nginx`
                          registry                

  `docker push`           Push image to registry  `docker push username/myapp:v1`

  `docker tag`            Tag an image            `docker tag myapp:v1 username/myapp:v1`

  `docker images` /       List images             `docker images`
  `docker image ls`                               

  `docker rmi`            Remove an image         `docker rmi image_id`
  -----------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Volume Commands

  ------------------------------------------------------------------------------------
  Command                   Description             Example
  ------------------------- ----------------------- ----------------------------------
  `docker volume create`    Create a volume         `docker volume create myvolume`

  `docker volume ls`        List volumes            `docker volume ls`

  `docker volume inspect`   Show volume details     `docker volume inspect myvolume`

  `docker volume rm`        Remove a volume         `docker volume rm myvolume`
  ------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Network Commands

  ----------------------------------------------------------------------------------------------------
  Command                    Description             Example
  -------------------------- ----------------------- -------------------------------------------------
  `docker network create`    Create a network        `docker network create mynetwork`

  `docker network ls`        List networks           `docker network ls`

  `docker network inspect`   Inspect network         `docker network inspect mynetwork`

  `docker network connect`   Connect container to    `docker network connect mynetwork container_id`
                             network                 
  ----------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Docker Compose Commands

  -------------------------------------------------------------------------
  Command                  Description             Example
  ------------------------ ----------------------- ------------------------
  `docker compose up`      Create and start        `docker compose up -d`
                           containers              

  `docker compose down`    Stop and remove         `docker compose down`
                           containers, networks    

  `docker compose ps`      List compose containers `docker compose ps`

  `docker compose logs`    View logs from services `docker compose logs`

  `docker compose build`   Build services          `docker compose build`
  -------------------------------------------------------------------------

------------------------------------------------------------------------

## Cleanup Commands

  -----------------------------------------------------------------------
  Command                 Description             Example
  ----------------------- ----------------------- -----------------------
  `docker system prune`   Remove unused           `docker system prune`
                          containers, networks,   
                          images                  

  `docker image prune`    Remove unused images    `docker image prune`

  `docker volume prune`   Remove unused volumes   `docker volume prune`

  `docker system df`      Show Docker disk usage  `docker system df`
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## Common Dockerfile Instructions

  -------------------------------------------------------------------------------------------------
  Instruction             Description             Example
  ----------------------- ----------------------- -------------------------------------------------
  `FROM`                  Base image              `FROM python:3.11-slim`

  `RUN`                   Execute command during  `RUN apt-get update && apt-get install -y curl`
                          build                   

  `COPY`                  Copy files from host to `COPY . /app`
                          container               

  `WORKDIR`               Set working directory   `WORKDIR /app`

  `EXPOSE`                Document port used by   `EXPOSE 5000`
                          container               

  `CMD`                   Default command to run  `CMD ["python","app.py"]`
                          container               

  `ENTRYPOINT`            Main command that       `ENTRYPOINT ["python"]`
                          always runs             
  -------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Helpful Tips

-   Use `-d` for **detached mode**
-   Use `-it` for **interactive terminal**
-   Use `--name` to assign a container name
-   Use `.dockerignore` to avoid copying unnecessary files
