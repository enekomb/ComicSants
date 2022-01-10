fetch("/comics/comic")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector(".comic-container").innerHTML = "";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(".comic-container").innerHTML += `
            <div class="card">
            <div class="cardimg">
            <img="${i}"><img src="${res[i].img}"></img>
           <p class="cardtext">
            <p="${i}">Nombre: ${res[i].nombre}</p>
            <p="${i}">Autor: ${res[i].escritor}</p>
            <p="${i}">Editorial: ${res[i].editorial}</p>
            <p="${i}">Precio: ${res[i].precio}€</p>
            <p="${i}">Páginas: ${res[i].paginas}</p>
           
            <p="${i}">Género: ${res[i].genero}</p>
            <p="${i}">ISBN: ${res[i].isbn}</p>`;
        }
    });


fetch("/cartas/carta")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector(".cartas-container").innerHTML = "";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(".cartas-container").innerHTML += `
            <div class="card">
            <div class="cardimg">
            <img="${i}"><img src="${res[i].img}"></img>
           <p class="cardtext">
            <p="${i}">Nombre: ${res[i].nombre}</p>
            <p="${i}">EAN: ${res[i].ean}</p>
            <p="${i}">Precio: ${res[i].precio}€</p>
            <p="${i}">Genero: ${res[i].genero}</p>
           `;
        }
    });

fetch("/mesas/mesa")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector(".mesas-container").innerHTML = "";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(".mesas-container").innerHTML += `
            <div class="card">
            <div class="cardimg">
            <img="${i}"><img src="${res[i].img}"></img>
           <p class="cardtext">
            <p="${i}">Nombre: ${res[i].nombre}</p>
            <p="${i}">EAN: ${res[i].ean}</p>
            <p="${i}">Precio: ${res[i].precio}€</p>
            <p="${i}">Genero: ${res[i].genero}</p>
           `;
        }
    });



fetch("/mesas/mesa")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector(".mesas-container").innerHTML = "";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(".mesas-container").innerHTML += `
            <div class="card">
            <div class="cardimg">
            <img="${i}"><img src="${res[i].img}"></img>
           <p class="cardtext">
            <p="${i}">Nombre: ${res[i].nombre}</p>
            <p="${i}">EAN: ${res[i].ean}</p>
            <p="${i}">Precio: ${res[i].precio}€</p>
            <p="${i}">Genero: ${res[i].genero}</p>
           `;
        }
    });


///////

fetch("/snacks/snack")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector(".snacks-container").innerHTML = "";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(".snacks-container").innerHTML += `
        <div class="card">
        <div class="cardimg">
        <img="${i}"><img src="${res[i].img}"></img>
       <p class="cardtext">
        <p="${i}">Nombre: ${res[i].nombre}</p>
        <p="${i}">Categoria: ${res[i].categoria}</p>
        <p="${i}">Precio: ${res[i].precio}€</p>
        <p="${i}">Marca: ${res[i].marca}</p>
       `;
        }
    });
