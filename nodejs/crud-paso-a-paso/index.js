const express = require('express');
const port = 3000;
const app = express();

const db = require('./db');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

//obtener todos los usuarios
app.get('/', (req, res) => {
    sql = 'select * from usuarios'
    db.query(sql, (error, result) => {
        if (error) throw error;
        res.render('index', { usuarios: result })
    });
});

//mostrar formulario para agregar usuario
app.get('/agregar', (req, res) => {
    res.render('agregar');
})

//agregar un usuario a la bd
app.post('/agregar', (req, res) => {
    const { nombre, correo } = req.body;
    sql = 'insert into usuarios set ?';
    db.query(sql, { nombre, correo }, (error, result) => {
        if (error) throw error;
        res.redirect('/')
    });
});

//mostrar formulario para editar un usuario
app.get('/editar/:id', (req, res) => {
    const id = req.params.id;
    db.query('select * from usuarios where id = ?', id, (error, result) => {
        if (error) throw error;
        res.render('editar', { usuario: result[0] });
    });
});

//actualizar un usuarui en la base de datos
app.post('/editar/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, correo } = req.body;
    db.query('update usuarios set nombre = ?, correo = ? where id = ?', [nombre, correo, id], (error, result) => {
        if (error) throw error;
        res.redirect('/')
    });
});


//elimiar un usuario de la base de datos
app.get('/eliminar/:id', (req, res) => {
    const id = req.params.id;
    sql = 'delete from usuarios where id = ?';
    db.query(sql, id, (error, result) => {
        if (error) throw error;
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
})