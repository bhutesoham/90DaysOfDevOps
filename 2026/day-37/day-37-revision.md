## Self-Assessment Checklist
Mark yourself honestly — **can do**, **shaky**, or **haven't done**:

- [ ] Run a container from Docker Hub (interactive + detached)
- [ ] List, stop, remove containers and images
- [ ] Explain image layers and how caching works
- [ ] Write a Dockerfile from scratch with FROM, RUN, COPY, WORKDIR, CMD
- [ ] Explain CMD vs ENTRYPOINT
- [ ] Build and tag a custom image
- [ ] Create and use named volumes
- [ ] Use bind mounts
- [ ] Create custom networks and connect containers
- [ ] Write a docker-compose.yml for a multi-container app
- [ ] Use environment variables and .env files in Compose
- [ ] Write a multi-stage Dockerfile
- [ ] Push an image to Docker Hub
- [ ] Use healthchecks and depends_on

---

## Quick-Fire Questions
Answer from memory, then verify:
1. What is the difference between an image and a container? 
- An image is the application running where as container is the runtime environment which takes care of dependencies of the image
2. What happens to data inside a container when you remove it?
- Container data is deleted unless stored in volumes or bind mounts.
3. How do two containers on the same custom network communicate?
- They communicate using container names via Docker’s internal DNS over the bridge network. 
4. What does `docker compose down -v` do differently from `docker compose down`?
- with `-v` also removes named and anonymous volumes created by the compose project.
5. Why are multi-stage builds useful?
- They reduce final image size by excluding build dependencies.
6. What is the difference between `COPY` and `ADD`?
- `COPY` just copies files; `ADD` can extract archives and fetch remote URLs.
7. What does `-p 8080:80` mean?
- it means map the container port 80 to host port 8080.
8. How do you check how much disk space Docker is using?
- `docker system df`
---
