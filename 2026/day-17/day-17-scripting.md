## Challenge Tasks

### Task 1: For Loop

```bash
#!/bin/bash


for item in apple oranges pineapple mangoes cherry
do
	echo $item
done

```

### Task 2: While Loop

```bash
#!/bin/bash


read -p "enter number to start:" num1


while [ $num1 -ge 0 ]
do
	echo $num1
	num1=`expr $num1 - 1`
done
echo "Done!"

```

### Task 3: Command-Line Arguments

```bash
#!/bin/bash
#

if [ $# -gt 1 ];
then
	echo "Hello , $1!"
else
	echo "Usage:./greet.sh"
	echo $1
	echo $#
fi

```

### Task 4: Install Packages via Script

```bash
#!/bin/bash

if [ "$EUID" -ne 0 ]; then echo "Run as root"; exit 1; fi

for item in $@;
do
 	if  dpkg -s $item &> /dev/null
	then
		echo "$item  is already installed"
	else
		echo "$item is not installed, Installing..."
		sudo apt update
		sudo apt-get install $item
	fi

done
```

### Task 5: Error Handling

```bash
 #!/bin/bash


set -e


mkdir /tmp/devops-test || echo "Directory already exists"

cd /tmp/devops-test
touch hello.txt


```

## hints

- `if [ $# -gt 1 ]`, the if condition checks number arguments against the argument index for example, `./hello.sh Soham` , here Soham is an argument with index 1 with is being compared total number of argument

- The EUID is used to determine the permissions and access controls that a process has when interacting with system resources, such as files, directories, and devices. EUID of sudo is "zero"

- you can add exit 1 after the (IF) statment id you do not want the else part

```bash
if [ "$EUID" -ne 0 ]; then echo "Run as root"; exit 1; fi
```
