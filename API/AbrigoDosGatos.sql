-- banco de dados modificado:

drop database AbrigoGatos;

create database AbrigoGatos;

use AbrigoGatos;

create table DadosDoacao
(
    idDoacao  int primary key auto_increment,
    infoDoacao	varchar(80) not null,	
    imgDadosDoacao varchar(255)				
);

create table Admin
(
    idAdmin  int primary key auto_increment,
    ativoAdmin tinyint(1) not null,	
    emailAdmin varchar(70) unique not null,
    fk_IdUsuario int,
    senhaAdmin varchar(50) not null
    
);
    INSERT INTO `admin` (`idAdmin`, `ativoAdmin`, `emailAdmin`, `fk_IdUsuario`, `senhaAdmin`)
    VALUES (NULL, '1', 'admin@admin.com', NULL, '123');

    INSERT INTO `admin` (`idAdmin`, `ativoAdmin`, `emailAdmin`, `fk_IdUsuario`, `senhaAdmin`)
    VALUES (NULL, '1', 'gabrielaXavier', NULL, 'teste01');

create table InformacaoAbrigo							
(
    descricao varchar(255) not null,		
    imgInformacaoAbrigo varchar(100)	
);


create table Gato							
(
    idGato int primary key auto_increment,
    imgGato varchar(255),
    nome varchar(50) not null,
    cor varchar(50) not null,
    racaGato varchar(50) not null,
    idadeGato varchar(20) not null,
    descricao varchar(255),
    sexo varchar(20) not null,
    nomeTutor varchar(50),
    adotado boolean
    -- adotado é booleano, sendo, true ou false, seria o estado do gato.
    -- true = ja adotado
    -- false = disponível
);

create table  SolicitacaoVoluntario
(
    idVoluntario  int primary key auto_increment,
    telefoneVoluntario varchar(15) not null,
    nomeVoluntario varchar(50) not null,
    emailVoluntario varchar(50),
    dataNascVoluntario date,
    disponibilidade  varchar(50) not null,
    dataPreenchimento date not null,
    aprovado tinyint(1) default 0 not null
);

create table  Usuario
(
    idUsuario int primary key auto_increment,
    telefoneUsuario varchar(15) not null,
    nomeUsuario varchar(50) not null,
    dataNascUsuario date,
    emailUsuario varchar(50)
);

create table SolicitacaoAdocao
(
    idAdocao int primary key auto_increment,
    telefoneAdocao varchar(15) not null,
    nomeAdocao varchar(50) not null,
    emailAdocao varchar(50) not null,
    dataNascAdocao date,
    fk_IdGato int, 
    endereco varchar(50),
    temTempo varchar(50),
    possuiAnimais varchar(5),
    nomeGato varchar(50),
    aprovado boolean
    -- aprovado seria aprovado ou reprovado.
);

alter table Admin
add constraint fk_IdUsuario
foreign key (fk_IdUsuario)
references Usuario(idUsuario);


alter table SolicitacaoAdocao 
add constraint fk_IdGato
foreign key (fk_IdGato)
references Gato(idGato);


show tables;

describe admin; 
describe InformacaoAbrigo;
describe Gato;
describe SolicitacaoVoluntario;
describe Usuario; 
describe SolicitacaoAdocao;
describe DadosDoacao; 
						