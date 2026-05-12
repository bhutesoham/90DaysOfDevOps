# Cheat sheet Linux commands

-man -> Used to display the user manual of any command that we can run on the terminal

- Process management
  
1. uname -r/ -> Displays system information, such as the kernel name, version
2. htop -> provides colour-coded, real-time information about system processes
3. df -h -> Summarises disk usage of files and directories
4. kill -> sends the specific process termination signal with the given pid (SIGTERM = 15)
  
- File system

1. pwd -> return the absolute path of the current working directory
2. cd -> change the current working directory to the given directory
3. mkdir -> creates a new directory with the given name
4. rm ->Deletes files or directories.
      -r for recursive deletion (necessary for directories).
      -f to force deletion without prompts.
5. cp -> copy the file from the given source to the destination
6. touch -> Creates an empty file with the specified name if it doesn’t exist,
         or updates the modification and access time of the file if it does.
8. chmod -> changes the permission of the file (read, write, execute)
9. chown -> Changes the ownership of files or directories.
10. grep -> Searches for a specific pattern of text within files
11. head -> shows the top content of the file
12. cat -> displays the complete content of the file in read-only mode
  
- Networking troubleshooting

  1. ping -> tests the network connectivity between your server and another device
  2. netstat -> Displays network connections, routing tables, and interface statistics
  3. ssh -> Connects to a remote server using the SSH protocol, allowing for secure command-line access.
  4. scp -> Securely copies files and directories between hosts over an SSH connection.
  5. curl -> transfers data from or to a server using a variety of protocols, including HTTP, HTTPS, FTP, and more.
  6. ifconfig ->Displays or configures network interfaces
  7. dig ->Performs detailed DNS queries, providing more comprehensive output than nslookup
  8. wget -> Downloads files from the web via HTTP, HTTPS, or FTP. 
