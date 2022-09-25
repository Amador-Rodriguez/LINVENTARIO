const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }
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
  }
}

module.exports = ProductService;
