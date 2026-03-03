## TASK 1
#FROM ubuntu:22.04

#RUN apt -y update && apt -y install curl

#WORKDIR /app

#CMD ["echo","Hello from custom image!"]

## TASK 2
#FROM python:3.11-slim

#WORKDIR /app

#COPY requirements.txt .
#RUN pip install --no-cache-dir -r requirements.txt

#COPY app.py .

#CMD ["python","app.py"]

##Task 3
# FROM ubuntu:20.04
# #ENTRYPOINT ["echo"]
# CMD ["echo","Hello World"]

##Task 4
# FROM nginx:alpine

# # Install Nginx (no sudo needed)
# RUN apk add --no-cache nginx

# # Set working directory
# WORKDIR /app

# # Copy your HTML file
# COPY index.html /usr/share/nginx/html/index.html

# # Expose default Nginx port
# EXPOSE 80

## Task 5


### Task 6

FROM python:slim

RUN apt-get update && \
apt-get install -y --no-install-recommends curl \ 
git 


WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

#Copy application code
COPY . .

EXPOSE 5000

CMD ["python3", "app.py"]