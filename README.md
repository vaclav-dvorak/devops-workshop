# devops-workshop

> DevOps workshop by Rebood

# Computer Setup
## Node.js
Install Node.js and npm:

```bash
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs
```

## docker-composer
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
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

```env
# Koa is listening to this port
PORT=8080
# baseUrl for axios
API_URL="http://localhost:8080"
# your database username
DB_USER=rebood_workshop
# your database
DB_PASSWORD=WG4NqWzrWgsLtnlI
DB_URL=127.0.0.1
```

### Node.js

Beacuse of using Koa2, `Node.js >= v7.6.0` is needed.

### Docker

`docker-compose build` && `docker-compose up`

> mysql in docker use 3306 port inside & outside.
> node in docker use 8080 port inside and 80 outside.

Open in your browser: `localhost`
