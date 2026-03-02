# Day 24 – Advanced Git: Merge, Rebase, Stash & Cherry Pick

## Expected Output

- A markdown file: `day-24-notes.md` with your observations and answers
- Continue updating `git-commands.md` in your `devops-git-practice` repo

---

## Challenge Tasks

### Task 1: Git Merge — Hands-On

1. Create a new branch `feature-login` from `main`, add a couple of commits to it
2. Switch back to `main` and merge `feature-login` into `main`
3. Observe the merge — did Git do a **fast-forward** merge or a **merge commit**?
   - by default git does merge commit. (All commits from the branch will be added to the base branch via a merge commit)
4. Now create another branch `feature-signup`, add commits to it — but also add a commit to `main` before merging
5. Merge `feature-signup` into `main` — what happens this time?
   - since the `howto` file is edited on both the places , there is a merge conflict which needs to be resolved
6. Answer in your notes:
   - What is a fast-forward merge?
   - A fast-forward merge in Git is a method of integrating branches that occurs when the target branch (e.g.main) has not diverged from the feature branch, allowing Git to simply move the branch pointer forward to the latest commit. It keeps history linear, avoids unnecessary merge commits
   - When does Git create a merge commit instead?
     - By default, GitLab creates a merge commit when a branch is merged into main . A separate merge commit is always created, regardless of whether or not commits are squashed when merging.

   - What is a merge conflict? (try creating one intentionally by editing the same line in both branches)
     - Whenever there is a change in the same file under two different branches. It raises a merge conflict when trying to merge the pull request for this branches.

---

### Task 2: Git Rebase — Hands-On

1. Create a branch `feature-dashboard` from `main`, add 2-3 commits
2. While on `main`, add a new commit (so `main` moves ahead)
3. Switch to `feature-dashboard` and rebase it onto `main`
4. Observe your `git log --oneline --graph --all` — how does the history look compared to a merge?

5. Answer in your notes:
   - What does rebase actually do to your commits?
     - From a content perspective, rebasing is changing the base of your branch from one commit to another making it appear as if you'd created your branch from a different commit.
     - It avoids multiple unnecessary commits, combine multiple commits into one, keep a clean, linear project history
   - How is the history different from a merge?
     - git merge takes all the new changes from main and smooshes them together with your feature branch. It creates a new "merge commit," which preserves the individual development timelines of each branch.
     - git rebase rewrites the history by reapplying your commits on top of the new main commits, creating a linear history. This method is cleaner, but it's also a little dangerous if you're not careful (like cutting your own bangs after two glasses of wine).

   - Why should you **never rebase commits that have been pushed and shared** with others?
     - Rebasing a branch that others are working on is like rearranging all the furniture in your apartment while your roommate is sleeping and then gaslighting them when they wake up confused. "Of course the couch was always in the kitchen, Kimberly. Are you feeling ok?"

   - When would you use rebase vs merge?
     - Use Git merge if:
       - You're working on a shared or public branch.
       - Team collaboration and safety are more important than a tidy history.
       - You want to preserve the full history of both branches, including context.
       - Your team prefers a simpler, less risky workflow.
       - You're managing long-running branches with many contributors.
       - You want to avoid the risk of rewriting history

     - Use Git rebase if:
       - You're working on a local or private branch.
       - You want to clean up your commit history before merging.
       - A linear, easy-to-read history is important (e.g., for open source or long-term projects).
       - You're preparing a feature branch for a polished pull request.
       - You want to combine or reorder commits using interactive rebase.
       - Your team is comfortable with Git and understands the risks of rebasing shared branches.

---

### Task 3: Squash Commit vs Merge Commit

1. Create a branch `feature-profile`, add 4-5 small commits (typo fix, formatting, etc.)
2. Merge it into `main` using `--squash` — what happens?
3. Check `git log` — how many commits were added to `main`?
4. Now create another branch `feature-settings`, add a few commits
5. Merge it into `main` **without** `--squash` (regular merge) — compare the history
6. Answer in your notes:
   - What does squash merging do?
     - A squash merge combines all commits from a feature branch into a single, new commit on the target branch (e.g.main), creating a clean, linear project history.
   - When would you use squash merge vs regular merge?
     - Use squash merge to combine all feature branch commits into one, creating a clean, linear, and easy-to-revert history for small, short-lived, or "messy" feature branches. Use regular merge (merge commit) to preserve the full, detailed history of how a feature was built, which is crucial for long-running branches or when granular, atomic commit history matters for auditing or debugging
   - What is the trade-off of squashing?
     - Detailed information about how a developer reached the final solution—including individual steps.
     - If a bug is introduced `git bisect` will point to the entire feature as the culprit, rather than the specific, smaller commit that caused the issue, making debugging harder.

---

### Task 4: Git Stash — Hands-On

1. Start making changes to a file but **do not commit**
2. Now imagine you need to urgently switch to another branch — try switching. What happens?
3. Use `git stash` to save your work-in-progress
4. Switch to another branch, do some work, switch back
5. Apply your stashed changes using `git stash pop`
6. Try stashing multiple times and list all stashes
7. Try applying a specific stash from the list
8. Answer in your notes:
   - What is the difference between `git stash pop` and `git stash apply`?
     - `git stash pop` deletes the stash after files are moved into your working directory, while apply does not.
   - When would you use stash in a real-world workflow?
     - Suppose you are re implementing a new feature for your product, your work is in progres but suddently a customer escalation comes because of this you have to keep aside your new feature work for few hours. You cannot commit your partial code and also cannot throw away your changes. So for some temporary storage you can use `git stash`

---

### Task 5: Cherry Picking

1. Create a branch `feature-hotfix`, make 3 commits with different changes
2. Switch to `main`
3. Cherry-pick **only the second commit** from `feature-hotfix` onto `main`
4. Verify with `git log` that only that one commit was applied
5. Answer in your notes:
   - What does cherry-pick do?
     - git cherry-pick is a Git command that applies the changes introduced by a specific, existing commit from one branch onto your current HEAD branch
   - When would you use cherry-pick in a real project?
     - If you want to apply a specific commit from your feature branch to main branch then you should choose cherry pick option

   - What can go wrong with cherry-picking?
     - If you eventually merge the two branches, Git might not realize the changes are already present, leading to the same changes appearing twice in the history.
     - It creates a messy, non-linear history that is hard to follow, as the same code change may appear at different times in different branches
