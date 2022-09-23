const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class InvService {
  constructor() {
    this.inv = [];
    this.generate();
  }
  generate() {
    const limit = 5;
    for (let i = 0; i < limit; i++) {
      this.inv.push({
        id: i,
        proveedor: faker.company.companyName(),
        producto: faker.commerce.product(),
        stock: faker.random.number(),
      });
    }
  }
  find(limit) {
    return new Promise((resolve, rejected) => {

      var inv = this.inv.slice(0, limit);
      if(inv.length > 0){
        resolve(inv);
      } else {
        rejected('');
      }
    }, 5000);
    //return this.inv.slice(0, limit);
  }
  findOne(id) {
    const inv = this.inv.find((item) => item.id == id);

    validateData(inv, NOTFOUND, 'No se encontro', (data)=> !data);

    return inv;
    //return this.inv.find((item) => item.id == id);
  }

  create(data) {
    const newInv = {
      id: faker.random.uuid(),
      ...data,
    };
    this.inv.push(newInv);
    return newInv;
  }

  update(id, changes) {
    const index = this.inv.findIndex((item) => item.id == id);

    if(index == -1) throw boom.notFound('No encontrado');

    var currentInv = this.inv[index];
    this.inv[index] = {
      ...currentInv,
      ...changes,
    };
    return this.inv[index];
  }

  replace(id, changes) {
    const index = this.inv.findIndex((item) => item.id == id);

    if(index == -1) throw boom.notFound('No encontrado');

    this.inv[index] = changes;
    return this.inv[index];
  }

  delete(id) {
    const index = this.inv.findIndex((item) => item.id == id);

    if (index == -1) {
      if (index == -1) throw boom.notFound('No encontrado');
      
    }
    
    this.inv.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = InvService;
