const faker = require('faker');
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
    return this.records.slice(0, limit);
  }
  findOne(id) {
    return this.records.find((item) => item.id == id);
  }
  findByName(usuario) {
    return this.records.find((item) => item.usuario == usuario);
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
    var currentAction = this.records[index];
    this.records[index] = {
      ...currentAction,
      ...changes,
    };
    return this.records[index];
  }

  replace(id, changes) {
    const index = this.records.findIndex((item) => item.id == id);
    this.records[index] = changes;
    return this.records[index];
  }

  delete(id) {
    const index = this.records.findIndex((item) => item.id == id);
    this.records.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = RecordService;