let cart = [];
let printElement = document.querySelector("#pedido div");
//THIS WOULD BE TO CREATE A TABLE
// fetch("/sales/sale")
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (res) {
//         document.querySelector("div").innerHTML = "";
//         for (let i = 0; i < res.length; i++) {
//             document.querySelector("div").innerHTML += `
//             <p="${i}">Client:${res[i].client}</p>
//             <p="${i}">Product:${res[i].product}</p>
//             <p="${i}">Quantity:${res[i].quantity}</p>
//             <p="${i}">Price:${res[i].price}</p>`;
//         }
//     });

// THIS WOULD BE TO CHOOSE WHAT THE CLIENT IS GOING TO BUY

fetch("/snacks/snack")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector("select[name='snack']").innerHTML =
            "<option selected disabled>Snacks</option>";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(
                "select[name='snack']"
            ).innerHTML += `<option value="${res[i].price}--${res[i].name}">${res[i].name}</option>`;
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
//       <td>${res[i].name}</td>
//       <td>${res[i].price}</td>`;
//     }
// });

fetch("/clients/client")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector("select[name='client']").innerHTML =
            "<option selected disabled>DNI</option>";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(
                "select[name='client']"
            ).innerHTML += `<option>${res[i].dni}</option>`;
        }
    });

fetch("/cards/card")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector("select[name='cards']").innerHTML =
            "<option selected disabled>Cards</option>";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(
                "select[name='cards']"
            ).innerHTML += `<option value="${res[i].price}--${res[i].name}">${res[i].name}</option>`;
        }
    });

fetch("/tables/table")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector("select[name='tables']").innerHTML =
            "<option selected disabled>Board games</option>";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(
                "select[name='tables']"
            ).innerHTML += `<option value="${res[i].price}--${res[i].name}">${res[i].name}</option>`;
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
            ).innerHTML += `<option value="${res[i].price}--${res[i].name}">${res[i].name}</option>`;
        }
    });

document
    .querySelector("body .addsnack")
    .addEventListener("click", function (event) {
        event.preventDefault();
        //SNACK SELECTION
        let selectSnack = document
            .querySelector("select[name='snack']")
            .value.split("--");
        let snackPrice = selectSnack[0];
        let snackName = selectSnack[1];

        //INVOICE CREATION

        document.querySelector("#pedido div").innerHTML += `<p><p>
          INVOICE: ${document.querySelector("input[id='invoicenumber']").value}<br>
          Client DNI: ${
              document.querySelector("select[name='client']").value
          }<br>
          Order:<br>
          </p>
          Product:<br>
          SNACKS: ${snackName}<br>
           Price: ${snackPrice}€<br> 
          Quantity: ${document.querySelector("input[id='snacknumber']").value} <br>
          Total: ${
              snackPrice * document.querySelector("input[id='snacknumber']").value
          }€
        </p> `;
        let obj = {
            client: document.querySelector("select[name='client']").value,
            invoice: document.querySelector("input[id='invoicenumber']").value,
            snackName,
            snackPrice,
            snackQuantity: document.querySelector("input[id='snacknumber']").value,
            Total:
                snackPrice *
                document.querySelector("input[id='snacknumber']").value,
        };
        cart.push(obj);
        console.log(cart);
    });

///// COMICS

document
    .querySelector("body .addcomic")
    .addEventListener("click", function (event) {
        event.preventDefault();

        //COMIC SELECTION

        let selectComic = document
            .querySelector("select[name='comic']")
            .value.split("--");
        let comicPrice = selectComic[0];
        let comicName = selectComic[1];

        //INVOICE CREATION

        document.querySelector("#pedido div").innerHTML += `
        <p>
          Product:<br>  
          COMICS: ${comicName}<br>
           Price: ${comicPrice}€<br>
          Quantity: ${document.querySelector("input[id='comicnumber']").value}<br>
          Total: ${
              comicPrice * document.querySelector("input[id='comicnumber']").value
          }€
        </p> `;

        let obj = {
            client: document.querySelector("select[name='client']").value,
            invoice: document.querySelector("input[id='invoicenumber']").value,
            comicName,
            comicPrice,
            comicQuantity: document.querySelector("input[id='comicnumber']").value,
            Total:
                comicPrice *
                document.querySelector("input[id='comicnumber']").value,
        };
        cart.push(obj);
        console.log(cart);
    });

//TABLES

document
    .querySelector("body .addtable")
    .addEventListener("click", function (event) {
        event.preventDefault();

        //BOARD GAME SELECTION

        let selectTable = document
            .querySelector("select[name='tables']")
            .value.split("--");
        let tablePrice = selectTable[0];
        let tableName = selectTable[1];

        //INVOICE CREATION

        document.querySelector("#pedido div").innerHTML += `<p>
          Product:<br>  
          TABLES: ${tableName}<br>
           Price: ${tablePrice}€<br>
          Quantity: ${document.querySelector("input[id='tablesnumber']").value}<br>
          Total: ${
              tablePrice * document.querySelector("input[id='tablesnumber']").value
          }€
        </p> `;

        let obj = {
            client: document.querySelector("select[name='client']").value,
            invoice: document.querySelector("input[id='invoicenumber']").value,

            tableName,
            tablePrice,
            tableQuantity: document.querySelector("input[id='tablesnumber']").value,

            Total:
                tablePrice *
                document.querySelector("input[id='tablesnumber']").value,
        };
        cart.push(obj);
        console.log(cart);
    });

//CARDS

document
    .querySelector("body .addcard")
    .addEventListener("click", function (event) {
        event.preventDefault();

        //CARD SELECTION

        let selectCard = document
            .querySelector("select[name='cards']")
            .value.split("--");
        let cardPrice = selectCard[0];
        let cardName = selectCard[1];

        //INVOICE CREATION

        document.querySelector("#pedido div").innerHTML += `<p>
      Product:<br>  
      CARDS: ${cardName}<br> 
      Price: ${cardPrice}€<br> 
      Quantity:  ${document.querySelector("input[id='cardsnumber']").value}<br>
      Total: ${
          cardPrice * document.querySelector("input[id='cardsnumber']").value
      }€
    </p> `;

        let obj = {
            client: document.querySelector("select[name='client']").value,
            invoice: document.querySelector("input[id='invoicenumber']").value,
            cardName,
            cardPrice,
            cardQuantity: document.querySelector("input[id='cardsnumber']")
                .value,

            Total:
                cardPrice *
                document.querySelector("input[id='cardsnumber']").value,
        };
        cart.push(obj);
        console.log(cart);
    });
document
    .querySelector("body .addorder")
    .addEventListener("click", function (event) {
        event.preventDefault();

        fetch("/clients/client")
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (res) {
                document.querySelector("select[name='client2']").innerHTML =
                    "<option selected disabled>Client</option>";
                for (let i = 0; i < res.length; i++) {
                    document.querySelector(
                        "select[name='client2']"
                    ).innerHTML += `<option value="${res[i].phone}">${res[i].name}</option>`;
                }
            });
    });
