# DB initialization

## Running docker with containers rebuilt

sudo docker-compose up --remove-orphans --build

## How to manually copy db initialization script into docker db container

sudo docker cp database/init.sql homelib_pg:/docker-entrypoint-initdb.d

sudo docker exec -it homelib_pg psql -U postgres -d homelib_db -f docker-entrypoint-initdb.d/init.sql

## How to connect to the default pg database inside the container in order to recreate homelib_db

sudo docker exec -it homelib_pg psql -U postgres -d postgres

CREATE DATABASE homelib_db;

## How to drop every table without deleting the database itself

sudo docker exec -it homelib_pg psql -U postgres -d homelib_db

SELECT
  'DROP TABLE IF EXISTS "' || tablename || '" CASCADE;'
from
  pg_tables WHERE schemaname = 'public';
