### Task 1 - Log Rotation Script

```bash
#!/bin/bash


<<usage
 Create log_rotate.sh that:

Takes a log directory as an argument (e.g., /var/log/myapp)
Compresses .log files older than 7 days using gzip
Deletes .gz files older than 30 days
Prints how many files were compressed and deleted
Exits with an error if the directory doesn't exist
usage

set -euo pipefail

standard_usage(){

        echo "usage:./log_rotate.sh <source_dir> <backup_dir>"
}

if [ $# -eq 0 ]; then
        standard_usage
fi

source_dir=$1
backup_dir=$2
timestamp=$(date '+%Y-%m-%d-%H-%M-%S')

create_backup(){

        old_backups=$(find ${source_dir} -type f -name "*.log" -mtime +7)
        echo "${old_backups[@]}"
        for file in ${old_backups};
        do
                echo "$file"
                gzip "$file"
        done

        if [ $# -eq 0 ]; then
                echo "backup generated sucessfully for ${timestamp}"
        fi
}

perform_rotation(){

        backups=$(find ${source_dir} -type f -name "*.gz" -mtime +30)
        for file in ${backups};
        do
                rm -r "$file"
        done

}

create_backup
perform_rotation

```

### Task 2 - Server Backup Script

```bash
#!/bin/bash
#
#
#
<<usage

Takes a source directory and backup destination as arguments
Creates a timestamped .tar.gz archive (e.g., backup-2026-02-08.tar.gz)
Verifies the archive was created successfully
Prints archive name and size
Deletes backups older than 14 days from the destination
Handles errors — exit if source doesn't exist

usage

set -euo pipefail

SOURCE_DIR=$1
DESTINATION_DIR=$2
TIMESTAMP=$(date '+%Y-%m-%d-%H-%M-%S')

Server_Backup(){

mkdir -p "$DESTINATION_DIR"

        tar -czf  "${DESTINATION_DIR}"/"backup-${TIMESTAMP}.tar.gz" "${SOURCE_DIR}"

        if [[ -f "$DESTINATION_DIR/backup-${TIMESTAMP}.tar.gz" ]];then
                echo "Backup created successfully"
                echo "Archive: "backup-${TIMESTAMP}.tar.gz""
                echo "size:" $(du -h "${DESTINATION_DIR}"/"backup-${TIMESTAMP}.tar.gz")
        else
                echo "Backup failed"
                exit 1
        fi

        find "$DESTINATION_DIR" -type f -name "*.tar.gz" -mtime +14 -delete
}


Server_Backup
~
```

### Task 3 - Crontab

```bash
0 2 * * * /home/ubuntu/log_rotate.sh
0 3 * * 0 /path/to/backup.sh
*/5 * * * * /home/ubuntu/system_info.sh >> /var/log/health.log 2>&1

```
