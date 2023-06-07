fetch('../personal.json')
    .then(response => response.json())
    .then(respuesta => {
        // Header
        let Header = document.createElement("div");
        Header.id = "header";
        document.body.appendChild(Header);
        // Header content
        let UserName = document.createElement("h1");
        let Profession = document.createElement("h3");

        UserName.textContent = respuesta.nombre;
        Profession.textContent = respuesta.oficio;

        Header.appendChild(UserName);
        Header.appendChild(Profession);
        // Container
        let Container = document.createElement("div");
        Container.id = "Container";
        document.body.appendChild(Container);
        // Container content
        let table = document.createElement("table");

        //header de la tabla
        let trh = document.createElement("tr");

        Object.keys(respuesta.empresas[0]).forEach(e => {
            let th = document.createElement("th");
            th.textContent = e;
            trh.appendChild(th)
        })
        table.appendChild(trh)

        //contenido de la tabla
        respuesta.empresas.forEach(element => {
            let tr = document.createElement("tr");

            Object.values(element).forEach(a => {
                let td = document.createElement("td");
                td.textContent = a;
                tr.appendChild(td)
            })
            table.appendChild(tr)
        });

        Container.appendChild(table);


    }).catch(error => {
        console.log("se ha producido un error :" + error)
    })