Create database if  not exists company;
use company;

create table employees (
	id int(11) not null AUTO_INCREMENT,
	name varchar(45) default null,
    salary int(11) default null,
    primary key(id)
);

insert into employees values
(1, 'Tony Stark', 20000),
(2, 'Homero Simpson', 40000),
(3, 'Jon Snow', 50000);

select * from employees

describe employees;