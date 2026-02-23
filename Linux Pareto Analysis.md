# 📘 Linux Commands for DevOps — Pareto Guide (80/20 Rule)

## 🎯 Objective

In DevOps, you do **not** need to master every Linux command.  
Roughly **20% of Linux commands handle 80% of daily DevOps work**.

This guide prioritizes:

- High-frequency commands used in real DevOps workflows
- Commands relevant to CI/CD, containers, servers, logs, networking, automation
- Practical usage over theoretical depth

No fluff. Only commonly used tools in production environments.

---

# 🥇 Tier 1 — The Critical 20% (Used Daily)

## 📂 File & Directory Management

| Command | Why It Matters |
|----------|---------------|
| `ls` | Inspect files |
| `cd` | Navigate directories |
| `pwd` | Confirm current directory |
| `cp` | Copy files |
| `mv` | Move/rename files |
| `rm` | Delete files |
| `mkdir` | Create directories |
| `find` | Locate files in large systems |

Used constantly in:
- CI pipelines
- Docker builds
- Server troubleshooting
- Deployment scripts

---

## 📄 File Viewing & Text Processing

| Command | Use Case |
|----------|----------|
| `cat` | Quick file view |
| `less` | Scroll logs |
| `head` | First lines |
| `tail` | Last lines |
| `tail -f` | Live log monitoring |
| `grep` | Search in logs/configs |
| `wc` | Count lines |
| `sort` | Sort output |
| `uniq` | Remove duplicates |
| `cut` | Extract columns |
| `awk` | Structured parsing |
| `sed` | Stream editing |

DevOps work heavily involves:
- Log analysis
- Config parsing
- Output filtering
- Automation scripting

---

## 🔐 Permissions & Ownership

| Command | Why Important |
|----------|---------------|
| `chmod` | Change permissions |
| `chown` | Change ownership |
| `id` | Check user |
| `whoami` | Current user |

Used in:
- Docker containers
- Deployment fixes
- SSH troubleshooting
- CI permission issues

---

## ⚙️ Process & System Monitoring

| Command | Use Case |
|----------|----------|
| `ps` | Process status |
| `top` | Live system usage |
| `htop` | Enhanced monitoring (if installed) |
| `kill` | Stop processes |
| `free` | Memory usage |
| `df` | Disk space |
| `du` | Disk usage |
| `uptime` | System load |
| `uname -a` | OS info |

Critical for:
- Server troubleshooting
- CPU debugging
- Memory leak detection
- Production incidents

---

## 🌐 Networking (Very Important)

| Command | Use Case |
|----------|----------|
| `curl` | API testing |
| `wget` | Download files |
| `ping` | Connectivity test |
| `netstat` / `ss` | Port usage |
| `ip` | Network info |
| `ssh` | Remote access |
| `scp` | Secure file copy |

DevOps involves distributed systems — networking knowledge is essential.

---

## 📦 Package Management

Depends on distribution:

- Ubuntu/Debian → `apt`
- RHEL/CentOS → `yum` / `dnf`

Used for:
- Installing dependencies
- Provisioning servers
- Docker image builds

---

# 🥈 Tier 2 — Very Important (Used Weekly)

## 🧰 Archiving & Compression

| Command | Purpose |
|----------|----------|
| `tar` | Archive files |
| `gzip` | Compress files |
| `zip` | Zip archives |

Used in:
- Backups
- Artifact packaging
- CI/CD exports

---

## 🔄 Redirection & Pipes (CRITICAL Concept)

Operators:
