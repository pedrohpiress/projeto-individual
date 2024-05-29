CREATE DATABASE vallife;

USE vallife;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE quiz(
idQuiz int primary key auto_increment,
acertos int);

select * from usuario;