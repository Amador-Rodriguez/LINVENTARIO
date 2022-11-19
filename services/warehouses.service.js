//const faker = require('faker');
const boom = require('@hapi/boom');
const Model = require('../models/warehouse.model');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class WarehouseService {
  constructor() {}

  async createDB(data) {
    const model = new Model(data);
    model.save();
    return data;
  }

  async findDB(limit, filter) {
    let warehousesDB = await Model.find(filter);
    warehousesDB = limit
      ? warehousesDB.filter((item, index) => item && index < limit)
      : warehousesDB;
    if (warehousesDB == undefined || warehousesDB == null)
      throw boom.notFound('No se encontro sucursales');
    else if (warehousesDB.length <= 0)
      throw boom.notFound('No se encontro ninguna sucursal');
    return warehousesDB;
  }

  async findOneDB(id) {
    const warehouse = await Model.findOne({
      _id: id,
    });
    if (warehouse == undefined || warehouse == null)
      throw boom.notFound('No se encontro sucursales');
    else if (warehouse.length <= 0)
      throw boom.notFound('No se encontro ninguna sucursal');
    return warehouse;
  }

  async updateDB(id, changes) {
    let warehouse = await Model.findOne({
      _id: id,
    });
    let warehouseOriginal = {
      name: warehouse.name,
      id: warehouse.id,
    };
    const { name } = changes;
    warehouse.name = name;
    warehouse.save();

    return {
      original: warehouseOriginal,
      actualizado: warehouse,
    };
  }

  async deleteDB(id) {
    let warehouse = await Model.findOne({
      _id: id,
    });
    const { deletedCount } = await Model.deleteOne({
      _id: id,
    });
    if (deletedCount <= 0)
      throw boom.notFound('La sucursal seleccionado no existe');
    return warehouse;
  }
  /* 
  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.whs.push({
        id: i,
        nombre: faker.company.companyName(),
        direccion: faker.address.streetAddress(),
        municipio: faker.address.cityName(),
        estado: faker.address.state(),
        pais: faker.address.country(),
        propietario: faker.name.findName()
      });
    }
  }
  find(limit) {
    return new Promise((resolve, rejected) => {

        var whs = this.whs.slice(0, limit);
        if(whs.length > 0){
          resolve(whs);
        } else {
          rejected('');
        }
      }, 5000);

  }

  findOne(id) {
    const whs = this.whs.find((item) => item.id == id);

    validateData(whs, NOTFOUND, 'No se encontro', (data)=> !data);

    return whs;

  }
  findByName(name) {
    const whs = this.whs.find((item) => item.nombre == name);
    validateData(s, NOTFOUND, 'No se encontro', (data)=> !data);
    return whs;

  }

  create(data) {
    const newWarehouse = {
      id: faker.random.uuid(),
      ...data,
    };
    this.whs.push(newWarehouse);
    return newWarehouse;
  }

  update(id, changes) {
    const index = this.whs.findIndex((item) => item.id == id);

    if(index == -1) throw boom.notFound('No encontrado');

    var currentWarehouse = this.whs[index];
    this.whs[index] = {
      ...currentWarehouse,
      ...changes,
    };
    return this.whs[index];
  }

  replace(id, changes) {
    const index = this.whs.findIndex((item) => item.id == id);

    if(index == -1) throw boom.notFound('No encontrado');

    this.whs[index] = changes;
    return this.whs[index];
  }

  delete(id) {
    const index = this.whs.findIndex((item) => item.id == id);

    if (index == -1) {
      if (index == -1) throw boom.notFound('No encontrado');

    }

    this.whs.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }*/
}

module.exports = WarehouseService;
