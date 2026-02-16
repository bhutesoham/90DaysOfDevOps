### Task 1 - Your first script

```bash
#!/bin/bash
echo "Hello,Devops..!!"
```

### Task 2: Variables

```bash
#!/bin/bash
NAME="Soham"
Role="DevOps Engineer"

echo "Hello,I am $NAME,I am $Role"
```

### Task 3: User Input with read

```bash
#!/bin/bash


read -p 'Enter your name:' NAME

read -p "Enter your favorite tool:" tool

echo "Hello $NAME, your favourite tool is $tool"
```

---

### Task 4: If-Else Conditions

```bash
#!/bin/bash

read -p "Enter the number:" num

if [ "$num" -gt 0 ]
then
        echo "Number is positive"
elif [ "$num" -lt 0 ]
then
        echo "Number is negative"
else
        echo "Number is equal to zero"
fi
```

2. Create `file_check.sh` that:

```bash

#!/bin/bash


read -p "Enter file name :" NAME

if [ -f $NAME ]
then
        echo "File exists"
else
        echo "File does not exist"

fi

```

---

### Task 5: Combine It All

```bash

#!/bin/bash


read -p "Enter the service name:" service

read -p "Do you want to check the status?(y/n)" ans

if [[ "$ans" == "y" || "$ans" == "Y" ]]
then
        if systemctl is-active --quiet "$service"
then
        echo "$service is active"
else
        echo "$service is not active"
fi

elif  [[ "$ans" == "n" ||  "$ans" == "N" ]]
then
        echo "Skipped"
else
        echo "Invalid Input"
fi

```
