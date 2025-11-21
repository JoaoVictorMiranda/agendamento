CREATE DATABASE agendamento;

USE agendamento;

CREATE TABLE users(
  id_user INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL
); 

CREATE TABLE services(
  id_service INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(255),
  valor DECIMAL(10,2)
);

CREATE TABLE appointments(
  id_appointment INT PRIMARY KEY AUTO_INCREMENT,
  id_user INT NOT NULL,
  id_service INT NOT NULL,
  data_hora DATETIME NOT NULL,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  confirmado_em DATETIME,
  FOREIGN KEY (id_user) REFERENCES users(id_user),
  FOREIGN KEY (id_service) REFERENCES services(id_service)
);

CREATE TABLE email_logs(
  id_email INT PRIMARY KEY AUTO_INCREMENT,
  id_appointment INT NOT NULL,
  tipo VARCHAR(100) NOT NULL,
  enviado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_appointment) REFERENCES appointments(id_appointment)
);