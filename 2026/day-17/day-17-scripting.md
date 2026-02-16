## Challenge Tasks

### Task 1: For Loop

### Task 2: While Loop

### Task 3: Command-Line Arguments

### Task 4: Install Packages via Script

### Task 5: Error Handling

## hints

- `if [ $# -gt 1 ]`, the if condition checks number arguments against the argument index for example, `./hello.sh Soham` , here Soham is an argument with index 1 with is being compared total number of argument

- The EUID is used to determine the permissions and access controls that a process has when interacting with system resources, such as files, directories, and devices. EUID of sudo is "zero"

- you can add exit 1 after the (IF) statment id you do not want the else part

```bash
if [ "$EUID" -ne 0 ]; then echo "Run as root"; exit 1; fi
```
