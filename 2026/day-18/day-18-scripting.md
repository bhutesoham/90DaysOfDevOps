### Task 1 - Basic Functions

```bash
#!/bin/bash


greet(){

	echo "Hello,$1"

}

greet $1

```

### Task 2 - Functions with return value

```bash
#!/bin/bash



check_disk(){

df -h

}

check_memory(){

free -h

}

check_disk
check_memory
```

### Task 3 - Strict Mode - set -euo pipefail

```bash
#!/bin/bash

set -euo pipefail

name="SOHAM"

echo "Hello, $name"

mkdir devops
echo "Directory already exists"

cat hello.txt | grep "Success"
echo "Script ends"
```

### Task 4 - Local Variables

```bash
#!/bin/bash

print_name(){

        local name="SOHAM"
        echo "Name $name is local variable"
}

display_name(){
        echo "Name $1 is a regular variable"
}

print_name
display_name $1

```

### Task 5 - Build a Script — System Info Reporter

```bash
#!/bin/bash


print_hostname_and_OS(){

    echo "username $(whoami) and OS is $(uname -s)"
}

print_uptime(){
    echo "Uptime is $(uptime -p)"
}

print_disk_usage(){
    df -h | awk 'NR<=6 {print $0}'
}

print_memory_usage(){
    echo "Memeory_usage:"
    free -h
}

print_top_cpu(){
    echo "Top 5 CPU-consuming processes:"
    ps -eo pid,comm,%cpu --sort=-%cpu | head -n 6

}

main(){

    echo "=============================="
    echo "      SYSTEM REPORT"
    echo "=============================="
    echo
echo "----- System Information -----"
print_hostname_and_OS
echo
echo "----- Uptime -----"
print_uptime
echo
echo "----- Disk Usage -----"
print_disk_usage
echo
echo "----- Memory Usage -----"
print_memory_usage
echo
echo "----- CPU Usage -----"
print_top_cpu
echo
}

main

```

## Hints

- For a function with input argument , call the function with argument number . you can refer to Task 1
- This means that an exit status of “0” indicates the successful completion of every command in the pipe, and not just the last one. Here’s how it works:
