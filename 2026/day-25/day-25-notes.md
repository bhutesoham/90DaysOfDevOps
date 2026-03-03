## Challenge Tasks

### Task 1: Git Reset — Hands-On

1. Make 3 commits in your practice repo (commit A, B, C)
2. Use `git reset --soft` to go back one commit — what happens to the changes?
3. Re-commit, then use `git reset --mixed` to go back one commit — what happens now?
4. Re-commit, then use `git reset --hard` to go back one commit — what happens this time?

5. Answer in your notes:
   - What is the difference between `--soft`, `--mixed`, and `--hard`?
     - `--soft` - no changes in staging area and working directory but HEAD moves to the previous commit
     - `--mixed` - staging area resets , no change in working directory, HEAD moves to previous commit
     - `--hard` - it resets HEAD, staging area, working directory

   - Which one is destructive and why?
     - `Git reset --hard` three things at once: - Moves HEAD to the chosen commit - Resets the staging area - Resets the working directory. It rewrites your actual files to match the selected commit. Any uncommitted changes vanish. Staged changes vanish. Unstaged changes vanish. It is the “time machine with no undo button” option.

- When would you use each one?
  - `--soft` → Use when you want to undo a commit but keep everything staged (e.g., fix the last commit message or combine commits).

  - `--mixed (default)` → Use when you want to undo a commit but keep the changes in your files (so you can edit or recommit them).

  - `--hard` → Use when you want to completely discard commits and all local changes and reset everything to a clean state.

- Should you ever use `git reset` on commits that are already pushed?
  - No, because git resets rewrites the history. If the commit is already pushed and other people have pulled it, resetting it wil lead to -
    - Change commit history
    - Cause merge conflicts
    - Potentially override teammates work

---

### Task 2: Git Revert — Hands-On

1. Make 3 commits (commit X, Y, Z)
2. Revert commit Y (the middle one) — what happens?
3. Check `git log` — is commit Y still in the history?
   - Yes
4. Answer in your notes:
   - How is `git revert` different from `git reset`?
     - git revert
       - Creates a new commit that undoes the changes of a previous commit.
       - Does NOT delete or rewrite existing commits.
       - Keeps history intact.
         👉 It adds a new commit that cancels a previous one.

   - Why is revert considered **safer** than reset for shared branches?
     - It is safer because it does not require force push, dies not rewrite the history, does not break other collaborators repositories

   - When would you use revert vs reset?
     ✅ Use git reset when:
     - Working on a local branch
     - Commits are NOT pushed yet
     - You want to rewrite or clean up commit history
     - You want to discard local changes

     ✅ Use git revert when:
     - The commit is already pushed
     - The branch is shared
     - You want to safely undo changes without rewriting history
     - You want a clear record of the reversal

---

### Task 3: Reset vs Revert — Summary

Create a comparison in your notes:

|                                  | `git reset`                                       | `git revert`                                                      |
| -------------------------------- | ------------------------------------------------- | ----------------------------------------------------------------- |
| What it does                     | rewrites the history                              | Creates a new commit that undoes the changes of a previous commit |
| Removes commit from history?     | yes                                               | no                                                                |
| Safe for shared/pushed branches? | no                                                | yes                                                               |
| When to use                      | working on local branch and commit not pushed yet | commit is pushed and branch is shared                             |

---

### Task 4: Branching Strategies

Research the following branching strategies and document each in your notes with:

- How it works (short description)
- A simple diagram or flow (text-based is fine)
- When/where it's used
- Pros and cons

1. **GitFlow** — develop, feature, release, hotfix branches
2. **GitHub Flow** — simple, single main branch + feature branches
3. **Trunk-Based Development** — everyone commits to main, short-lived branches
4. Answer:
   - Which strategy would you use for a startup shipping fast?
   - Which strategy would you use for a large team with scheduled releases?
   - Which one does your favorite open-source project use? (check any repo on GitHub)

---

🔹 1️⃣ Git Flow

Created by Vincent Driessen.

- Main Idea:

Multiple long-living branches with structured releases.

- Branches:

1. main → Production-ready code
2. develop → Integration branch
3. feature/\* → New features
4. release/\* → Preparing release
5. hotfix/\* → Emergency production fixes

- How it works:
  - Create feature from develop
  - Merge feature → develop
  - Create release branch
  - Merge release → main
  - Hotfix from main if needed

✅ Best for:

- Large teams
- Versioned releases
- Traditional release cycles

❌ Downsides:

- Complex
- Many merge conflicts
- Slower delivery

🔹 2️⃣ GitHub Flow

Popularized by GitHub.

- Main Idea:
  Keep main always deployable.

- Branches:

1. main
2. short-lived feature branches
3. How it works:
   - Create branch from main
   - Make changes
   - Open Pull Request
   - Review
   - Merge into main
   - Deploy immediately

✅ Best for:

- Continuous deployment
- SaaS products
- Small to medium teams

❌ Downsides:

Less structured for large release planning

🔹 3️⃣ Trunk-Based Development

Used by companies like Google.

- Main Idea:

  Everyone works on one main branch (trunk).

- Branches:

1. main (or trunk)
2. Very short-lived branches (or none)

How it works:

1. Developers commit small changes frequently
2. Merge back to main daily (or multiple times a day)
3. Use feature flags to hide unfinished features

✅ Best for:

- High CI/CD maturity
- DevOps teams
- Fast-moving environments

❌ Downsides:

- Requires strong testing automation
- Discipline required
