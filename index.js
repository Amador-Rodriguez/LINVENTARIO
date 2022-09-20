const express = require('express');
const app = express();
const port = 3000;
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

app.listen(port, () =>
{
  // eslint-disable-next-line no-console
  console.log("Este es mi puerto"+ port)
})
