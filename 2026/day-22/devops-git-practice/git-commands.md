## List of commonly used git commands

### Setup and Config -

- `git --version` - To check the currently installed version of git on host system

- `git config --list` - to verify the current configuration of git on host

- `git config --global user.name "<name>"` - sets the global username for Git commits

- `git config --global user.email "<email>"` - Sets the global emailf ro Git commits

- `git checkout -b <branch_name>` - Checkout to new branch

- `git remote -v` - show the remote origin URL

- `git remote add origin <remote git URL>` - Add remote origin URL

### Basic Workflow -

- `git init` - initiate a new git repository

- `git clone <repo>` - clone an exsisting repository

- `git status` - To see the status of the Git repository

- `git add <file_name>` - to add the file in stagging

- `git add .` - to stage all changes

- `git commit -m "message"` - Commit changes with a message

- `git restore <filename>` - Restore the file from being modified to tracked

- `git push origin <branch_name>` -Push your local changes to remote branch

- `git pull origin <branch name>` - Pull your remote changes to local branch

- `git rebase <branch_name>` or `git rebase -i <commit_hash>` - Reapplies commites on top of another base branch. It rewrties history, so avoid using it on shared branches

- `git stash ` - Save the changes to stash (temporarily)

- `git pop` - Recall the changes dumped in stash

- `git cherry-pick <commit_hash>` - Applies a specific commit from another branch to the current branch

### View changes -

- `git branch` - show the branches of your git repository

- `git fetch` - Fetch from all remote branches

- `git log` - Check your git commits and logs
