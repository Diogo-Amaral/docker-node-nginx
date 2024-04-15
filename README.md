# Docker Node + NGINX + MySQL

A study project using NGINX as reverse proxy for a node app.
The node app inserts a name in a MySQL database and provides an endpoint that lists all names.

# How to run
Start the containers ```docker-compose up -d```

Create the database table
- Access the database container shell ```docker exec -it db bash```
- Connect to database ```mysql -uroot -proot nodedb```
- Create the table ```create table people(id int not null auto_increment, name varchar(255), primary key(id));```

Endpoint to list all names
- http://localhost:8080
