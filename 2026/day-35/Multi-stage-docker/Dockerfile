# Use official image
FROM golang:1.25-alpine AS build

# Set destination directory
WORKDIR /app

#COPY files first 

COPY go.mod go.sum ./
COPY *.go ./
#Download the go modules
RUN go mod download


#Build the application
RUN go build -o main .

#Expose the port    
EXPOSE 8080

#Start the application
CMD ["./main"]