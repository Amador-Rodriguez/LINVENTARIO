const express = require('express');
const routerApi = require('./routes/');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {

    res.json({
      'succes': true,
      'message' : "Hola mundo",
      'Data' : {
        "name" : "Amador",
        "age" : 23
      }
    });
});
routerApi(app);
app.listen(port, () =>
{
  // eslint-disable-next-line no-console
  console.log("Este es mi puerto"+ port)
})

