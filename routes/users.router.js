const express = require('express');
const boom = require('@hapi/boom');
const UserService = require('../services/users.service');
const service = new UserService();
const validatorHandler = require('./../middlewares/validator.handler');
const { loginDto, registerDto } = require('../dtos/users.dto');
const router = express.Router();

router.post(
  '/',
  validatorHandler(registerDto, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const data = await service.createDB(body);
      res.json({
        success: true,
        message: 'Listo',
        data: data,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/login',
  validatorHandler(loginDto, 'body'),
  async (req, res, next) => {
    try {
      const { email, password } = req.params;
      const user = await service.findOneDB({ email: email }).select('password name role email'); //FILTRO SELECT DEL PASSWORD
      if (!user) {
        throw boom.notFound('No se encontro usuario');
      }
      const pwd = user.get('password'); //NO SE PUEDE ACCEDER DIRECTAMENTE A LA PROPIEDAD
      const check = await compare(password, pwd);
      if (!check) {
        throw boom.unauthorized('No se encontro usuario');
      }
      user.set('password', undefined, {strict: false});
      res.json({
        success: true,
        token: await signToken(user),
        data: user,
        message: 'Usuario logeado',
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
/* 
//con el encrypt, se lo quite pq me daba problemas >:(
router.post(
  '/register',
  validatorHandler(registerDto, 'body'),
  async (req, res, next) => {
    try {
      const { password } = req.body;
      const passwordEncrypt = await encrypt(password);
      const body = { ...req.body, passwordEncrypt };
      const dataUser = await service.createDB(body);
      res.json({
        success: true,
        token: await signToken(dataUser),
        message: 'Se ha registrado correctamente',
        data: dataUser,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/login',
  validatorHandler(loginDto, 'body'),
  async (req, res, next) => {
    try {
      const { email, password } = req.params;
      const user = await service.findOneDB({ email: email }).select('password name role email'); //FILTRO SELECT DEL PASSWORD
      if (!user) {
        throw boom.notFound('No se encontro usuario');
      }
      const hashPassword = user.get('password'); //NO SE PUEDE ACCEDER DIRECTAMENTE A LA PROPIEDAD
      const check = await compare(password, hashPassword);
      if (!check) {
        throw boom.unauthorized('No se encontro usuario');
      }
      user.set('password', undefined, {strict: false});
      res.json({
        success: true,
        token: await signToken(user),
        data: user,
        message: 'Usuario logeado',
      });
    } catch (error) {
      next(error);
    }
  }
);


const {
  createUsersDto,
  updateUsersDto,
  getUsersId,
} = require('../dtos/users.dto');

router.get('/', async (req, res) => {
  const {
    size
  } = req.query;
  const limit = size || 10;
  const sales = await service.find(limit);
  res.json(sales);
});

router.get(
  '/:id',
  validatorHandler(getUsersId, 'params'),
  async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const sale = await service.findOne(id);
    res.json({
      message: 'Aqui esta',
      sale: sale,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/nombre/:nombre', async (req, res, next) => {
  try {
    const {
      nombre
    } = req.params;
    const us = await service.findByName(nombre);
    res.json({
      message: 'Aqui esta',
      us: us,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createUsersDto, 'body'),
  async (req, res, next) => {
  const body = req.body;
  try {
    const newUser = await service.create(body);
    res.json({
      'succes': true,
      message: 'creado',
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(getUsersId, 'params'),
  validatorHandler(updateUsersDto, 'body'),
  async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const body = req.body;
    const result = await service.update(id, body);
    res.json({
      message: 'actualizacion',
      data: result,
      id,

    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.put(
  '/:id',
  validatorHandler(getUsersId, 'params'),
  validatorHandler(updateUsersDto, 'body'),
  async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const body = req.body;
    const result = await service.replace(id, body);
    res.json({
      message: 'actualizacion completa',
      data: result,
      id,

    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete(
  '/:id',
  validatorHandler(getUsersId, 'params'),
  async (req, res) => {
  try {
    const {
      id
    } = req.params;
    service.delete(id);
    res.json({
      message: 'eliminar',
      id,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }


});
*/

module.exports = router;
