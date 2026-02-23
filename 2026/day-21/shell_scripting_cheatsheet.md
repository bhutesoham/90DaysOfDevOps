## Challenge Tasks

### Task 1: Basics

Document the following with short descriptions and examples:

1. Shebang (`#!/bin/bash`) — what it does and why it matters

- The shebang is very first line of script that looks like `#!` . It tells the computer exactly which language interpreter to use (e.g "Use Bash to read this") Without it the computer guesses , which can cause errors.

2. Running a script —
   `chmod +x` - change the permission of file to make it executable by all
   `./script.sh`, - command line method to run the shell script
   `bash script.sh` - run the script using modern "bash" shell
3. Comments — single line (`#`) and inline
   - Single-line comments are used to explain a single command or a small block of code. They begin with the `#` symbol
   - Inline comments are written on the same line after command, they are not supported in shell script

4. Variables — declaring, using, and quoting
   - `$VAR` -
     - Variable is expanded
     - Word splitting happens
     - Wildcards (\*) are expanded

   - `"$VAR"` -
     - Variable is expanded
     - NO word splitting
     - NO wildcard expansion

   - `'$VAR'` -
     - NO variable expansion
     - Treated literally

5. Reading user input — `read`

- to read the input from the user it generally written as read -p "<text_msg>:<$variable_name>"

6. Command-line arguments —
   - `$0` - first argument (generally the script to run)
   - `$1` - second argument (first argument to script)
   - `$#` - Total number of arguments
   - `$@` - All positional parameters passed to the script
   - `$?` - Exit code of the last command

---

### Task 2: Operators and Conditionals

Document with examples:

1. String comparisons —

- `=` - Checks if two strings are same [ "$a" = "$b" ]
- `!=` - Checks if two strings are not same [ "$a" != "$b" ]
- `-z` - Checks if the string is empty [ -z "$a" ]
- `-n` - Checks if a string is not empty (has at least one character). [ -n "$a" ]

2. Integer comparisons —

   `-eq` - Checks if the value of LHS is equal to RHS [ $a -eq 1]
   `-ne` - Checks if the value of LHS is not equal to RHS [ $a -ne $b ]
   `-lt` - Checks if the value to LHS is less than RHS [ $a -lt $b ]
   `-gt` - Check if the value to LHS is greater than RHS [ $a -gt $b ]
   `-le` - Checks if the value of LHS is less than RHS [ $a -le $b ]
   `-ge` - Checks if the value of LHS is greater /equal to RHS [ $a -ge $b ]

3. File test operators —
   `-f` - Checks if the file exists and is a normal file (not a folder). [ -f "file.txt" ]
   `-d` - Checks if the given path exists and is a folder. [ -d "folder" ]
   `-e` - Checks if the file or directory exsists [ -e "file.txt" ]
   `-r` - Checks if the file has read permission [ -r "file.txt" ]
   `-w` - Checks if the file has write permission [ -w "file.txt" ]
   `-x` - Checks if the file has executable permission [ -x "file.txt" ]
   `-s` - Checks if the file exists and is not empty (size greater than 0).[ -s "file.txt" ]

4. `if`, `elif`, `else` syntax

```bash

if [] ; then
    <condition>
eilf [] ; then
    <condition>
else
    <condition>
fi

```

5. Logical operators —

   `&&` - Logical AND to check if both the condtions are true [ $a -gt 5 ] && [ $b -lt 10 ]
   `||` - At least one condition must be true. [ $a -lt 5 ] || [ $b -lt 10 ]
   `!` - Reverse the condition, true becomes false , false becomes true [ ! $a -eq 5 ]

6. Case statements — `case ... esac`
   The case statement is used to check a variable against multiple values.
   It works like a cleaner version of multiple if-else statements.

```bash

#!/bin/bash

echo "Enter a number (1-3): "
read num

case $num in
    1)
        echo "You selected One"
        ;;
    2)
        echo "You selected Two"
        ;;
    3)
        echo "You selected Three"
        ;;
    *)
        echo "Invalid choice"
        ;;
esac

```

---

### Task 3: Loops

Document with examples:

1. `for` loop —
   list-based and
   Used to loop over the list elements

```bash
for variable in list
do
    commands
done
```

C-style
Used when you know how many times to repeat.

```bash
#!/bin/bash

for (( i=1; i<=5; i++ ))
do
    echo "Number: $i"
done
```

2. `while` loop

- Runs when condition is true

```bash
#!/bin/bash

count=1

while [ $count -le 5 ]
do
    echo "Count: $count"
    ((count++))
done
```

3. `until` loop
   - Runs until condition becomes true (opposite of while).

```bash
#!/bin/bash

num=1

until [ $num -gt 5 ]
do
    echo "Number: $num"
    ((num++))
done
```

4. Loop control —

`break` - Stops the loop completey when condition becomes true

```bash
for i in 1 2 3 4 5
do
    if [ $i -eq 3 ]; then
        break
    fi
    echo $i
done
```

`continue` - Skips the current iteration and moves to next

```bash
for i in 1 2 3 4 5
do
    if [ $i -eq 3 ]; then
        continue
    fi
    echo $i
done
```

5. Looping over files — `for file in *.log`
   This loop is used to process all files that match a pattern (like \*.log) in the current directory.

```bash
#!/bin/bash

for file in *.log
do
    echo "Processing file: $file"
done
```

6. Looping over command output — `while read line`

- Used to read and process command output line by line.

```bash
#!/bin/bash

ls | while read line
do
    echo "Found: $line"
done
```

---

### Task 4: Functions

Document with examples:

1. Defining a function — `function_name() { ... }`
   - Functions are reusable blocks of code.

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

2. Calling a function
   - refer example 1
3. Passing arguments to functions — `$1`, `$2` inside functions

