# Criar banco de dados
create database AbrigoGatos;

# Acessar banco
use AbrigoGatos;

create table DadosDoacao
(
    idDoacao  int(11) primary key auto_increment,
    infoDoacao	varchar(80) not null,	
    imgDadosDoacao varchar(100)				
 
);

create table Admin
(
    idAdmin  int(11) primary key auto_increment,
    ativoAdmin tinyint(1) not null,	
    emailAdmin varchar(50) unique not null,
    fk_IdUsuario int
    senhaAdmin varchar(10) not null,
    
);

create table InformacaoAbrigo							
(
    descricao varchar(80) not null,		
    imgInformacaoAbrigo varchar(100)	
);


create table Gato							
(
    idGato int(11) primary key auto_increment,
    nome varchar(50) not null,
    cor varchar(20) not null,
    racaGato varchar(10) not null,
    idadeGato int(2) not null,
    descricao varchar(80),
    sexo char(1)
);

create table  SolicitacaoVoluntario
(
    idVoluntario  int(11) primary key auto_increment,
    telefoneVoluntario varchar(11) not null,
    nomeVoluntario varchar(50) not null,
    emailVoluntario varchar(50),
    dataNascVoluntario date,
    disponibilidade  varchar(7) not null
);

create table  Usuario
(
    idUsuario int(11) primary key auto_increment,
    telefoneUsuario varchar(11) not null,
    nomeUsuario varchar(50) not null,
    dataNascUsuario date,
    emailUsuario varchar(50)
);

   create table SolicitacaoAdocao
(
    idAdocao  int(11) primary key auto_increment,
    telefoneAdocao  varchar(11) not null,
    nomeAdocao varchar(50) not null,
    dataNascAdocao date,
    fk_IdGato int, 
    endereco varchar(50)
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
						
