## Task

Master file and directory ownership in Linux.

- Understand file ownership (user and group)
- Change file owner using `chown`
- Change file group using `chgrp`
- Apply ownership changes recursively

```bash
# View ownership
ls -l filename

# Change owner only
sudo chown newowner filename

# Change group only
sudo chgrp newgroup filenameS

# Change both owner and group
sudo chown owner:group filename

# Recursive change (directories)
sudo chown -R owner:group directory/

# Change only group with chown
sudo chown :groupname filename
---
```

## Expected Output

### Task 1: Understanding Ownership

![alt text](image-22.png)

### Task 2: Basic chown Operations

![alt text](image-24.png)

### Task 3: Basic chgrp Operations

![alt text](image-23.png)

### Task 4: Combined Owner & Group Change

![alt text](image-25.png)

### Task 5: Recursive Ownership

![alt text](image-26.png)

### Task 6: Practice Challenge

![alt text](image-27.png)