- Inside a function:
  - $1 → First argument
  - $2 → Second argument
  - $@ → All arguments
  - $# → Number of arguments

```bash
#!/bin/bash

greet(){

	echo "Hello,$1"

}

greet $1
```

4. Return values — `return` vs `echo`
   - Returns a numeric exit status (0–255).
   - Usually used for success/failure.

```bash
#!/bin/bash

check_number() {
    if [ $1 -gt 10 ]; then
        return 0   # success
    else
        return 1   # failure
    fi
}

check_number 15
echo "Return value: $?"
```

5. Local variables — `local`

- local makes variables available only inside the function.

```bash
#!/bin/bash

test_func() {
   local message="Inside function"
   echo $message
}

test_func
echo $message
```

---

### Task 5: Text Processing Commands

Document the most useful flags/patterns for each:

1. `grep` — search patterns,
   `-i` - Ignore case `grep -i "error" file.txt`
   `-r` - Recursive search `grep -r "error" /var/log`
   `-c` - count matches `grep -c "error" file.txt`
   `-n` - show line numbers `grep -n "error" file.txt`
   `-v` - Invert match (exclude pattern) `grep -v "error" file.txt`
   `-E` - Extended Regex `grep -E "error|fail" file.txt`

2. `awk` — print columns, field separator, patterns, `BEGIN/END`
   - Used to process structured text
   ```bash
   awk '{print $1}' file.txt
   ```
3. `sed` — substitution, delete lines, in-place edit
   - Used to edit text
   ```bash
   sed 's/old/new/' file.txt
   ```
4. `cut` — extract columns by delimiter
   - Used to extract parts of a line.
   ```bash
   cut -d "," -f1 data.csv
   ```
5. `sort` — alphabetical, numerical, reverse, unique
   ```bash
   sort file.txt
   ```
6. `uniq` — deduplicate, count
   - Removes duplicates
   ```bash
   sort file.txt | uniq -c
   ```
7. `tr` — translate/delete characters
   ```bash
   tr 'a-z' 'A-Z' < file.txt
   ```
8. `wc` — line/word/char count

   ```bash
   wc file.txt
   wc -l file.txt
   wc -w file.txt
   wc -c file.txt
   ```

9. `head` / `tail` — first/last N lines, follow mode
   ```bash
   head -n 5 file.txt
   tail -n 5 file.txt
   ```

---

### Task 6: Useful Patterns and One-Liners

Include at least 5 real-world one-liners you find useful. Examples:

- Find and delete files older than N days

  ```bash
  find /path/to/dir -type f -mtime +30 -delete
  ```

- Count lines in all `.log` files

  ```bash
  wc -l *.log
  ```

- Replace a string across multiple files

  ```bash
  sed -i 's/oldtext/newtext/g' *.txt
  ```

- Check if a service is running

  ```bash
  systemctl is-active --quiet nginx && echo "Running" || echo "Stopped"
  ```

- Monitor disk usage with alerts

  ```bash
  df -h | awk '$5+0 > 80 {print "Warning: Disk usage high on " $6}'
  ```

- Parse CSV or JSON from command line

  ```bash
  awk -F "," '{print $2}' data.csv

  jq '.name' file.json  or
  jq '.user.email' file.json
  ```

- Tail a log and filter for errors in real time

  ```bash
  tail -f app.log | grep --line-buffered "ERROR"
  ```

  - to make it case insensitive add `-i`

### Task 7: Error Handling and Debugging

Document with examples:

1. Exit codes —

- `$?` - Get the status of the last command , returns `0` if true otherwise returns `2` no error code

```bash
ls file.txt
echo $?
```

- `exit 0` - Used to exit a script with a specific status.

```bash
#!/bin/bash

echo "Everything OK"
exit 0
```

- `exit 1` -

```bash
#!/bin/bash

if [ ! -f "file.txt" ]; then
    echo "File not found"
    exit 1
fi
```

2. `set -e` — exit on error
   - Stops script immediately if any command fails.

   ```bash
   #!/bin/bash
   set -e

   cp file1.txt file2.txt
   rm file_that_does_not_exist
   echo "This line will NOT run"
   ```

3. `set -u` — treat unset variables as error

   ```bash
   #!/bin/bash
   set -u

   echo $name
   ```

4. `set -o pipefail` — catch errors in pipes

   ```bash

   false | true
   echo $?

   ```

5. `set -x` — debug mode (trace execution)

   ```bash
   #!/bin/bash
   set -x

   name="John"
   echo "Hello $name"
   ```

6. Trap — `trap 'cleanup' EXIT`
   - Used to execute cleanup code when script exits

   ```bash
   #!/bin/bash

   cleanup() {
       echo "Cleaning up..."
       rm -f temp.txt
   }

   trap cleanup EXIT

   touch temp.txt
   echo "Script running..."
   ```

---

### Task 8: Bonus — Quick Reference Table

Create a summary table like this at the top of your cheat sheet:

| Topic    | Key Syntax               | Example                            |
| -------- | ------------------------ | ---------------------------------- |
| Variable | `VAR="value"`            | `NAME="DevOps"`                    |
| Argument | `$1`, `$2`               | `./script.sh arg1`                 |
| If       | `if [ condition ]; then` | `if [ -f file ]; then`             |
| For loop | `for i in list; do`      | `for i in 1 2 3; do`               |
| Function | `name() { ... }`         | `greet() { echo "Hi"; }`           |
| Grep     | `grep pattern file`      | `grep -i "error" log.txt`          |
| Awk      | `awk '{print $1}' file`  | `awk -F: '{print $1}' /etc/passwd` |
| Sed      | `sed 's/old/new/g' file` | `sed -i 's/foo/bar/g' config.txt`  |

---
