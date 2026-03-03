## Challenge Tasks

### Task 1: Your First Dockerfile

1. Create a folder called `my-first-image`
2. Inside it, create a `Dockerfile` that:
   - Uses `ubuntu` as the base image
   - Installs `curl`
   - Sets a default command to print `"Hello from my custom image!"`
3. Build the image and tag it `my-ubuntu:v1`
4. Run a container from your image

**Verify:** The message prints on `docker run`

```bash

FROM ubuntu:22.04

RUN apt -y update && apt -y install curl

WORKDIR /app

CMD ["echo","Hello from custom image!"]

```

---

### Task 2: Dockerfile Instructions

Create a new Dockerfile that uses **all** of these instructions:

- `FROM` — base image
- `RUN` — execute commands during build
- `COPY` — copy files from host to image
- `WORKDIR` — set working directory
- `EXPOSE` — document the port
- `CMD` — default command

Build and run it. Understand what each line does.

```bash
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

CMD ["python","app.py"]

```

---

### Task 3: CMD vs ENTRYPOINT

1. Create an image with `CMD ["echo", "hello"]` — run it, then run it with a custom command. What happens?
   - single command -> `docker run <container_name> echo "command"` . it lets us run single command without writing the dockerfile
2. Create an image with `ENTRYPOINT ["echo"]` — run it, then run it with additional arguments. What happens?
   - `ENTRYPOINT` sets a fixed command that cannot be overridden by `CMD` (unless you use `--entrypoint`).
     Anything you pass to docker run becomes arguments to `echo`. (`docker run --entrypoint /bin/bash my-image -c "echo Test"` to override )
3. Write in your notes: When would you use CMD vs ENTRYPOINT?

- CMD → default command, can be overridden
- ENTRYPOINT → fixed command, arguments passed at docker run
- Combining ENTRYPOINT + CMD → powerful for creating reusable containers

```bash
FROM ubuntu:20.04
ENTRYPOINT ["echo"]
CMD ["echo","Hello World"]
```

---

### Task 4: Build a Simple Web App Image

1. Create a small static HTML file (`index.html`) with any content
2. Write a Dockerfile that:
   - Uses `nginx:alpine` as base
   - Copies your `index.html` to the Nginx web directory
3. Build and tag it `my-website:v1`
4. Run it with port mapping and access it in your browser

```bash
FROM nginx:alpine

# Install Nginx (no sudo needed)
RUN apk add --no-cache nginx

# Set working directory
WORKDIR /app

# Copy your HTML file
COPY index.html /usr/share/nginx/html/index.html

# Expose default Nginx port
EXPOSE 80
```

---

### Task 5: .dockerignore

1. Create a `.dockerignore` file in one of your project folders
2. Add entries for: `node_modules`, `.git`, `*.md`, `.env`
3. Build the image — verify that ignored files are not included
   - When you run a build command, the build client looks for a file named `.dockerignore` in the root directory of the context. If this file exists, the files and directories that match patterns in the files are removed from the build context before it's sent to the builder.

---

### Task 6: Build Optimization

1. Build an image, then change one line and rebuild — notice how Docker uses **cache**
2. Reorder your Dockerfile so that frequently changing lines come **last**
3. Write in your notes: Why does layer order matter for build speed?

Before ->

```bash
FROM ubuntu:22.04

RUN apt-get update
RUN apt-get install -y python3
RUN apt-get install -y python3-pip
RUN apt-get install -y curl
RUN apt-get install -y git

WORKDIR /app

COPY . /app

RUN pip3 install flask
RUN pip3 install requests

EXPOSE 5000

CMD ["python3", "app.py"]
```

After ->

- ✅ Fewer layers
- ✅ Smaller image
- ✅ Faster rebuilds
- ✅ Proper apt cleanup
- ✅ Better CI/CD caching strategy

```bash

FROM python:slim

RUN apt-get update && \
apt-get install -y --no-install-recommends curl \
git

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

#Copy application code
COPY . .

EXPOSE 5000

CMD ["python3", "app.py"]
```

---
