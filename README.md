# Express_S1_AcevedoEdgar

Express.js es un marco de trabajo (framework) diseñado para simplificar el proceso de desarrollo de aplicaciones web utilizando Node.js, un entorno de tiempo de ejecución de JavaScript del lado del servidor. Este marco es mínimo y flexible, lo que significa que proporciona solo las herramientas esenciales para crear aplicaciones web, permitiendo personalizar y expandir su funcionalidad según las necesidades de tu proyecto.

## Ventajas 

Una de las principales ventajas de Express.js es su simplicidad y su enfoque minimalista, pues en lugar de abrumar con una gran cantidad de funcionalidades predefinidas, Express.JS brinda la libertad de elegir las herramientas y librerías que mejor se adapten a los requerimientos, haciendolo ideal para proyectos de todos los tamaños, desde pequeñas aplicaciones hasta sistemas web complejos. 



## Pasos para crear un Proyecto 

Se configurará nodemon y a instalar Express. Se debe tener en cuenta que más adelante se añadiran más dependencias para crear una API completamente funcional.



Como primer paso se configurará el espacio de trabajo, parecido a los pasos usados para la creación de proyectos con NPM.


## Paso 1 

- Confguración del npm 

consola: npm init -y 
Luego se crea un archivo llamado: ' app.js ' 

- Instalación de las bibliotecas Express y Nodemon 
consola: npm i nodemon 
npm i express 

En el primer paquete package.json se debe agregar: 
"start": "nodemon app.js" 

- Iniciar nodemon mediante npm 

npm run start // con eso se inicia en consola 

- Estructura 

> node_modules 
> app.js 
> package-lock.json 
> package.json 

- Configuracion basica de Express con Nodemon 

``` 
{
  "name": "express",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon --watch app.js -quiet" 👀👀
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": { 👀👀
    "express": "^4.18.2",
    "nodemon": "^3.0.3"
  }
}
```


# Nodemon 

Cuando se está desarrollando una aplicación Node.JS, es común que se realicen cambios en el código y se necesite reiniciar el servidor para ver los efectos de esos cambios. Para ello se utiliza Nodemon, el cual es una librería que permite que en lugar de tener que detener y reiniciar manualmente el servidor cada vez que se hacen cambios en los archivos de tu aplicación, Nodemon observa los archivos en el proyecto y reinicia automáticamente el servidor cuando detecta cambios en el código fuente.

# Configuracion del Entorno de trabajo  - Cliente / Servidor 

const express = require('express'); 
const app = express();

//Definimos el puerto 
const PORT = 3000; 

//Ruta principal -> Endpoint 
app.get('/',(req,res) =>{
    res.send('Holissssss!!! Bienvenidos a Express ');
});

app.get('/mensaje1',(req,res) =>{
    res.send('Este es otro endpoint ');
});

app.post('/mensaje1',(req,res) =>{
    res.send('un post falso ');
});

// ruta con respuesta en formato JSON

app.get('/mensaje2',(req,res) =>{
    let jsonsito= {
        "mensaje":"Holiii"
    };
    //res.send('Este es otro endpoint');
    res.json(jsonsito);
});

//Iniciar el servidor 
app.listen(PORT,() => {
    console.log("Servidor iniciado!"); 
});


# Elaborado Por: 

Edgar Leonardo Acevedo Arteaga 
# Developer 


