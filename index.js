const express = require('express');
const routerApi = require('./routes/');
const app = express();
const port = 3000;
app.use(express.json());



routerApi(app);

app.get('/', (req, res) => res.send('Hola mundo desde LINVENTARIO'));
app.listen(port, () =>
{
  // eslint-disable-next-line no-console
  console.log("Este es mi puerto"+ port)
})

