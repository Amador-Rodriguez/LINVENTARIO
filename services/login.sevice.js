
const bcrypt = require("bcrypt");
const Model = require('../models/users.model');

const login = async (req, res) => {
  const { email, password } = req.body;

  Model.findOne({ email }).then((users) => {
    if (!users) {
      return res.json({ mensaje: "Usuario no encontrado"});
    }

    bcrypt.compare(password, users.password).then((esCorrecta) => {
      if (esCorrecta) {
        const { _id, name, email, password, type } = users;

        const data = {
          _id,
          name,
          email,
          password,
          type,
        };


        res.json({
          mensaje: "Usuario logeado correctamente",
          users: {
            _id,
            name,
            email,
            password,
            type,
          },
        });
      } else {
        return res.json({ mensaje: "Contraseña incorrecta"});
      }
    });
  });
};

module.exports = login;