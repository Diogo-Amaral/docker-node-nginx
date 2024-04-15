# Docker Node + NGINX + MySQL

A study project using NGINX as reverse proxy for a node app.
The node app inserts a name in a MySQL database and provides an endpoint that lists all names.

# How to run
Start the containers ```docker-compose up -d```

Create the database table
- Access the database container shell ```docker exec -it db bash```
- Connect to database ```mysql -uroot -proot nodedb```
- Create table ```create table people(id int not null auto_increment, name varchar(255), primary key(id));```

Endpoint to list all names
- http://localhost:8080

![image](https://github.com/Diogo-Amaral/docker-node-nginx/assets/14218370/59b88a46-3a3f-4cb4-92b7-2555a46b3992)

