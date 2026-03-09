### Task 1: The Problem

Think about a team of 5 developers all pushing code to the same repo manually deploying to production.

Write in your notes:

1. What can go wrong?

- If multiple people from the team push the code to repo , then it cause merge conflicts
- Each one the team member is needed to have all the tests set right locally or on server
- every time a change happens it first has to be merged in `main`, then only rest of the team can work on it
-

2. What does "it works on my machine" mean and why is it a real problem?

- in order for a code to work properly the user needs to install some dependencies. If they do not install the dependency , the code will not work.
  Noramlly this situation appears between the developer and customer , where one has all the dependencies installed and other does not

3. How many times a day can a team safely deploy manually?

- If they are working with CI/CD, then I think just one or two times a day is the maximum possible times,

---

### Task 2: CI vs CD

Research and write short definitions (2-3 lines each):

1. **Continuous Integration** — what happens, how often, what it catches

- Continuous Integration (CI) is a software development practice where developers frequently merge their code changes into a central repository, after which automated builds and tests are run. By automating the detection of integration issues, CI allows teams to find and fix bugs faster, improve software quality, and reduce the time it takes to validate and release new software updates.
  - When using Agile methodology
  - with multiple developers

2. **Continuous Delivery** — how it's different from CI, what "delivery" means

- Continuous Delivery (CD) is a software engineering approach where teams produce software in short cycles, ensuring that the software can be reliably released to production at any time. It extends Continuous Integration (CI) by automating the entire build, test, and staging process, making the release of new features, config changes, and bug fixes a routine, low-risk event.
  - Production ready at all times
  - Low Risk , on demand release

3. **Continuous Deployment** — how it differs from Delivery, when teams use it

- Continuous Deployment (CD) is an advanced DevOps software engineering practice where every code change that passes all stages of the production pipeline (build, automated testing, and staging) is automatically released to the production environment and end-users. It is considered the next step beyond Continuous Delivery, removing the need for human intervention or manual approval for final deployment.
- Continuous Deployment is ideal for teams seeking to maximize velocity, minimize "release day" stress, and receive immediate user feedback
  - SaaS and Web Based Appplication
  - Microservice Architectures

Write one real-world example for each.

---

### Task 3: Pipeline Anatomy

A pipeline has these parts — write what each one does:

- **Trigger** — what starts the pipeline
  - The event which starts the pipeline, such as code push,pull request ,manual run or schedule time
- **Stage** — a logical phase (build, test, deploy)
  - It groups the related jobs like build, test and deploy
- **Job** — a unit of work inside a stage
  - Set of tasks executed within a stage. Each job runs independently on a runner
- **Step** — a single command or action inside a job
  - A single cmd or action inside a job such as running a script , installing dependencies or executing tests
- **Runner** — the machine that executes the job
  - The machine ir agent that executes the pipeline jobs and steps. It can be a server, VM or container.
- **Artifact** — output produced by a job
  - Output/files produced by a job that can be stored or used by later stages in the pipeline

---

### Task 4: Draw a Pipeline

Draw a CI/CD pipeline for this scenario:

> A developer pushes code to GitHub. The app is tested, built into a Docker image, and deployed to a staging server.
> ![alt text](<WhatsApp Image 2026-03-09 at 08.06.31.jpeg>)

```bash
name: CI-CD Pipeline

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Running tests"

  build:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - run: docker build -t myapp .

  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - run: echo "Deploying to staging server"
```

### Task 5: Explore in the Wild

1. Open any popular open-source repo on GitHub (Kubernetes, React, FastAPI — pick one you know)
   - `https://github.com/google-github-actions/example-workflows/tree/main`
2. Find their `.github/workflows/` folder
3. Open one workflow YAML file
4. Write in your notes:
   - What triggers it? -> it does not get trigged automatically, needs to be run manually `workflow-dispatch`
   - How many jobs does it have? -> it has 1 job `pull-request`
   - What does it do? (best guess)
   - Checks out the repository and starter workflows
   - Sets up Go environment
   - Creates a new branch
   - Runs a Go script to update workflow files
   - Shows git status, likely preparing changes to create a pull request with updated workflows.

---
