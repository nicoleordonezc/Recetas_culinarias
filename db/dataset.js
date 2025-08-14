import {connect, getDB} from "./config.js";

async function seed() {
    const usuarios = [
        {
          "nombre": "Carlos Pérez",
          "telefono": "+34 612 345 678",
          "correo": "carlos.perez@email.com",
          "cedula": 123456789
        },
        {
          "nombre": "Ana Gómez",
          "telefono": "+34 699 876 543",
          "correo": "ana.gomez@email.com",
          "cedula": 987654321
        },
        {
          "nombre": "Luis Fernández",
          "telefono": "+34 634 567 890",
          "correo": "luis.fernandez@email.com",
          "cedula": 456123789
        },
        {
          "nombre": "Maria López",
          "telefono": "+34 678 123 456",
          "correo": "maria.lopez@email.com",
          "cedula": 789654123
        },
        {
          "nombre": "Javier Sánchez",
          "telefono": "+34 699 112 233",
          "correo": "javier.sanchez@email.com",
          "cedula": 321654987
        }
      ];      
      
      await connect();
      await getDB().collection("usuarios").deleteMany();
      await getDB().collection("usuarios").insertMany(usuarios);

      console.log('Dataset agregado');
      process.exit();
      
};

seed()