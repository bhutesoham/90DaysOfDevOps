## Challenge Tasks

### Task 1: Understanding Branches

1. What is a branch in Git?
   - A branch is a parallel workspace. If somthing goes wrong with your files and you delete the branch , your project is safe in `main` branch

2. Why do we use branches instead of committing everything to `main`?
   - Generally `main` is the branch where the production version of code is running. Hence if the developer is working on new feature he/she should always create a new branch and push there code in this branch rather than `main`. This avoids breakage of working code.

3. What is `HEAD` in Git?
   - `HEAD` points to the current commit on currently checked out branch

4. What happens to your files when you switch branches?
   - Your files remain as it is if you have not save them. But if you have saved your files in a particular branch then after shifting the branch you file comes back to its previous unedited stage

---

### Task 2: Branching Commands — Hands-On

In your `devops-git-practice` repo, perform the following:

1. List all branches in your repo with `git branch -a`
2. Create a new branch called `feature-1`
3. Switch to `feature-1`
4. Create a new branch and switch to it in a single command — call it `feature-2`
5. Try using `git switch` to move between branches — how is it different from `git checkout`?
   - Git switch is a newer command that is more focused on branches, while git checkout is an older command that can do other things besides switching branches.

6. Make a commit on `feature-1` that does **not** exist on `main`
7. Switch back to `main` — verify that the commit from `feature-1` is not there
8. Delete a branch you no longer need
9. Add all branching commands to your `git-commands.md`

---

### Task 3: Push to GitHub

1. Create a **new repository** on GitHub (do NOT initialize it with a README)
2. Connect your local `devops-git-practice` repo to the GitHub remote
3. Push your `main` branch to GitHub
4. Push `feature-1` branch to GitHub
5. Verify both branches are visible on GitHub
6. Answer in your notes: What is the difference between `origin` and `upstream`?
   - In fork context, upstream generally refers to the original repo that you have forked . and origin is your forkyour own repo ib GutHub, clone of the original repo of GitHub

---

### Task 4: Pull from GitHub

1. Make a change to a file **directly on GitHub** (use the GitHub editor)
2. Pull that change to your local repo
3. Answer in your notes: What is the difference between `git fetch` and `git pull`?
   - Git fetch is a command used to retrieve the latest information from a remote repository. The retrieved information is not directly reflected in the local branch. Using git pull will reflect all remote branches, including incorrect or problematic ones, in the local branch.

---

### Task 5: Clone vs Fork

1. **Clone** any public repository from GitHub to your local machine
2. **Fork** the same repository on GitHub, then clone your fork
3. Answer in your notes:
   - What is the difference between clone and fork?
     - Forking creates a server-side copy of a repository in your own account, enabling independent development and easy contribution via pull requests. Cloning creates a local copy on your machine for immediate editing, typically used when you have direct push access or want a local copy of a project
   - When would you clone vs fork?
     - If I want to push my code directly to repository I would execute git clone whereas when I want to create a copy without affecting the upstream I would fork the repository.
   - After forking, how do you keep your fork in sync with the original repo?
     - Inside the GitHub web page it gives an option to sync fork whenever there are some changes in the upstream .

---

## Hints

- When you create a branch, it starts from the commit you're currently on
- `git switch` is the modern alternative to `git checkout` for switching branches
- To push a new branch: `git push -u origin <branch-name>`
- A fork is a GitHub concept, not a Git concept

---

## Submission

1. Add your `day-23-notes.md` to `2026/day-23/`
2. Update `git-commands.md` with all new commands and commit
3. Push to your fork

---
