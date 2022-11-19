const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');
const Model = require('../models/inventory.model');

class InvService {
  constructor() {
    /* 
    this.inv = [];
    this.generate();*/
  }
  async createDB(data) {
    const model = new Model(data);
    model.save();
    return data;
  }

  async findDB(limit, filter) {
    let inventoryDB = await Model.find(filter);
    inventoryDB = limit
      ? inventoryDB.filter((item, index) => item && index < limit)
      : inventoryDB;
    if (inventoryDB == undefined || inventoryDB == null)
      throw boom.notFound('No se encontro catalogo');
    else if (inventoryDB.length <= 0)
      throw boom.notFound('No se encontro ningún registro');
    return inventoryDB;
  }

  async findOneDB(id) {
    const inventory = await Model.findOne({
      _id: id,
    });
    if (inventory == undefined || inventory == null)
      throw boom.notFound('No se encontro catalogo');
    else if (inventory.length <= 0)
      throw boom.notFound('No se encontro ningún registro');
    return inventory;
  }

  async updateDB(id, changes) {
    let inventory = await Model.findOne({
      _id: id,
    });
    let inventoryOriginal = {
      nombre: inventory.nombre,
      id: inventory.id,
    };
    const { nombre } = changes;
    inventory.nombre = nombre;
    inventory.save();

    return {
      original: inventoryOriginal,
      actualizado: inventory,
    };
  }

  async deleteDB(id) {
    let inventory = await Model.findOne({
      _id: id,
    });
    const { deletedCount } = await Model.deleteOne({
      _id: id,
    });
    if (deletedCount <= 0)
      throw boom.notFound('El registro seleccionado no existe');
    return inventory;
  }
  /* 
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
  }*/
}

module.exports = InvService;
