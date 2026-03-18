#!/bin/bash

echo "Starting application..."

# simple calculation
result=$((5 + 3))

echo "Result is: $result"

# simulate log generation
echo "App ran successfully at $(date)" >> app.log

# Simulate failure if FAIL_PIPELINE=true
if [ "$FAIL_PIPELINE" = "true" ]; then
  echo "Simulating failure..."
  exit 1
fi

echo "Application completed successfully"
exit 0