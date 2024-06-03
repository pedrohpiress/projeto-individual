CREATE DATABASE vallife;

USE vallife;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(50),
senha VARCHAR(50)
);

create table quiz (
idQuiz int primary key auto_increment,
    acertos int,
    erros int,
    fkUsuario int,
    foreign key (fkUsuario) references usuario(id));

select * from usuario;
select * from quiz;

-- exibir acertos e erros

SELECT 
    u.nome AS NomeUsuario,
    SUM(q.acertos) AS TotalAcertos
FROM 
    usuario u
JOIN 
    quiz q ON u.id = q.fkUsuario
GROUP BY 
    u.id, u.nome
ORDER BY 
    TotalAcertos DESC
LIMIT 3;

INSERT INTO usuario (nome, email, senha) VALUES
('Lucas Almeida', 'lucas.almeida@example.com', 'senha345'),
('Fernanda Costa', 'fernanda.costa@example.com', 'senha678'),
('Mariana Oliveira', 'mariana.oliveira@example.com', 'senha901');

INSERT INTO quiz (acertos, erros, fkUsuario) VALUES
(7, 3, 3),  -- Lucas Almeida
(6, 4, 4),  -- Fernanda Costa
(9, 1, 5);