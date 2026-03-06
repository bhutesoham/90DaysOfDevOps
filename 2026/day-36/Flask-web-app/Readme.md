## What does the app do -

This is a simple Flask web application that allows users to sign up, log in, and write and save notes. The application uses MySQL for storing user details and notes. It incorporates Flask for web development, Werkzeug for password hashing, Flask-Login for user session management, and SQLAlchemy for database interaction.

## How to run it with docker compose -

- Pull the image from docker hub `docker pull sohamrb/flaskapp:v2`
- navigate to the folder `/Flask-web-app/Flask-Web-App-with-MySQL-Database-Authentication-and-Notes-Feature/` inside this folder you have the source code of website and a docker-compose.yml file
- Docker compose has two services 1. Mysql container 2. Flask web app container
- It also defines named volume for persistant data storage
- a customer network `todo-notes` which allows the flaskapp and Mysql data base to communicate
- run the command `docker compose up` , it will build the mysql and flaskwebapp services one by one. 
- the `.yml` file defines the dependency on `mysql-db`

- in case of already available flaskwebapp image from docker hub please change the  policy `services-flaskapp-image:sohamrb/flaskapp:v2`

## Any Environmental variables needed are list in `.env` file 

```bash
MYSQL_HOST=mysql
MYSQL_PORT=3306
MYSQL_DATABASE=todo-notesdb
MYSQL_USER=root
MYSQL_PASSWORD=test123
```