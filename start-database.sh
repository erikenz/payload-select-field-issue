#!/usr/bin/env bash
# Use this script to start a docker container for a local development database

# On Linux and macOS you can run this script directly - `./start-database.sh`

DB_CONTAINER_NAME="payload-select-field-issue"
DB_PASSWORD="password"

if ! [ -x "$(command -v docker)" ]; then
  echo "Docker is not installed. Please install docker and try again.\nDocker install guide: https://docs.docker.com/engine/install/"
  exit 1
fi

if [ "$(docker ps -a -q -f name=$DB_CONTAINER_NAME)" ]; then
  docker start $DB_CONTAINER_NAME
  echo "Database container started"
  exit 0
fi

set -a
source .env

DB_PASSWORD=$(echo $DATABASE_URL | awk -F':' '{print $3}' | awk -F'@' '{print $1}')

if [ "$DB_PASSWORD" = "password" ]; then
  echo "You are using the default database password"
fi

docker run --name $DB_CONTAINER_NAME -e POSTGRES_PASSWORD=$DB_PASSWORD -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_DB=$DB_CONTAINER_NAME -d -p 5432:5432 docker.io/postgres

echo "Database container was successfully created"
