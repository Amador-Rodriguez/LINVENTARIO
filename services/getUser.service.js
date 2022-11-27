
const Model = require('../models/users.model');
/* 
const getUserById = async (req, res) => {
  const { id } = req.user;

  if (id.length === 24) {
    Model.findById(id).then((users) => {
      if (!users) {
        return res.json({
          mensaje: "No se encontro ningun usuario con esa ID",
        });
      } else {
        const { _id, password, __v, ...resto } = users._doc;
        res.json(resto);
      }
    });
  } else {
    res.json({ mensaje: "Estas enviando una contraseña incorrecta" });
  }
};*/

const editUser = async(req, res) => {
  const { name, email, password} = req.body;

  let Model = await Model.findOne({ email }).then((users) => {
    if (users) {
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else if (!name || !email || !password) {
      return res.json({ mensaje: "Falta el nombre / correo / contraseña" });
    } else {
      bcrypt.hash(password, 10, (error, hashPassword) => {
        if (error) res.json({ error });
        else {
          const updUser = Model({
            name,
            email,
            password: hashPassword
          });

          updUser
            .updateOne()
            .then((users) => {
              res.json({ mensaje: "Usuario editado", users });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });

};

//module.exports = getUserById;
module.exports = editUser;