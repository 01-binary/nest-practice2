import * as express from 'express';

const app: express.Express = express();
const port: number = 8000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log('server start');
});
