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
    const recetas = [
  {
    nombre: "Paella Valenciana",
    descripcion: "Un clásico plato español con arroz, mariscos y azafrán.",
    nombreUsuario: "Carlos Pérez",
    cedulaUsuario: 123456789,
    ingredientes: ["Arroz", "Caldo de pescado", "Gambas", "Mejillones", "Azafrán", "Pimiento rojo"]
  },
  {
    nombre: "Tortilla de Patatas",
    descripcion: "Tradicional tortilla española de huevo y patata.",
    nombreUsuario: "Ana Gómez",
    cedulaUsuario: 987654321,
    ingredientes: ["Patatas", "Huevos", "Aceite de oliva", "Sal", "Cebolla"]
  },
  {
    nombre: "Gazpacho Andaluz",
    descripcion: "Sopa fría de tomate, perfecta para el verano.",
    nombreUsuario: "Luis Fernández",
    cedulaUsuario: 456123789,
    ingredientes: ["Tomates maduros", "Pepino", "Pimiento verde", "Aceite de oliva", "Vinagre", "Ajo", "Sal"]
  },
  {
    nombre: "Pulpo a la Gallega",
    descripcion: "Pulpo cocido con pimentón y patatas, típico de Galicia.",
    nombreUsuario: "Maria López",
    cedulaUsuario: 789654123,
    ingredientes: ["Pulpo", "Patatas", "Pimentón", "Aceite de oliva", "Sal gruesa"]
  },
  {
    nombre: "Croquetas de Jamón",
    descripcion: "Cremosas croquetas rellenas de jamón serrano.",
    nombreUsuario: "Javier Sánchez",
    cedulaUsuario: 321654987,
    ingredientes: ["Jamón serrano", "Leche", "Harina", "Mantequilla", "Huevo", "Pan rallado", "Aceite para freír"]
  }
];
;
  
      await connect();
      await getDB().collection("usuarios").deleteMany();
      await getDB().collection("usuarios").insertMany(usuarios);

      await getDB().collection("recetas").deleteMany();
      await getDB().collection("recetas").insertMany(recetas);
      
      console.log('Dataset agregado');
      process.exit();
      
};

seed()