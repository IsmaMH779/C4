use ejerciciosmysql;

create table productos (
id int auto_increment unique,
nombre varchar(100),
categoria int,
precio float,
stock int,
fabricante int
);


alter table productos 
add constraint primary key (id);
alter table productos 
add constraint foreign key (categoria)
references categorias (id),
add constraint foreign key (fabricante)
references fabricantes (id);

create table fabricantes (
id int,
nombre varchar(100)
);

alter table fabricantes add constraint primary key (id);

create table categorias (
id int,
nombre varchar(100)
);

alter table categorias add constraint primary key (id);

INSERT INTO fabricantes (id,nombre) 
VALUES (1,'IBM'),
       (2,'Microsoft'),
       (3,'Apple'),
       (4,'HP'),
       (5,'Dell');
insert into categorias (id,nombre)
values  (1,'Computadoras'),
		(2,'Hardware'),
        (3,'Periféricos');


INSERT INTO productos (nombre, categoria, precio, stock, fabricante)
VALUES ('Laptop', '1', 999.99, 10, 5),
       ('Servidor', '2', 2999.99, 5, 1),
       ('Mouse', '3', 19.99, 100, 2),
       ('MacBook Pro', '1', 1999.99, 8, 3),
       ('Impresora', '3', 149.99, 20, 4);
	

select * from productos;
select c.id,p.nombre,precio,stock,c.nombre from productos as p join fabricantes as f on f.id = p.fabricante
join categorias as c on c.id = p.categoria
