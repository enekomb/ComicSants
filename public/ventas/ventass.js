let carrito = [];
let imprimir = document.querySelector("#pedido div");
//ESTO SERÍA PARA HACER UNA TABLA
// fetch("/ventas/venta")
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (res) {
//         document.querySelector("div").innerHTML = "";
//         for (let i = 0; i < res.length; i++) {
//             document.querySelector("div").innerHTML += `
//             <p="${i}">Cliente:${res[i].cliente}</p>
//             <p="${i}">Producto:${res[i].producto}</p>
//             <p="${i}">Cantidad:${res[i].cantidad}</p>
//             <p="${i}">Precio:${res[i].precio}</p>`;
//         }
//     });

// ESTO SERÍA PARA ELEGIR LO QUE VA A COMPRAR EL CLIENTE

fetch("/snacks/snack")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector("select[name='snac']").innerHTML =
            "<option selected disabled>Snacks</option>";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(
                "select[name='snac']"
            ).innerHTML += `<option value="${res[i].precio}--${res[i].nombre}">${res[i].nombre}</option>`;
        }
    });
// .then(function (res) {
//     document.querySelector(".tablaprecios").innerHTML = "";
//     for (let i = 0; i < res.length; i++) {
//         document.querySelector(".tablaprecios").innerHTML += `  <tr>

//         <th>Producto</th>
//         <th>Precio</th>

//       </tr>

//       <tr>
//       <td>${res[i].nombre}</td>
//       <td>${res[i].precio}</td>`;
//     }
// });

fetch("/clientes/cliente")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector("select[name='cliente']").innerHTML =
            "<option selected disabled>DNI</option>";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(
                "select[name='cliente']"
            ).innerHTML += `<option>${res[i].dni}</option>`;
        }
    });

fetch("/cartas/carta")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector("select[name='cartas']").innerHTML =
            "<option selected disabled>Cartas</option>";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(
                "select[name='cartas']"
            ).innerHTML += `<option value="${res[i].precio}--${res[i].nombre}">${res[i].nombre}</option>`;
        }
    });

fetch("/mesas/mesa")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector("select[name='mesas']").innerHTML =
            "<option selected disabled>Juegos de mesa</option>";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(
                "select[name='mesas']"
            ).innerHTML += `<option value="${res[i].precio}--${res[i].nombre}">${res[i].nombre}</option>`;
        }
    });

fetch("/comics/comic")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector("select[name='comic']").innerHTML =
            "<option selected disabled>Comics</option>";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(
                "select[name='comic']"
            ).innerHTML += `<option value="${res[i].precio}--${res[i].nombre}">${res[i].nombre}</option>`;
        }
    });

document
    .querySelector("body .añadirsnac")
    .addEventListener("click", function (event) {
        event.preventDefault();
        //SELECCION DE SNACK
        let selectSnac = document
            .querySelector("select[name='snac']")
            .value.split("--");
        let precioSnac = selectSnac[0];
        let nombreSnac = selectSnac[1];

        //CREACION DE LA FACTURA

        document.querySelector("#pedido div").innerHTML += `<p><p>
          FACTURA: ${document.querySelector("input[id='numfac']").value}<br>
          DNI del cliente: ${
              document.querySelector("select[name='cliente']").value
          }<br>
          Pedido:<br>
          </p>
          Producto:<br>
          SNACKS: ${nombreSnac}<br>
           Precio: ${precioSnac}€<br> 
          Cantidad: ${document.querySelector("input[id='numsnac']").value} <br>
          Total: ${
              precioSnac * document.querySelector("input[id='numsnac']").value
          }€
        </p> `;
        let obj = {
            cliente: document.querySelector("select[name='cliente']").value,
            factura: document.querySelector("input[id='numfac']").value,
            nombreSnac,
            precioSnac,
            cantidadSnac: document.querySelector("input[id='numsnac']").value,
            Total:
                precioSnac *
                document.querySelector("input[id='numsnac']").value,
        };
        carrito.push(obj);
        console.log(carrito);
    });

///// COMICS

