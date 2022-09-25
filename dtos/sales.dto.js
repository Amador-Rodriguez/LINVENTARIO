const Joi = require('joi');

const id = Joi.string().alphanum();
const codigo = Joi.number().integer().min(10);
const nombre = Joi.string().min(3).max(50);
const descripcion = Joi.string().min(3).max(50);
const marca = Joi.string().min(3).max(50);
const categoria = Joi.string().min(3).max(50);
const subcategoria = Joi.string().min(3).max(50);
const precio = Joi.number().integer().min(10);
const stock = Joi.number().integer().min(10);
const min_stock = Joi.number().integer().min(10);
const entry = Joi.number().integer().min(10); //buscar para fecha
const proveedor = Joi.string().min(3).max(50);

const createSalesDto = Joi.object({
    nombre: nombre.required(),
    codigo: codigo.required(),
    descripcion: descripcion.required(),
    marca: marca.required(),
    categoria: categoria.required(),
    subcategoria: subcategoria.required(),
    precio: precio.required(),
    stock: stock.required(),
    min_stock: min_stock.required(),
    entry: entry.required(),
    proveedor: proveedor.required(),
});

const updateSalesDto = Joi.object({
    nombre: nombre,
    codigo: codigo,
    descripcion: descripcion,
    marca: marca,
    categoria: categoria,
    subcategoria: subcategoria,
    precio: precio,
    stock: stock,
    min_stock: min_stock,
    entry: entry,
    proveedor: proveedor,
});

const getSalesId = Joi.object({
  id: id.required(),
});

module.exports = {
  createSalesDto,
  updateSalesDto,
  getSalesId,
};
