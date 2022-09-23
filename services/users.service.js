const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class UserService {
    constructor(){
        this.users = [];
        this.generate();
    }
    generate(){
        const limit = 5;
        for(let i = 0; i < limit; i++){
            this.users.push({
                id: i,
                nombre : faker.name.findName(),
                email: faker.internet.email(),
                tienda: faker.company.companyName(),
                foto_perfil: faker.image.imageUrl(),
                tipo: 'Administrador/Colaborador',
            });
        }
    }
    find(limit){
        return new Promise((resolve, rejected) => {

            var users = this.users.slice(0, limit);
            if(users.length > 0){
              resolve(users);
            } else {
              rejected('');
            }
          }, 5000);
        //return this.users.slice(0,limit);
    }
    findOne(id){
        const users = this.users.find((item) => item.id == id);

    validateData(users, NOTFOUND, 'No se encontro', (data)=> !data);

    return users;
        //return this.users.find((item) => item.id == id);
    }
    findByName(name) {
        const users = this.users.find((item) => item.nombre == name);
    validateData(users, NOTFOUND, 'No se encontro', (data)=> !data);
    return users;
        //return this.users.find((item) => item.nombre == name);
      }

    create(data){
        const newUser = {
            id: faker.random.uuid(),
            ...data,
        };
        this.users.push(newUser);
        return newUser;
    }

    update(id, changes) {
        const index = this.users.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');

        var currentUser = this.users[index];
        this.users[index] = {
            ...currentUser,
            ...changes,
        };
        return this.users[index];
    }

    replace(id, changes) {
        const index = this.users.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');

        this.users[index] = changes;
        return this.users[index];
      }

    delete(id){
        const index = this.users.findIndex((item) => item.id == id);

        if (index == -1) {
            if (index == -1) throw boom.notFound('No encontrado');
            
          }
          
        this.users.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
}

module.exports = UserService;