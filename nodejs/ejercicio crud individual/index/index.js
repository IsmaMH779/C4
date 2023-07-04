const express = require('express');
const port = 3000;
const app = express();

const db = require('./db');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));


//mostrar la home
app.get('/', (req, res) => {
    res.render('index')
});


//mosrar tabla de productos
app.get('/productos', (req, res) => {
    sql = 'select * from productos'
    db.query(sql, (error, result) => {
        if (error) throw error;
        res.render('index_productos', { productos: result })
    });
});

//mostrar tabla de fabricantes
app.get('/fabricantes', (req, res) => {
    sql = 'select * from fabricantes'
    db.query(sql, (error, result) => {
        if (error) throw error;
        res.render('index_fabricantes', { fabricantes: result })
    });
});

//mostrar tabla productos por fabricantes
app.get('/productos_fabricante/:id', (req, res) => {
    sql = 'select f.nombre as fabricante, p.nombre as art,precio,stock,c.nombre,p.id as pid from productos as p join fabricantes as f on f.id = p.fabricante join categorias as c on c.id = p.categoria where f.id = ? '
    const id = req.params.id;
    db.query(sql, id, (error, result) => {
        if (error) throw error;
        res.render('producto_fabricantes', { fab: result[0].fabricante, productos: result })
    });
});

//mostrar tabla de categorias
app.get('/categorias', (req, res) => {
    sql = 'select * from categorias'
    db.query(sql, (error, result) => {
        if (error) throw error;
        res.render('index_categorias', { categorias: result })
    });
});
//mostrar tabla productos por categoria
app.get('/producto_categoria/:id', (req, res) => {
    sql = 'select c.nombre as categoria, p.nombre as art,precio,stock,f.nombre,p.id as pid from productos as p join fabricantes as f on f.id = p.fabricante join categorias as c on c.id = p.categoria where c.id = ? '
    const id = req.params.id;
    db.query(sql, id, (error, result) => {
        if (error) throw error;
        res.render('producto_categoria', { cat: result[0].categoria, productos: result })
    });

});


// ACCIONES

// tabla productos
//eliminar producto
app.get('/eliminar/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM productos WHERE id = ?', id, (error, result) => {
        if (error) throw error;
        res.redirect('/productos');
    });
});


//mostrar el producto a editar
app.get('/editar/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM productos WHERE id = ?', id, (error, result) => {
        if (error) throw error;
        res.render('editar', { productos: result[0] });
    });
});

//actualizar datos editados

app.post('/editar/:id', (req, res) => {
    const id = req.params.id;
    const { precio, stock } = req.body;
    db.query('UPDATE productos SET precio = ?, stock = ? WHERE id = ?', [precio, stock, id], (error, result) => {
        if (error) throw error;
        res.redirect('/');
    });
});
//mostrar productos ordenados por precio ascendente
app.get('/ProductoPrecioAscendente', (req, res) => {
    sql = 'select * from productos order by precio asc'
    db.query(sql, (error, result) => {
        if (error) throw error;
        res.render('index_productos', { productos: result })

    });
});

//mostrar productos ordenados por precio descendente
app.get('/ProductoPrecioDescendente', (req, res) => {
    sql = 'select * from productos order by precio desc'
    db.query(sql, (error, result) => {
        if (error) throw error;
        res.render('index_productos', { productos: result })
    });
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
})