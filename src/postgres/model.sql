DROP TABLE IF EXISTS users;

CREATE TABLE users(
    user_id serial not null PRIMARY KEY,
    user_fullName TEXT not null,
    user_lastName TEXT not null,
    user_age varchar(2) not null,
    user_isFree boolean
);

INSERT INTO users(user_fullName, user_lastName, user_age, user_isFree) VALUES('Eshmat', 'Toshmatov', 48, true);
INSERT INTO users(user_fullName, user_lastName, user_age, user_isFree) VALUES('Eshmat', 'Davidson', 21, true);
INSERT INTO users(user_fullName, user_lastName, user_age, user_isFree) VALUES('Tursunbay', 'Eshmatov', 48, true);

DROP TABLE IF EXISTS books;

CREATE TABLE books(
    book_id serial not null PRIMARY KEY,
    book_title TEXT not null,
    book_author TEXT not null,
    book_user_id smallint
);

INSERT INTO books(book_title, book_author, book_user_id) VALUES('Clean Architecture', 'Rober Martin', 2);
INSERT INTO books(book_title, book_author, book_user_id) VALUES('erg4rg', 'sdrger', 1);
INSERT INTO books(book_title, book_author, book_user_id) VALUES('kghk', 'vhk', 3);