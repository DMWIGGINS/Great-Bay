DROP DATABASE IF EXISTS greatbayDB;
CREATE DATABASE greatbayDB;

USE greatbayDB;

CREATE TABLE items(
  id INT NOT NULL AUTO_INCREMENT,
  itemName VARCHAR(100) NULL,
  itemCondition VARCHAR(5),
  appraised INTEGER(10) NULL,
  minBid INTEGER(10) NULL,
  currentBid INTEGER(10) NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (itemName, itemCondition, appraised, minBid, currentBid)
VALUES ("Little Debbie Oatmeal Cream Pie Snacks", "Used", "100.00", "20.00", NULL);

INSERT INTO items (itemName, itemCondition, appraised, minBid, currentBid)
VALUES ("Tricycle", "New", "50.00", "10.00", NULL);
