const express = require('express');
const routerApi = require('./routes/');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3090;
//app.use(express.json());
app.use(
  express.json({
    extended: false, // permite codificar matrices y objetos enriquecidos en formato codificado en url
  })
);


routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => res.send('Hola mundo desde LINVENTARIO'));
app.listen(port, () =>
{
  // eslint-disable-next-line no-console
  console.log("Este es mi puerto"+ port)
})

