const bcrypt = require("bcrypt");
const Model = require('../models/users.model');

const register = async (req, res) => {
  const { name, email, password, type } = req.body;

  Model.findOne({ email }).then((users) => {
    if (users) {
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else if (!name || !email || !password) {
      return res.json({ mensaje: "Falta el nombre / correo / contraseña" });
    } else {
      bcrypt.hash(password, 10, (error, hashPassword) => {
        if (error) res.json({ error });
        else {
          const newUser = new Model({
            name,
            email,
            password: hashPassword,
            type
          });

          newUser
            .save()
            .then((users) => {
              res.json({ mensaje: "Usuario creado correctamente", users });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;