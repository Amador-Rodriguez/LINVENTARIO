//const faker = require('faker');
const boom = require('@hapi/boom');
const Model = require('../models/sales.model');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class SaleService {
    constructor(){}

    async createDB(data) {
        const model = new Model(data);
        model.save();
        return data;
      }
    
      async findDB(limit, filter) {
        let salesDB = await Model.find(filter);
        salesDB = limit
          ? salesDB.filter((item, index) => item && index < limit)
          : salesDB;
        if (salesDB == undefined || salesDB == null)
          throw boom.notFound('No se encontro ventas');
        else if (salesDB.length <= 0)
          throw boom.notFound('No se encontro ninguna venta');
        return salesDB;
      }
    
      async findOneDB(id) {
        const sale = await Model.findOne({
          _id: id,
        });
        if (sale == undefined || sale == null)
          throw boom.notFound('No se encontro ventas');
        else if (sale.length <= 0)
          throw boom.notFound('No se encontro ninguna venta');
        return sale;
      }
    
      async updateDB(id, changes) {
        let sale = await Model.findOne({
          _id: id,
        });
        let saleOriginal = {
          name: sale.name,
          id: sale.id,
        };
        const { name } = changes;
        sale.name = name;
        sale.save();
    
        return {
          original: saleOriginal,
          actualizado: sale,
        };
      }
    
      async deleteDB(id) {
        let sale = await Model.findOne({
          _id: id,
        });
        const { deletedCount } = await Model.deleteOne({
          _id: id,
        });
        if (deletedCount <= 0)
          throw boom.notFound('La venta seleccionada no existe');
        return sale;
      }
    /* 
    generate(){
        const limit = 5;
        for(let i = 0; i < limit; i++){
            this.sales.push({
                id: i,
                codigo : faker.random.number(),
                producto: faker.commerce.product(),
                cantidad: faker.random.number(),
                precio: faker.commerce.price(),
                cliente: faker.company.companyName(),
                fecha: faker.date.recent()
            });
        }
    }
    find(limit){
        return new Promise((resolve, rejected) => {

            var sales = this.sales.slice(0, limit);
            if(sales.length > 0){
              resolve(sales);
            } else {
              rejected('');
            }
          }, 5000);
        //return this.sales.slice(0,limit);
    }
    findOne(id){
        const sales = this.sales.find((item) => item.id == id);

    validateData(sales, NOTFOUND, 'No se encontro', (data)=> !data);

    return sales;
        //return this.sales.find((item) => item.id == id);
    }
    findByName(name) {
        const sales = this.sales.find((item) => item.producto == name);
    validateData(sales, NOTFOUND, 'No se encontro', (data)=> !data);
    return sales;
        //return this.sales.find((item) => item.producto == name);
      }

    create(data){
        const newSale = {
            id: faker.random.uuid(),
            ...data,
        };
        this.sales.push(newSale);
        return newSale;
    }

    update(id, changes) {
        const index = this.sales.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');
        
        var currentSale = this.sales[index];
        this.sales[index] = {
            ...currentSale,
            ...changes,
        };
        return this.sales[index];
    }

    replace(id, changes) {
        const index = this.sales.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');

        this.sales[index] = changes;
        return this.sales[index];
      }

    async delete(id){
        const index = this.sales.findIndex((item) => item.id == id);

        if (index == -1) {
            if (index == -1) throw boom.notFound('No encontrado');
            
          }

        this.sales.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }*/
}

module.exports = SaleService;