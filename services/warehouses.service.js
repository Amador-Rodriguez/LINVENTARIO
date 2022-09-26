const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class WarehouseService {
  constructor() {
    this.whs = [];
    this.generate();
  }
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
  }
}

module.exports = WarehouseService;
