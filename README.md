# Docker Node + Ngix + MySql

docker exec -it app bash

mysql -uroot -proot nodedb

create table people(id int not null auto_increment, name varchar(255), primary key(id));