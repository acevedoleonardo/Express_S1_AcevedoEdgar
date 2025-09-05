/* 
-- DIA 1 -- 
*/

//Importacion de express en variable app 

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

