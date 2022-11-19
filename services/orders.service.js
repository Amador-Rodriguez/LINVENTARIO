//const faker = require('faker');
const boom = require('@hapi/boom');
const Model = require('../models/orders.model');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class OrderService {
  constructor() {}

  
  async createDB(data) {
    const model = new Model(data);
    model.save();
    return data;
  }

  async findDB(limit, filter) {
    let ordersDB = await Model.find(filter);
    ordersDB = limit
      ? ordersDB.filter((item, index) => item && index < limit)
      : ordersDB;
    if (ordersDB == undefined || ordersDB == null)
      throw boom.notFound('No se encontro orden');
    else if (ordersDB.length <= 0)
      throw boom.notFound('No se encontro ninguna orden');
    return ordersDB;
  }

  async findOneDB(id) {
    const order = await Model.findOne({
      _id: id,
    });
    if (order == undefined || order == null)
      throw boom.notFound('No se encontro orden');
    else if (order.length <= 0)
      throw boom.notFound('No se encontro ninguna orden');
    return order;
  }

  async updateDB(id, changes) {
    let order = await Model.findOne({
      _id: id,
    });
    let orderOriginal = {
      name: order.name,
      id: order.id,
    };
    const { name } = changes;
    order.name = name;
    order.save();

    return {
      original: orderOriginal,
      actualizado: order,
    };
  }

  async deleteDB(id) {
    let order = await Model.findOne({
      _id: id,
    });
    const { deletedCount } = await Model.deleteOne({
      _id: id,
    });
    if (deletedCount <= 0)
      throw boom.notFound('La orden seleccionada no existe');
    return order;
  }
   /* 
  generate() {
   
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.orders.push({
        id: i,
        producto: faker.commerce.product(),
        precio: faker.commerce.price(),
        proveedor: faker.company.companyName(),
        direccion: faker.address.streetAddress(), 
        fecha_pedido: faker.date.recent(),
        aprox_entrega: faker.date.recent()
      });
    }
  }
  find(limit) {
    return new Promise((resolve, rejected) => {

        var orders = this.orders.slice(0, limit);
        if(orders.length > 0){
          resolve(orders);
        } else {
          rejected('');
        }
      }, 5000);
    
  }

  findOne(id) {
    const order = this.orders.find((item) => item.id == id);

    validateData(order, NOTFOUND, 'No se encontro', (data)=> !data);

    return order;
    
  }
  findByName(name) {
    const order = this.orders.find((item) => item.producto == name);
    validateData(order, NOTFOUND, 'No se encontro', (data)=> !data);
    return order;
    
  }

  create(data) {
    const newOrder = {
      id: faker.random.uuid(),
      ...data,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  update(id, changes) {
    const index = this.orders.findIndex((item) => item.id == id);

    if(index == -1) throw boom.notFound('No encontrado');

    var currentOrder = this.orders[index];
    this.orders[index] = {
      ...currentOrder,
      ...changes,
    };
    return this.orders[index];
  }

  replace(id, changes) {
    const index = this.orders.findIndex((item) => item.id == id);

    if(index == -1) throw boom.notFound('No encontrado');

    this.orders[index] = changes;
    return this.orders[index];
  }

  delete(id) {
    const index = this.orders.findIndex((item) => item.id == id);

    if (index == -1) {
      if (index == -1) throw boom.notFound('No encontrado');

    }

    this.orders.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };

  }
  */
}

module.exports = OrderService;
