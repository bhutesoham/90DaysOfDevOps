import os
import time
from datetime import datetime

print("🚀 DevOps Docker Challenge Started!")

while True:
    print("Current Time:", datetime.now())
    print("Environment:", os.getenv("ENVIRONMENT", "Not Set"))
    print("-" * 40)
    time.sleep(5)