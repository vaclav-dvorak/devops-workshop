const Koa = require('koa')
const koaBody = require('koa-body')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

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
  app.use((ctx) => {
    if (ctx.req.url === '/list') {
      const body = {
        err: '0',
        data: ['foo', 'bar']
      }
      // await db.all(axiosCalls).then((results) => {
      //   const body = {
      //     err: '0',
      //     results: []
      //   }
      //   results.forEach((result, i) => {
      //     parseString(result.data, xmlConfig, (e, res) => {
      //       body.results[i] = {
      //         ...res
      //       }
      //     })
      //   })
      ctx.body = JSON.stringify(body)
      // })
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
