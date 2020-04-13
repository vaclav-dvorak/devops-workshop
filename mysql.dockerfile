FROM mariadb:10.2

COPY ./server/sql/*.sql /docker-entrypoint-initdb.d/
