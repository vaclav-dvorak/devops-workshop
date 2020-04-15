# Devops-workshop

DevOps workshop by Rebood

# Computer Setup
## Docker
Follow official manual [here](https://docs.docker.com/engine/install/ubuntu/) to find out how to setup docker on your system.

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
docker -v
```

## Docker-compose
Download and prepare docker-compose:
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose -v
```

## Node.js (optional)
Install Node.js and npm:

```bash
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs
node -v
npm -v
```

## Build Setup
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## Locahost setup
Create a `.env` file and set the database username & password:

```bash
# Koa is listening to this port
PORT=8080
# baseUrl for axios
API_URL="http://localhost:8080"
# your database username
DB_USER=rebood_workshop
# your database password
DB_PASSWORD=WG4NqWzrWgsLtnlI
DB_URL=127.0.0.1
```

### Docker
These are only two commands needed to get project working locally: `docker-compose build` and `docker-compose up`. Whole setup is done in [docker-compose.yml](docker-compose.yml)

> mysql in docker use 3306 port inside & outside.\
> node in docker use 8080 port inside and 80 outside.

Open this url in your favourite browser: `localhost`

## Footnote
Because we use docker for our development environment we dont need to worry about installation of node.js or npm on our machines. We will need it for some underlying changes in framework setup like adding new npm packages though. When we add new package we have to run `docker-compose build` again.\
When we need to ssh inside docker container we use following command. Here `node` is name of service defined in [docker-compose.yml](docker-compose.yml)
```bash
docker-compose run node /bin/sh
```
