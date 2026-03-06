# Stage 1 builder
# Import base image
FROM python:3.9-slim AS builder
# Setup work directory
WORKDIR /app
# Copy files first
COPY . /app
# Install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential libpq-dev && \
    rm -rf /var/lib/apt/lists/*

RUN pip install --prefix=/install --no-cache-dir -r requirements.txt

COPY . .

#Stage 2:Runtime(deployer)
FROM python:3.9-slim AS deployer

WORKDIR /app
#create a non-root user 
RUN adduser --disabled-password --gecos "" sob
#copy installed packages from builder
COPY --from=builder /install /usr/local
#copy app code
COPY --from=builder /app /app

# change the ownership
RUN chown -R sob:sob /app

# Chnage to non root user
USER sob
# Expose port 5000 for Flask
EXPOSE 5000  

# Command to run the app
CMD ["python", "main.py"]

