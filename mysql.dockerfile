FROM mariadb:10.2

COPY ./.build/sql/*.sql /docker-entrypoint-initdb.d/
