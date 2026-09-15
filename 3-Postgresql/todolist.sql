-- Tabla para to do list
-- Para la creación de tablas se crean primero las que no tienen dependencias y luego las que si tienen dependencias
-- Para la eliminación de tablas se hace al revés, primero las que tienen dependencias y luego las que no tienen dependencias


CREATE TABLE TASK (
    ID SERIAL PRIMARY KEY,
    NAME VARCHAR (50) NOT NULL,
    DESCRIPTION VARCHAR (200),
    STATE BOOLEAN
);

CREATE TABLE USERS (
    ID SERIAL PRIMARY KEY,
    NAME VARCHAR (50) NOT NULL,
    LAST_NAME VARCHAR (50),
    EMAIL VARCHAR (50) UNIQUE,
    PASSWORD VARCHAR (50)
    );

CREATE TABLE TASK_STATUS(
    ID SERIAL PRIMARY KEY,
    STATUS VARCHAR (50) UNIQUE NOT NULL CHECK(STATUS IN ('Pendiente', 'En proggreso', 'Finalizado', 'Cancelada'))
);

CREATE TABLE USER_TASK(
    ID_TASK INT REFERENCES TASK(ID),
    ID_USER INT REFERENCES USERS(ID),
    ID_STATUS INT REFERENCES TASK_STATUS(ID),
    PRIMARY KEY (ID_TASK, ID_USER),
    START_DATE DATE,
    DUE_DATE DATE
);
