CREATE TABLE messages (
    name character(255),
    email character(255),
    subject character(255),
    message text,
    mid SERIAL PRIMARY KEY,
    date time with time zone
);


CREATE TABLE projects (
    pid SERIAL PRIMARY KEY,
    url character(255),
    name character(255),
    technologies text,
    description text,
    web character(255),
    repo character(255),
    date time with time zone
);

CREATE TABLE users (
    uid SERIAL PRIMARY KEY,
    username character(255),
    email character(255),
    password text
);