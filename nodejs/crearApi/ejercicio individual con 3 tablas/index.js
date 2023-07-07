const express = require('express');
const bodyParser = require('body-parser');
//express
const app = express();

//setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});



// Require productos routes
const productosRoutes = require('./src/routes/productos.routes')
// using as middleware
app.use('/api/v1/productos', productosRoutes)

// Require categorias routes
const categoriasRoutes = require('./src/routes/categorias.routes')
// using as middleware
app.use('/api/v1/categorias', categoriasRoutes)

// Require fabricante routes
const fabricantesRoutes = require('./src/routes/fabricante.routes')
// using as middleware
app.use('/api/v1/fabricante', fabricantesRoutes)



// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});