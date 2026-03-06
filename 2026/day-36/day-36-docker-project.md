# Docker Project: Dockerize a Full Application

## Challenge Tasks

### Task 1: Pick Your App

Choose **one** of these (or use your own project):
- A **Python Flask/Django** app with a database

- For the task selected github repo was `https://github.com/bhutesoham/Flask-Web-App-with-MySQL-Database-Authentication-and-Notes-Feature.git`

---
### Task 2: Write the Dockerfile
1. Create a Dockerfile for your application
2. Use a **multi-stage build** if applicable
3. Use a **non-root user**
4. Keep the image **small** — use alpine or slim base images
5. Add a `.dockerignore` file
- refer the `Dockerfile`
---

### Task 3: Add Docker Compose
Write a `docker-compose.yml` that includes:
1. Your **app** service (built from Dockerfile)
2. A **database** service (Postgres, MySQL, MongoDB — whatever your app needs)
3. **Volumes** for database persistence
4. A **custom network**
5. **Environment variables** for configuration (use `.env` file)
6. **Healthchecks** on the database
- Refer the `docker-compose.yml`

---

### Task 4: Ship It
1. Tag your app image
2. Push it to Docker Hub
3. Share the Docker Hub link
4. Write a `README.md` in your project with:
   - What the app does
   - How to run it with Docker Compose
   - Any environment variables needed

---

### Task 5: Test the Whole Flow

1. Remove all local images and containers
2. Pull from Docker Hub and run using only your compose file
3. Does it work fresh? If not — fix it until it does

---


### Learnings - 

- alongwith the recommended requirements the to-do app needs some more, thoes are list in `requirements.txt`
**important to adapted it**
- Inside `main.py` , the database connection needs to be modified . 
```bash
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:root@db:3306/notesdb"
```
- The  Flask app is binding to 127.0.0.1 inside the container. This means it's only accessible from inside that container, not from your host machine. Docker cannot forward the port if the app listens only on localhost.
inside `main.py` edit the function `app.run(host="0.0.0.0", port=5000, debug=True)` so that it listens on all the network interfaces, including docker port mapping.



- If some one wants to use distroless image in deployer stage replace the line of `RUN chown -R sob:sob /app` and `USER sob` with `USER 1000:1000`. This allows container to run the process as presnet user inside container.

- In case you have the already build image on docker hub , you do not need to build it again rather add the reference in your yaml file 
```bash
services:
  flaskapp:
    image: soham/flaskapp:v1  # Use the Docker Hub image    
    ports:
      - "5000:5000"
    depends_on:
      - db
```


