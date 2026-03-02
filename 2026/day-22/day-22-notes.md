## Challenge Tasks

### Task 1: Install and Configure Git

1. Verify Git is installed on your machine
2. Set up your Git identity — name and email
3. Verify your configuration

```bash
sohambhute@MacBookAir Downloads % git config --list
credential.helper=osxkeychain
user.email=bhutesoham@gmail.com
user.name=bhutesoham
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.postbuffer=524288000
```

---

### Task 2: Create Your Git Project

1. Create a new folder called `devops-git-practice`
2. Initialize it as a Git repository
3. Check the status — read and understand what Git is telling you
4. Explore the hidden `.git/` directory — look at what's inside

```bash
sohambhute@MacBookAir .git % ls
HEAD            config          description     hooks           info            objects         refs
```

---

### Task 3: Create Your Git Commands Reference

1. Create a file called `git-commands.md` inside the repo
2. Add the Git commands you've used so far, organized by category:
   - **Setup & Config**
   - **Basic Workflow**
   - **Viewing Changes**
3. For each command, write:
   - What it does (1 line)
   - An example of how to use it

---

### Task 4: Stage and Commit

1. Stage your file
2. Check what's staged
3. Commit with a meaningful message
4. View your commit history

---

### Task 5: Make More Changes and Build History

1. Edit `git-commands.md` — add more commands as you discover them
2. Check what changed since your last commit
3. Stage and commit again with a different, descriptive message
4. Repeat this process at least **3 times** so you have multiple commits in your history
5. View the full history in a compact format `git log --oneline`

### Task 6: Understand the Git Workflow

Answer these questions in your own words (add them to a `day-22-notes.md` file):

1. What is the difference between `git add` and `git commit`?
   - `git add` adds the file to the staging area where as `git commit` commit the changes to the selected branch. This is how the file is taken from untracked to commited stage in GitHub
2. What does the **staging area** do? Why doesn't Git just commit directly?
   - Acts as an intermediate, temporary, and controlled buffer zone where items—data, code, or materials—are prepared, cleaned, and organized before being moved into a final production or storage environment. It prevents errors, corruption, or disorganization in the main, live system
3. What information does `git log` show you?
   - `git log` shows the commit id with details like author name, commit date and commit message
4. What is the `.git/` folder and what happens if you delete it?
   - Every Git project has this control room. It stores everything Git needs: commits, branches, tags, and configuration. Delete it, and your project instantly forgets its entire history.
5. What is the difference between a **working directory**, **staging area**, and **repository**?
   - The working directory is the folder on your computer where you have cloned your Git repository and are actively making changes.
     - It contains your project files.
     - You can create, edit, and delete files here.
     - Changes made here are not automatically saved to Git.

   - The staging area is an intermediate area where you prepare changes before committing them.
     - When you run git add, files move from the working directory to the staging area.
     - It lets you choose exactly which changes will go into the next commit.
     - It helps organize commits logically.

   - The repository is the database where Git permanently stores committed changes.
     - It contains all commits (project history).
     - It includes the hidden .git folder.
     - It tracks versions of your project over time.

---
