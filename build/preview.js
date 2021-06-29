const chalk = require('chalk')
const connect = require('connect')
const serveStatic = require('serve-static')
const port = 8888
const app = connect()

app.use(
  '/',
  serveStatic('./dist', {
    index: ['index.html', '/']
  })
)

app.listen(port, function () {
  console.log(chalk.green(`> Preview at  http://localhost:${port}`))
})
