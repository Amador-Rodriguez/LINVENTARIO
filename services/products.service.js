const faker = require('faker');
class ProductService {
    constructor(){
        this.products = [];
        this.generate();
    }
    generate(){
        const limit = 10;
        for(let i = 0; i < limit; i++){
            this.products.push({
                id : i,
                codigo : faker.random.number(),
                nombre : faker.commerce.product(),
                descripcion : faker.commerce.productDescription(),
                marca : "Sabritas",
                categoria : faker.commerce.department(),
                subcategoria : faker.commerce.department(),
                precio : faker.commerce.price(),
                stock : faker.random.number(),
                min_stock : faker.random.number(),
                entry : faker.date.recent(),
                proveedor : faker.company.companyName()
            });
        }
    }
    find(limit){
        return this.products.slice(0,limit);
    }
    findOne(id){
        return this.products.find((item) => item.id === id);
    }

    create(data){
        const newProduct = {
            id: faker.random.uuid(),
            ...data,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    async update(id, changes) {
        const index = this.products.findIndex((item) => item.id === id);
        var currentProduct = this.products[index];
        this.products[index] = {
            ...currentProduct,
            ...changes,
        };
        return this.products[index];
    }

    async delete(id){
        const index = this.products.findIndex((item) => item.id == id);
        this.products.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
}

module.exports = ProductService;