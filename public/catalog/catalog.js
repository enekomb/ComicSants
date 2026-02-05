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
            <p="${i}">Name: ${res[i].name}</p>
            <p="${i}">Author: ${res[i].author}</p>
            <p="${i}">Publisher: ${res[i].publisher}</p>
            <p="${i}">Price: ${res[i].price}€</p>
            <p="${i}">Pages: ${res[i].pages}</p>
           
            <p="${i}">Genre: ${res[i].genre}</p>
            <p="${i}">ISBN: ${res[i].isbn}</p>`;
        }
    });


fetch("/cards/card")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector(".cards-container").innerHTML = "";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(".cards-container").innerHTML += `
            <div class="card">
            <div class="cardimg">
            <img="${i}"><img src="${res[i].img}"></img>
           <p class="cardtext">
            <p="${i}">Name: ${res[i].name}</p>
            <p="${i}">EAN: ${res[i].ean}</p>
            <p="${i}">Price: ${res[i].price}€</p>
            <p="${i}">Genre: ${res[i].genre}</p>
           `;
        }
    });

fetch("/tables/table")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        document.querySelector(".tables-container").innerHTML = "";
        for (let i = 0; i < res.length; i++) {
            document.querySelector(".tables-container").innerHTML += `
            <div class="card">
            <div class="cardimg">
            <img="${i}"><img src="${res[i].img}"></img>
           <p class="cardtext">
            <p="${i}">Name: ${res[i].name}</p>
            <p="${i}">EAN: ${res[i].ean}</p>
            <p="${i}">Price: ${res[i].price}€</p>
            <p="${i}">Genre: ${res[i].genre}</p>
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
        <p="${i}">Name: ${res[i].name}</p>
        <p="${i}">Category: ${res[i].category}</p>
        <p="${i}">Price: ${res[i].price}€</p>
        <p="${i}">Brand: ${res[i].brand}</p>
       `;
        }
    });
