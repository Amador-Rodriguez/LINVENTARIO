const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class RecordService {
  constructor() {
    this.records = [];
    this.generate();
  }
  generate() {
    const limit = 5;
    for (let i = 0; i < limit; i++) {
      this.records.push({
        id: i,
        usuario: faker.name.findName(),
        tipo: "Administrador/Colaborador",
        accion: "Publicar,editar,borrar",
        fecha: faker.date.recent()
      });
    }
  }
  find(limit) {
    return new Promise((resolve, rejected) => {

      var records = this.records.slice(0, limit);
      if(records.length > 0){
        resolve(records);
      } else {
        rejected('');
      }
    }, 5000);
    //return this.records.slice(0, limit);
  }
  findOne(id) {
    const records = this.records.find((item) => item.id == id);

    validateData(records, NOTFOUND, 'No se encontro', (data)=> !data);

    return records;
    //return this.records.find((item) => item.id == id);
  }
  findByName(usuario) {
    const records = this.records.find((item) => item.nombre == usuario);
    validateData(records, NOTFOUND, 'No se encontro', (data)=> !data);
    return records;
    //return this.records.find((item) => item.usuario == usuario);
  }

  create(data) {
    const newAction = {
      id: faker.random.uuid(),
      ...data,
    };
    this.records.push(newAction);
    return newAction;
  }

  update(id, changes) {
    const index = this.records.findIndex((item) => item.id == id);

    if(index == -1) throw boom.notFound('No encontrado');

    var currentAction = this.records[index];
    this.records[index] = {
      ...currentAction,
      ...changes,
    };
    return this.records[index];
  }

  replace(id, changes) {
    const index = this.records.findIndex((item) => item.id == id);

    if(index == -1) throw boom.notFound('No encontrado');

    this.records[index] = changes;
    return this.records[index];
  }

  delete(id) {
    const index = this.records.findIndex((item) => item.id == id);

    if (index == -1) {
      if (index == -1) throw boom.notFound('No encontrado');

    }

    this.records.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = RecordService;
