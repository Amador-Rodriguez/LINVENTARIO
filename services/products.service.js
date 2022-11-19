//const faker = require('faker');
const boom = require('@hapi/boom');
const Model = require('../models/products.model');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class ProductService {
  constructor() {}

  async createDB(data) {
    const model = new Model(data);
    model.save();
    return data;
  }

  async findDB(limit, filter) {
    let productsDB = await Model.find(filter);
    productsDB = limit
      ? productsDB.filter((item, index) => item && index < limit)
      : productsDB;
    if (productsDB == undefined || productsDB == null)
      throw boom.notFound('No se encontro catalogo');
    else if (productsDB.length <= 0)
      throw boom.notFound('No se encontro ningún producto');
    return productsDB;
  }

  async findOneDB(id) {
    const product = await Model.findOne({
      _id: id,
    });
    if (product == undefined || product == null)
      throw boom.notFound('No se encontro catalogo');
    else if (product.length <= 0)
      throw boom.notFound('No se encontro ningún producto');
    return product;
  }

  async updateDB(id, changes) {
    let product = await Model.findOne({
      _id: id,
    });
    let productOriginal = {
      name: product.name,
      id: product.id,
    };
    const { name } = changes;
    product.name = name;
    product.save();

    return {
      original: productOriginal,
      actualizado: product,
    };
  }

  async deleteDB(id) {
    let product = await Model.findOne({
      _id: id,
    });
    const { deletedCount } = await Model.deleteOne({
      _id: id,
    });
    if (deletedCount <= 0)
      throw boom.notFound('El producto seleccionado no existe');
    return product;
  }
  /* 
  generate() {
    const limit = 15;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        codigo: faker.random.number(),
        nombre: faker.commerce.product(),
        descripcion: faker.commerce.productDescription(),
        marca: "Sabritas",
        categoria: faker.commerce.department(),
        subcategoria: faker.commerce.department(),
        precio: faker.commerce.price(),
        stock: faker.random.number(),
        min_stock: faker.random.number(),
        entry: faker.date.recent(),
        proveedor: faker.company.companyName()
      });
    }
  }
  find(limit) {
    return new Promise((resolve, rejected) => {

        var products = this.products.slice(0, limit);
        if(products.length > 0){
          resolve(products);
        } else {
          rejected('');
        }
      }, 5000);
    //return this.products.slice(0, limit);
  }

  findOne(id) {
    const product = this.products.find((item) => item.id == id);

    validateData(product, NOTFOUND, 'No se encontro', (data)=> !data);

    return product;
    //return this.products.find((item) => item.id == id);
  }
  findByName(name) {
    const product = this.products.find((item) => item.nombre == name);
    validateData(product, NOTFOUND, 'No se encontro', (data)=> !data);
    return product;
    //return this.products.find((item) => item.nombre == name);
  }

  create(data) {
    const newProduct = {
      id: faker.random.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id, changes) {
    const index = this.products.findIndex((item) => item.id == id);

    if(index == -1) throw boom.notFound('No encontrado');

    var currentProduct = this.products[index];
    this.products[index] = {
      ...currentProduct,
      ...changes,
    };
    return this.products[index];
  }

  replace(id, changes) {
    const index = this.products.findIndex((item) => item.id == id);

    if(index == -1) throw boom.notFound('No encontrado');

    this.products[index] = changes;
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id == id);

    if (index == -1) {
      if (index == -1) throw boom.notFound('No encontrado');

    }

    this.products.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }*/
}

module.exports = ProductService;
