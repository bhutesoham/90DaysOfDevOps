## Task

Today's goal is to **understand what Docker is and run your first container**.

You will:

- Learn why containers exist and how they differ from VMs
- Install Docker on your machine
- Run and explore containers from Docker Hub

---

## Challenge Tasks

### Task 1: What is Docker?

Research and write short notes on:

- What is a container and why do we need them?
  - Containers are lightweight, portable units that package software code libraries and dependencies together , esuring application run quickly and reliably across different computing environments.
  - We need them because they ensure environmental consistancy , portability , efficiency (kernel sharing with host OS),Isolation and security

- Containers vs Virtual Machines — what's the real difference?

| Feature              | Container                                                             | Virtual Machine                                                         |
| -------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Virtualization level | Operating system level                                                | Hardware level                                                          |
| Operating system     | Shares host OS kernel                                                 | Guest OS (full OS instance)                                             |
| Size                 | Megabytes (MBs)                                                       | Gigabytes (GBs)                                                         |
| Boot time            | Seconds                                                               | Minutes                                                                 |
| Resource usage       | Lower                                                                 | Higher                                                                  |
| Isolation            | Process-level                                                         | Hardware-level                                                          |
| Portability          | Highly portable                                                       | Less portable                                                           |
| Management           | Typically managed by container orchestration tools (e.g., Kubernetes) | Managed by hypervisors (e.g., VMware, KVM) or cloud platforms           |
| Use cases            | Microservices, CI/CD, scalable cloud-native applications              | Running multiple OS environments, legacy applications, strong isolation |

- What is the Docker architecture? (daemon, client, images, containers, registry)

Draw or describe the Docker architecture in your own words.

- Docker architecture has four important points.
  - Docker client - is the primary way that many Docker users interact with Docker. When you use commands such as docker run, the client sends these commands to dockerd,resides on the host system.
  - Docker Engine - It is the core of the docker platform and it has componenets like CLI, REST API, daemon
  - Docker daemon - can be on host system or remote. responsible for pulling and managing the services in repository.
  - Docker registry - It stores docker images, it is public registry.

![alt text](docker-architecture.webp)

---

### Task 2: Install Docker

1. Install Docker on your machine (or use a cloud instance)
2. Verify the installation
3. Run the `hello-world` container
4. Read the output carefully — it explains what just happened

   ```bash

   To generate this message, Docker took the following steps:
   1. The Docker client contacted the Docker daemon.
   2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
   (arm64v8)
   3. The Docker daemon created a new container from that image which runs the
   executable that produces the output you are currently reading.
   4. The Docker daemon streamed that output to the Docker client, which sent it
   to your terminal.

   ```

---

### Task 3: Run Real Containers

1. Run an **Nginx** container and access it in your browser `docker run -d -p 80:80 nginx`
2. Run an **Ubuntu** container in interactive mode — explore it like a mini Linux machine - `docker run -itd ubuntu`
3. List all running containers - `docker ps`
4. List all containers (including stopped ones) - `docker ps -a`
5. Stop and remove a container - `docker stop <container_id> & docker rm <container_id>`

---

### Task 4: Explore

1. Run a container in **detached mode** — what's different?
2. Give a container a custom **name**
3. Map a **port** from the container to your host
4. Check **logs** of a running container
5. Run a command **inside** a running container
   `docker exec -it <container_id> bash `

---

## Hints

- `docker run`, `docker ps`, `docker stop`, `docker rm`
- Interactive mode: `-it` flag
- Detached mode: `-d` flag
- Port mapping: `-p host:container`
- Naming: `--name`
- Logs: `docker logs`
- Exec into container: `docker exec`

---

## Why This Matters for DevOps

Docker is the foundation of modern deployment. Every CI/CD pipeline, Kubernetes cluster, and microservice architecture starts with containers. Today you took the first step.

---
