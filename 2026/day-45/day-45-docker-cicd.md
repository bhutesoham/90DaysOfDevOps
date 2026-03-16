## Challenge Tasks

### Task 1: Prepare

1. Use the app you Dockerized on Day 36 (or any simple Dockerfile)
2. Add the Dockerfile to your `github-actions-practice` repo (or create a minimal one)
3. Make sure `DOCKER_USERNAME` and `DOCKER_TOKEN` secrets are set from Day 44

---

### Task 2: Build the Docker Image in CI

Create `.github/workflows/docker-publish.yml` that:

1. Triggers on push to `main`
2. Checks out the code
3. Builds the Docker image and tags it

**Verify:** Check the build step logs — does the image build successfully?

---

### Task 3: Push to Docker Hub

Add steps to:

1. Log in to Docker Hub using your secrets
2. Tag the image as `username/repo:latest` and also `username/repo:sha-<short-commit-hash>` -> `run: echo "DOCKER_TAG=${GITHUB_SHA::7}" >> $GITHUB_ENV`
3. Push both tags

**Verify:** Go to Docker Hub — is your image there with both tags?

- refer to `docker-publish.yml`
- docker hub link (https://hub.docker.com/repository/docker/sohamrb/flaskapp-ga-actions/tags/latest/sha256-03c312903daca3e5507d95f82b3f0885a1e18129c34b0d41dead22aa11f50620)

---

### Task 4: Only Push on Main

Add a condition so the push step only runs on the `main` branch — not on feature branches or PRs.

Test it: push to a feature branch and verify the image is built but NOT pushed.

---

### Task 5: Add a Status Badge

1. Get the badge URL for your `docker-publish` workflow from the Actions tab
2. Add it to your `README.md`
3. Push — the badge should show green

---

### Task 6: Pull and Run It

1. On your local machine (or a cloud server), pull the image you just pushed
2. Run it
3. Confirm it works

Write in your notes: What is the full journey from `git push` to a running container?

- After executing git push it triggers the action `docker-publish.yml` which checkout the code. Build the docker image and then login into docker hub to push the image to docker hub. This docker hub image can then be pulled on an EC2 or docker desktop environment

---
