//AÑADIR COMIC
document
    .querySelector("#insertarco")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let escritor = document.querySelector("input[name='escritor']").value;
        let editorial = document.querySelector("input[name='editorial']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let paginas = document.querySelector("input[name='paginas']").value;
        let ejemplares = document.querySelector(
            "input[name='ejemplares']"
        ).value;
        let genero = document.querySelector("input[name='genero']").value;
        let isbn = document.querySelector("input[name='isbn']").value;
        let img = document.querySelector("input[name='img']").value;

        let comic = {
            nombre: nombre,
            escritor: escritor,
            editorial: editorial,
            precio: precio,
            paginas: paginas,
            ejemplares: ejemplares,
            genero: genero,
            isbn: isbn,
            img: img,
        };
        let body = JSON.stringify(comic);

        fetch("/comics/comic", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha añadido correctamente");
            });
    });
//MODIFICAR COMIC
document
    .querySelector("#modificarco")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre3']").value;
        let escritor = document.querySelector("input[name='escritor3']").value;
        let editorial = document.querySelector(
            "input[name='editorial3']"
        ).value;
        let precio = document.querySelector("input[name='precio3']").value;
        let paginas = document.querySelector("input[name='paginas3']").value;
        let ejemplares = document.querySelector(
            "input[name='ejemplares3']"
        ).value;
        let genero = document.querySelector("input[name='genero3']").value;
        let isbn = document.querySelector("input[name='isbn3']").value;
        let img = document.querySelector("input[name='img3']").value;

        let comic = {
            nombre: nombre,
            escritor: escritor,
            editorial: editorial,
            precio: precio,
            paginas: paginas,
            ejemplares: ejemplares,
            genero: genero,
            isbn: isbn,
            img: img,
        };
        let body = JSON.stringify(comic);

        fetch("/comics/comic", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha modificado correctamente");
            });
    });
//ELIMINAR COMIC
document
    .querySelector("#eliminarco")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let isbn = document.querySelector("input[name='isbn2']").value;
        let comic = {
            isbn: isbn,
        };
        let body = JSON.stringify(comic);

        fetch("/comics/comic", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha eliminado correctamente");
            });
    });
//INSERTAR CARTAS
document
    .querySelector("#insertarca")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombrecar']").value;
        let precio = document.querySelector("input[name='preciocar']").value;
        let ejemplares = document.querySelector(
            "input[name='ejemplarescar']"
        ).value;
        let genero = document.querySelector("input[name='generocar']").value;
        let ean = document.querySelector("input[name='eancar']").value;
        let img = document.querySelector("input[name='imgcar']").value;

        let carta = {
            nombre: nombre,
            precio: precio,
            ejemplares: ejemplares,
            genero: genero,
            ean: ean,
            img: img,
        };
        let body = JSON.stringify(carta);

        fetch("/cartas/carta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha añadido correctamente");
            });
    });
//MODIFICAR CARTAS
document
    .querySelector("#modificarca")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombrecar3']").value;
        let precio = document.querySelector("input[name='preciocar3']").value;
        let ejemplares = document.querySelector(
            "input[name='ejemplarescar']"
        ).value;
        let genero = document.querySelector("input[name='generocar3']").value;
        let ean = document.querySelector("input[name='eancar3']").value;
        let img = document.querySelector("input[name='imgcar3']").value;

        let carta = {
            nombre: nombre,
            precio: precio,
            ejemplares: ejemplares,
            genero: genero,
            ean: ean,
            img: img,
        };
        let body = JSON.stringify(carta);

        fetch("/cartas/carta", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha modificado correctamente");
            });
    });

//ELIMINAR CARTA
document
    .querySelector("#eliminarca")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let ean = document.querySelector("input[name='eancar2']").value;
        let carta = {
            ean: ean,
        };
        let body = JSON.stringify(carta);

        fetch("/cartas/carta", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha eliminado correctamente");
            });
    });
//INSERTAR MESA
document
    .querySelector("#insertarmes")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombremes']").value;
        let precio = document.querySelector("input[name='preciomes']").value;
        let ejemplares = document.querySelector(
            "input[name='ejemplarmes']"
        ).value;
        let genero = document.querySelector("input[name='generomes']").value;
        let ean = document.querySelector("input[name='eanmes']").value;
        let img = document.querySelector("input[name='imgmes']").value;

        let mesa = {
            nombre: nombre,
            precio: precio,
            ejemplares: ejemplares,
            genero: genero,
            ean: ean,
            img: img,
        };
        let body = JSON.stringify(mesa);

        fetch("/mesas/mesa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha añadido correctamente");
            });
    });

//MODIFICAR MEESA
document
    .querySelector("#modificarmes")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombremes3']").value;
        let precio = document.querySelector("input[name='preciomes3']").value;
        let ejemplares = document.querySelector(
            "input[name='ejemplarmes3']"
        ).value;
        let genero = document.querySelector("input[name='generomes3']").value;
        let ean = document.querySelector("input[name='eanmes3']").value;
        let img = document.querySelector("input[name='imgmes3']").value;

        let mesa = {
            nombre: nombre,
            precio: precio,
            ejemplares: ejemplares,
            genero: genero,
            ean: ean,
            img: img,
        };
        let body = JSON.stringify(mesa);

        fetch("/mesas/mesa", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha modificado correctamente");
            });
    });
//ELIMINAR MESA
document
    .querySelector("#eliminarmes")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let ean = document.querySelector("input[name='eanmes2']").value;
        let mesa = {
            ean: ean,
        };
        let body = JSON.stringify(mesa);

        fetch("/mesas/mesa", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha eliminado correctamente");
            });
    });

//INSERTAR SNACK
document
    .querySelector("#insertarsna")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombresna']").value;
        let categoria = document.querySelector(
            "input[name='categoriasna']"
        ).value;
        let ejemplares = document.querySelector(
            "input[name='ejemplaressna']"
        ).value;
        let img = document.querySelector("input[name='imgsna']").value;
        let precio = document.querySelector("input[name='preciosna']").value;

        let snack = {
            nombre: nombre,
            precio: precio,
            ejemplares: ejemplares,
            categoria: categoria,
            img: img,
        };
        let body = JSON.stringify(snack);

        fetch("/snacks/snack", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha añadido correctamente");
            });
    });
//MODIFICAR SNACK
document
    .querySelector("#modificarsna")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombresna3']").value;
        let categoria = document.querySelector(
            "input[name='categoriasna3']"
        ).value;
        let ejemplares = document.querySelector(
            "input[name='ejemplaressna3']"
        ).value;
        let img = document.querySelector("input[name='imgsna3']").value;
        let precio = document.querySelector("input[name='preciosna3']").value;

        let snack = {
            nombre: nombre,
            precio: precio,
            ejemplares: ejemplares,
            categoria: categoria,
            img: img,
        };
        let body = JSON.stringify(snack);

        fetch("/snacks/snack", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha modificado correctamente");
            });
    });
//ELIMINAR SNACK
document
    .querySelector("#eliminarsna")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombresna2']").value;
        let snack = {
            nombre: nombre,
        };
        let body = JSON.stringify(snack);

        fetch("/snacks/snack", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                alert("Se ha eliminado correctamente");
            });
    });
