const Joi = require('joi');

const id = Joi.string().alphanum();
const producto = Joi.string().min(3).max(50);
const precio = Joi.string().min(3).max(50);
const proveedor = Joi.string().min(3).max(50);
const direccion = Joi.string().min(3).max(50);
const fecha_pedido = Joi.string().min(10);
const aprox_entrega = Joi.string().min(10);

const createOrdersDto = Joi.object({
    producto: producto.required(),
    precio: precio.required(),
    proveedor: proveedor.required(),
    direccion: direccion.required(),
    fecha_pedido: fecha_pedido.required(),
    aprox_entrega: aprox_entrega.required(),
});

const updateOrdersDto = Joi.object({
    producto: producto,
    precio: precio,
    proveedor: proveedor,
    direccion: direccion,
    fecha_pedido: fecha_pedido,
    aprox_entrega: aprox_entrega,
});

const getOrdersId = Joi.object({
  id: id.required(),
});

module.exports = {
  createOrdersDto,
  updateOrdersDto,
  getOrdersId,
};
