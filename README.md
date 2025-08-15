# 🍲 Recetas Culinarias API

**Autor:** Nicole Ordoñez

API REST construida con **Node.js**, **Express** y **MongoDB** para gestionar usuarios, recetas e ingredientes de una plataforma culinaria.

---
## 📄 Video

Puedes consultar el video de exposición aquí:  
[📥 Ver video](https://drive.google.com/drive/folders/1Yd2JkG8dk5FOm53t-UC6popIKU0WHrkJ?usp=sharing)

---

## 📂 Estructura del Proyecto

```

RECETAS\_CULINARIAS/
│
├── db/
│   ├── config.js         # Conexión a la base de datos MongoDB
│   ├── dataset.js        # Script de inicialización con datos de prueba
│
├── routers/
│   ├── usuariosRouter.js       # Rutas relacionadas con usuarios
│   ├── recetasRouter.js        # Rutas relacionadas con recetas
│   ├── ingredientesRouter.js   # Rutas relacionadas con ingredientes
│
├── .env                  # Variables de entorno (URI Mongo, puerto, etc.)
├── app.js                # Configuración y arranque del servidor
├── package.json
└── README.md

````

---

## ⚙️ Instalación y Configuración

1. **Clonar repositorio**
   ```bash
   git clone <url-del-repo>
   cd RECETAS_CULINARIAS

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crear un archivo `.env` en la raíz con:

   ```env
   MONGO_URI=mongodb://localhost:27017
   DB_NAME=recetasCulinarias
   PORT=5500
   ```

4. **Inicializar base de datos con datos de prueba**

   ```bash
   node db/dataset.js
   ```

5. **Iniciar servidor**

   ```bash
   npm start
   ```

---

## 📌 Endpoints

### 👤 Usuarios

#### 1. Obtener todos los usuarios

* **Método:** `GET`
* **URL:** `/recetasCulinarias/findall`
* **Descripción:** Devuelve la lista completa de usuarios.
* **Ejemplo Response:**

```json
[
  {
    "nombre": "Juan Pérez",
    "cedula": 123456,
    "telefono": "3001234567",
    "correo": "juan@example.com"
  }
]
```

#### 2. Obtener usuario por cédula

* **Método:** `GET`
* **URL:** `/recetasCulinarias/get/:cedula`
* **Descripción:** Devuelve un usuario específico.
* **Ejemplo Request:** `/recetasCulinarias/get/123456`
* **Ejemplo Response:**

```json
{
  "nombre": "Juan Pérez",
  "cedula": 123456,
  "telefono": "3001234567",
  "correo": "juan@example.com"
}
```

#### 3. Registrar usuario

* **Método:** `POST`
* **URL:** `/recetasCulinarias/registarUsuario`
* **Body:**

```json
{
  "nombre": "Juan Pérez",
  "cedula": 123456,
  "telefono": "3001234567",
  "correo": "juan@example.com"
}
```

* **Response:**

```json
{ "message": "Usuario ha sido creado" }
```

#### 4. Actualizar usuario

* **Método:** `PATCH`
* **URL:** `/recetasCulinarias/patch/:cedula`
* **Body:**

```json
{
  "telefono": "3007654321",
  "correo": "nuevo@example.com"
}
```

* **Response:**

```json
{ "message": "Usuario actualizado correctamente" }
```

#### 5. Eliminar usuario

* **Método:** `DELETE`
* **URL:** `/recetasCulinarias/delete/:cedula`
* **Response:**

```json
{ "response": "El usuario ha sido eliminado" }
```

---

### 🍽 Recetas

#### 1. Obtener todas las recetas

* **Método:** `GET`
* **URL:** `/recetasCulinarias/recetas`

#### 2. Obtener receta por nombre

* **Método:** `GET`
* **URL:** `/recetasCulinarias/getRecipe/:nombre`

#### 3. Obtener receta por usuario

* **Método:** `GET`
* **URL:** `/recetasCulinarias/getRecipeByUser/:nombreUsuario`

#### 4. Registrar receta

* **Método:** `POST`
* **URL:** `/recetasCulinarias/registarReceta`
* **Body:**

```json
{
  "nombre": "Arroz con pollo",
  "descripcion": "Receta tradicional",
  "nombreUsuario": "Juan Pérez"
}
```

#### 5. Actualizar receta

* **Método:** `PATCH`
* **URL:** `/recetasCulinarias/patchReceta/:nombre`

#### 6. Eliminar receta

* **Método:** `DELETE`
* **URL:** `/recetasCulinarias/deleteReceta/:nombre`

---

### 🥗 Ingredientes

#### 1. Buscar recetas por ingrediente

* **Método:** `GET`
* **URL:** `/recetasCulinarias/getIngrediente/:ingredienteNombre`

#### 2. Agregar ingrediente a receta

* **Método:** `PATCH`
* **URL:** `/recetasCulinarias/patchIngrediente/:nombre`
* **Body:**

```json
{ "ingrediente": "Sal" }
```

#### 3. Eliminar ingrediente de receta

* **Método:** `PATCH`
* **URL:** `/recetasCulinarias/patchDeleteIngrediente/:nombre`
* **Body:**

```json
{ "ingrediente": "Sal" }
```

---

## 🛠 Manejo de Errores

* `404 Not Found` → Cuando el recurso no existe.
* `400 Bad Request` → Datos inválidos enviados en el request.
* `500 Internal Server Error` → Error inesperado en el servidor.

---

## 🚀 Tecnologías Usadas

* Node.js
* Express.js
* MongoDB (nativo)
* Dotenv

---
