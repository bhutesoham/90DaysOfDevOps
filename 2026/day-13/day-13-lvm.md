## Before You Start

Switch to root user:

```bash
sudo -i
```

or

```bash
sudo su
```

No spare disk? Create a virtual one (watch the tutorial):

```bash
dd if=/dev/zero of=/tmp/disk1.img bs=1M count=1024
losetup -fP /tmp/disk1.img
losetup -a   # Note the device name (e.g., /dev/loop0)
```

![alt text](image-1.png)

---

### Task 1: Check Current Storage

Run: `lsblk`, `pvs`, `vgs`, `lvs`, `df -h`

![alt text](image.png)

### Task 2: Create Physical Volume

```bash
pvcreate /dev/sdb   # or your loop device
pvs
```

![alt text](image-2.png)

### Task 3: Create Volume Group

```bash
vgcreate devops-vg /dev/sdb
vgs
```

### Task 4: Create Logical Volume

```bash
lvcreate -L 500M -n app-data devops-vg
lvs
```

### Task 5: Format and Mount

```bash
mkfs.ext4 /dev/devops-vg/app-data
mkdir -p /mnt/app-data
mount /dev/devops-vg/app-data /mnt/app-data
df -h /mnt/app-data
```

### Task 6: Extend the Volume

```bash
lvextend -L +200M /dev/devops-vg/app-data
resize2fs /dev/devops-vg/app-data
df -h /mnt/app-data
```

![alt text](image-3.png)

---
