1. Try adding a tab instead of spaces — what happens when you validate it?
- Tools that rely on YAML (for example Docker Compose, Kubernetes, Ansible, GitHub Actions) will refuse to run the configuration.

2. Write in your notes: When would you use `|` vs `>`?
Use `|` when:
    - Formatting matters
    - Writing scripts
    - Storing logs
    - Keeping code blocks or commands
    - Example: shell scripts, SQL queries, config snippets.

Use `>` when:
    - You want long text wrapped across lines in YAML   
    - But treated as one continuous string
    - Example: long messages, descriptions, documentation text.