document
    .querySelector("body .añadircomic")
    .addEventListener("click", function (event) {
        event.preventDefault();

        //SELECCION COMIC

        let selectComic = document
            .querySelector("select[name='comic']")
            .value.split("--");
        let precioComic = selectComic[0];
        let nombreComic = selectComic[1];

        //CREACION DE LA FACTURA

        document.querySelector("#pedido div").innerHTML += `
        <p>
          Producto:<br>  
          COMICS: ${nombreComic}<br>
           Precio: ${precioComic}€<br>
          Cantidad: ${document.querySelector("input[id='numcomic']").value}<br>
          Total: ${
              precioComic * document.querySelector("input[id='numcomic']").value
          }€
        </p> `;

        let obj = {
            cliente: document.querySelector("select[name='cliente']").value,
            factura: document.querySelector("input[id='numfac']").value,
            nombreComic,
            precioComic,
            cantidadComic: document.querySelector("input[id='numcomic']").value,
            Total:
                precioComic *
                document.querySelector("input[id='numcomic']").value,
        };
        carrito.push(obj);
        console.log(carrito);
    });

//MESAS

document
    .querySelector("body .añadirmesa")
    .addEventListener("click", function (event) {
        event.preventDefault();

        //SELECCION DE JUEGOS DE MESA

        let selectMesa = document
            .querySelector("select[name='mesas']")
            .value.split("--");
        let precioMesa = selectMesa[0];
        let nombreMesa = selectMesa[1];

        //CREACION DE LA FACTURA

        document.querySelector("#pedido div").innerHTML += `<p>
          Producto:<br>  
          MESAS: ${nombreMesa}<br>
           Precio: ${precioMesa}€<br>
          Cantidad: ${document.querySelector("input[id='nummesas']").value}<br>
          Total: ${
              precioMesa * document.querySelector("input[id='nummesas']").value
          }€
        </p> `;

        let obj = {
            cliente: document.querySelector("select[name='cliente']").value,
            factura: document.querySelector("input[id='numfac']").value,

            nombreMesa,
            precioMesa,
            cantidadMesas: document.querySelector("input[id='nummesas']").value,

            Total:
                precioMesa *
                document.querySelector("input[id='nummesas']").value,
        };
        carrito.push(obj);
        console.log(carrito);
    });

//CARTAS

document
    .querySelector("body .añadircarta")
    .addEventListener("click", function (event) {
        event.preventDefault();

        //SELECCION DE CARTAS

        let selectCarta = document
            .querySelector("select[name='cartas']")
            .value.split("--");
        let precioCarta = selectCarta[0];
        let nombreCarta = selectCarta[1];

        //CREACION DE LA FACTURA

        document.querySelector("#pedido div").innerHTML += `<p>
      Producto:<br>  
      CARTAS: ${nombreCarta}<br> 
      Precio: ${precioCarta}€<br> 
      Cantidad:  ${document.querySelector("input[id='numcartas']").value}<br>
      Total: ${
          precioCarta * document.querySelector("input[id='numcartas']").value
      }€
    </p> `;

        let obj = {
            cliente: document.querySelector("select[name='cliente']").value,
            factura: document.querySelector("input[id='numfac']").value,
            nombreCarta,
            precioCarta,
            cantidadCartas: document.querySelector("input[id='numcartas']")
                .value,

            Total:
                precioCarta *
                document.querySelector("input[id='numcartas']").value,
        };
        carrito.push(obj);
        console.log(carrito);
    });
document
    .querySelector("body .anadirpedido")
    .addEventListener("click", function (event) {
        event.preventDefault();

        let body = JSON.stringify(carrito);

        fetch("/ventas/venta", {
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
                alert("Tu pedido se ha añadido correctamente");
            })
            .then(function imprimirElemento(elemento) {
                var ventana = window.open("", "PRINT", "height=400,width=600");
                let imprimir = document.querySelector("#pedido");
                ventana.document.write(
                    "<html><head><title>" + document.title + "</title>"
                );
                ventana.document.write(
                    '<link rel="stylesheet" href="imprimir.css">'
                ); //Cargamos otra hoja, no la normal
                ventana.document.write(body);
                ventana.document.write(imprimir);

                ventana.document.close();
                ventana.focus();
                ventana.onload = function () {
                    ventana.print();
                    ventana.close();
                };
                return true;
            });
    });
document
    .querySelector("body .anadirpedido")
    .addEventListener("click", function (event) {
        event.preventDefault();

        fetch("/clientes/cliente")
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (res) {
                document.querySelector("select[name='cliente2']").innerHTML =
                    "<option selected disabled>Comics</option>";
                for (let i = 0; i < res.length; i++) {
                    document.querySelector(
                        "select[name='cliente2']"
                    ).innerHTML += `<option value="${res[i].telefono}">${res[i].nombre}</option>`;
                }
            });
    });
