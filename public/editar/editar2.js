//SELECT DNI

fetch("/clientes/cliente")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        for (let i = 0; i < res.length; i++) {
            document.querySelector( "select[name='mdni']").innerHTML += `<option>${res[i].dni}</option>`;
            document.querySelector( "select[name='ddni']").innerHTML += `<option>${res[i].dni}</option>`;
        }
        
    });

//AÑADIR CLIENTE
document
    .querySelector("#post")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombrec']").value;
        let apellido = document.querySelector("input[name='apellido']").value;
        let dni = document.querySelector("input[name='dni']").value;
        let cp = document.querySelector("input[name='cp']").value;
        let direccion = document.querySelector("input[name='direccion']").value;
        let correo = document.querySelector("input[name='correo']" ).value;
        let telefono = document.querySelector("input[name='telefono']").value;

        let cliente = {
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            cp: cp,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
        };
        let body = JSON.stringify(cliente);

        fetch("/clientes/cliente", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {});
    });
//MODIFICAR CLIENTE
    document
    .querySelector("#put")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let dni = document.querySelector("select[name='mdni']").value;
        let nombre = document.querySelector("input[name='nombrem']").value;
        let apellido = document.querySelector("input[name='apellido']").value;
        let cp = document.querySelector("input[name='cp']").value;
        let direccion = document.querySelector("input[name='direccion']").value;
        let correo = document.querySelector("input[name='correo']").value;
        let telefono = document.querySelector("input[name='telefono']").value;
      

        let cliente = {
            dni : dni,
            nombre: nombre,
            apellido: apellido,
            cp: cp,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
        };
        let body = JSON.stringify(cliente);

        fetch("/clientes/cliente", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {});
    });
//ELIMINAR CLIENTE
document
    .querySelector("#delete")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let dni = document.querySelector("select[name='ddni']").value;
        let cliente = {
            dni: dni,
        };
        let body = JSON.stringify(cliente);

        fetch("/clientes/cliente", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {});
    });