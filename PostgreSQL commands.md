### Creating a user

```bash
CREATE USER <username> WITH PASSWORD <password>;
```

### Creating a Database

```bash
CREATE DATABASE <dbname>;
```

### Granting privileges to a user

```bash
GRANT <permission> PRIVILEGES ON DATABASE <dbname> to <user>;
```

### Creating a table

```bash
CREATE TABLE <table name> (
    <col name> <datatype>...,
    <col name> <datatype>...,
    <col name> <datatype>...,
    <col name> <datatype>...,
);
CREATE TABLE COMPANY (
    ID INT PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    AGE INT NOT NULL,
    ADDRESS CHAR[50],
    SALARY REAL
);
```

### Dropping a table

```bash
DROP TABLE <tablename>;
```

\c (dbname) = connecting to a database
\d = list of relation


\l = listing databases
