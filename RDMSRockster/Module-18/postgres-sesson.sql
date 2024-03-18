-- Active: 1710733353549@@127.0.0.1@5432@postgres_session@public
CREATE TABLE persons (
  id SERIAL ,  
    name VARCHAR(50),
    age INT,
    profession VARCHAR(100),
    isActive BOOLEAN,
    dob DATE,
    ratings NUMERIC(5,2)
);
select * from persons;

drop table persons;

select * from persons;


CREATE TABLE persons (
  id SERIAL PRIMARY KEY ,  
    name VARCHAR(50) NOT NULL,
    age INT,
    profession VARCHAR(100),
    isActive BOOLEAN,
    dob DATE,
    ratings NUMERIC(5,2)
);

INSERT INTO persons (id,name,age,profession,isActive,dob,ratings)  VALUES ( 1,"Rahul Rudra",23,"Student",false,'2021-12-02',4.55)