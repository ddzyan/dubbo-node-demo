import Koa from 'koa'
import { Dubbo } from 'apache-dubbo-js'

const dubbo = new Dubbo<typeof services>({
  application: {
    name: 'hello-api'
  },
  registry: 'localhost:2181',
  services
})

// start server
const server = new Koa()
server.use(async (ctx) => {
  const { res, err } = await dubbo.service.helloService.hello('dubbo-js')
  ctx.body = {
    res,
    err: err?.message
  }
})
server.listen(3000)
console.log('hello-api start at port 3000....')