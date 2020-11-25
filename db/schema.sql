-- Drops the burgers_db if it already exists.
DROP DATABASE IF EXISTS burgers_db;

-- Create the database burgers_db.
CREATE DATABASE burgers_db;

-- Specify it for use.
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);