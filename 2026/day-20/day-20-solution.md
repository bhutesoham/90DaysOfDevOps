## Challenge Tasks

### Task 1: Input and Validation

Your script should:

1. Accept the path to a log file as a command-line argument
2. Exit with a clear error message if no argument is provided
3. Exit with a clear error message if the file doesn't exist

---

### Task 2: Error Count

1. Count the total number of lines containing the keyword `ERROR` or `Failed`
2. Print the total error count to the console

---

### Task 3: Critical Events

1. Search for lines containing the keyword `CRITICAL`
2. Print those lines along with their line number

Example output:

```
--- Critical Events ---
Line 84: 2025-07-29 10:15:23 CRITICAL Disk space below threshold
Line 217: 2025-07-29 14:32:01 CRITICAL Database connection lost
```

---

### Task 4: Top Error Messages

1. Extract all lines containing `ERROR`
2. Identify the **top 5 most common** error messages
3. Display them with their occurrence count, sorted in descending order

Example output:

```
--- Top 5 Error Messages ---
45 Connection timed out
32 File not found
28 Permission denied
15 Disk I/O error
9  Out of memory
```

---

### Task 5: Summary Report

Generate a summary report to a text file named `log_report_<date>.txt` (e.g., `log_report_2026-02-11.txt`). The report should include:

1. Date of analysis
2. Log file name
3. Total lines processed
4. Total error count
5. Top 5 error messages with their occurrence count
6. List of critical events with line numbers

---

### Task 6 (Optional): Archive Processed Logs

Add a feature to:

1. Create an `archive/` directory if it doesn't exist
2. Move the processed log file into `archive/` after analysis
3. Print a confirmation message

---

```bash

#!/bin/bash
#
#

set -e

LOG_FILE=$1
TIMESTAMP=$(date)
NUMBER_OF_LINES=$(wc -l ${LOG_FILE})
ERROR_COUNT=$(grep -E -c "ERROR" "${LOG_FILE}")
LOG_REPORT="log_report_$(date '+%Y%m%d_%H%M%S').txt"


if [ $# -lt 1 ];
then
        echo "Usage: ./log_analyzer.sh <path_to_log_file>"
        exit 1
fi

if [[ ! -f "$LOG_FILE" ]];
then
        echo "${LOG_FILE} does not exist"
        exit 1
fi

log_analysis(){
echo "Number of lines containing error/warning:$(grep -E -c "WARNING|ERROR" "${LOG_FILE}")"

echo "================= CRITICAL EVENTS ==================="

echo "$(grep -n -E "CRITICAL" ${LOG_FILE})"

echo "================ Top 5 Error Messages ================="

echo "$(grep "\[ERROR\]" ${LOG_FILE} | awk -F'] ' '{print $2}' | awk -F' - ' '{print $1}' | sort | uniq -c | sort -nr | head -5)"
}

generate_txt_file()
{
touch "${LOG_REPORT}"

echo "Date of Analysis : ${TIMESTAMP}" >> ${LOG_REPORT}
echo "Log file name : ${LOG_FILE}" >> ${LOG_REPORT}
echo "Total lines processed : ${NUMBER_OF_LINES}" >> ${LOG_REPORT}
echo "Total error count : ${ERROR_COUNT}" >> ${LOG_REPORT}
echo "+++++++++++++ Top 5 error messages with their occurrence count +++++++++++++++++++" >> ${LOG_REPORT}

echo "$(grep "\[ERROR\]" ${LOG_FILE} | awk -F'] ' '{print $2}' | awk -F' - ' '{print $1}' | sort | uniq -c | sort -nr | head -5)" >> ${LOG_REPORT}

echo "====================== List of critical events with line numbers ======================" >> ${LOG_REPORT}

echo "$(grep -n -E "CRITICAL" ${LOG_FILE})" >> ${LOG_REPORT}
}

create_archive(){

        mkdir -p archive
                                                                                    10,1          Top

```

### Hints

- `|` : Connects commands
- `>`: Writes (overwrites) to file
- `>>`: Appends to file
- `2>`: Redirects error message
- `-e`: Files exists (any type) ,
- `-s`:Files exists and not empty
- `-d`: Directory exists
- `-z`: String is empty

        ```bash
        if [[ -z "$API_KEY" ]];then
                echo "Error:API key is missing...!!"
                exit 1
        fi
        echo "Connecting using key: $API_KEY"
        ```

- `grep -i "welcome to nginx!" /` - this will help to find welcome to nginx , if exists inside any file location in your system
