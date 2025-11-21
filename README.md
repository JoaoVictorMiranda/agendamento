# Sistema de Agendamento com Notificações por E-mail

Um sistema simples para registrar serviços, criar compromissos e enviar notificações automáticas por e-mail três dias antes do atendimento.

---

## Objetivo

Criar um sistema completo de agendamentos com:
- Cadastro de usuários
- Cadastro de serviços
- Criação e visualização de agendamentos
- Envio de e-mails automáticos de aviso
- Dashboard simples

---

## MVP – Funcionalidades Essenciais

- Cadastro/login de usuário
- Cadastro de serviços
- Criar agendamentos com data e hora
- Listar agendamentos futuros
- Enviar e-mail automático 3 dias antes
- Dashboard com agendamentos do usuário

---

## Fluxo do Usuário

Usuário faz login → escolhe um serviço → escolhe data/hora → confirma → recebe e-mail de confirmação → recebe aviso 3 dias antes.

---

## Modelagem de Dados

### Tabela users
- id_user INT (PK)
- nome VARCHAR
- email VARCHAR
- senha_hash VARCHAR

### Tabela services
- id_service INT (PK)
- nome VARCHAR
- descricao VARCHAR
- valor DECIMAL

### Tabela appointments
- id_appointment INT (PK)
- id_user INT (FK)
- id_service INT (FK)
- data_hora DATETIME
- criado_em DATETIME
- confirmado_em DATETIME

### Tabela email_logs (opcional)
- id_email INT (PK)
- id_appointment INT (FK)
- tipo VARCHAR
- enviado_em DATETIME

---

## Scripts SQL

### users
```sql
CREATE TABLE users(
  id_user INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL
); 
```

### services
``` sql
CREATE TABLE services(
  id_service INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(255),
  valor DECIMAL(10,2)
);
```


### appointments
``` sql
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
```


### email_logs
``` sql
CREATE TABLE email_logs(
  id_email INT PRIMARY KEY AUTO_INCREMENT,
  id_appointment INT NOT NULL,
  tipo VARCHAR(100) NOT NULL,
  enviado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_appointment) REFERENCES appointments(id_appointment)
);
```
## Tecnologias

### Front-end
- React  
- Sass  
- Axios  

### Back-end
- Node.js  
- Express  
- Nodemailer  
- node-cron  
- JWT  

### Banco de Dados
- MySQL


