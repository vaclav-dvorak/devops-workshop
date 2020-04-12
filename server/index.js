const Koa = require('koa')
const koaBody = require('koa-body')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
const dbUsers = require('./db')

config.dev = app.env !== 'production'

const requiredEnvVars =
  config.modules
    .filter((mod) => Array.isArray(mod) && mod[0] === 'nuxt-env')
    .map((mod) => mod[1].required)[0] || []

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(
      `The required environment variable '${envVar}' was not present.`
    )
  }
})

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(koaBody())
  app.use(async (ctx) => {
    if (ctx.req.url === '/list') {
      const body = {
        err: '0',
        data: []
      }

      await dbUsers.findAll().then((users) => {
        body.data = users
        ctx.body = JSON.stringify(body)
      })

      return
    }

    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
