//ADD COMIC
document
    .querySelector("#insertarco")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[name='nombre']").value;
        let author = document.querySelector("input[name='escritor']").value;
        let publisher = document.querySelector("input[name='editorial']").value;
        let price = document.querySelector("input[name='precio']").value;
        let pages = document.querySelector("input[name='paginas']").value;
        let copies = document.querySelector(
            "input[name='copies']"
        ).value;
        let genre = document.querySelector("input[name='genero']").value;
        let isbn = document.querySelector("input[name='isbn']").value;
        let img = document.querySelector("input[name='img']").value;

        let comic = {
            name: name,
            author: author,
            publisher: publisher,
            price: price,
            pages: pages,
            copies: copies,
            genre: genre,
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
                alert("Added successfully");
            });
    });
//MODIFY COMIC
document
    .querySelector("#modificarco")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[name='nombre3']").value;
        let author = document.querySelector("input[name='escritor3']").value;
        let publisher = document.querySelector(
            "input[name='editorial3']"
        ).value;
        let price = document.querySelector("input[name='precio3']").value;
        let pages = document.querySelector("input[name='paginas3']").value;
        let copies = document.querySelector(
            "input[name='copies3']"
        ).value;
        let genre = document.querySelector("input[name='genero3']").value;
        let isbn = document.querySelector("input[name='isbn3']").value;
        let img = document.querySelector("input[name='img3']").value;

        let comic = {
            name: name,
            author: author,
            publisher: publisher,
            price: price,
            pages: pages,
            copies: copies,
            genre: genre,
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
                alert("Modified successfully");
            });
    });
//DELETE COMIC
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
                alert("Deleted successfully");
            });
    });
//INSERT CARDS
document
    .querySelector("#insertarca")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[name='nombrecar']").value;
        let price = document.querySelector("input[name='preciocar']").value;
        let copies = document.querySelector(
            "input[name='copiescar']"
        ).value;
        let genre = document.querySelector("input[name='generocar']").value;
        let ean = document.querySelector("input[name='eancar']").value;
        let img = document.querySelector("input[name='imgcar']").value;

        let card = {
            name: name,
            price: price,
            copies: copies,
            genre: genre,
            ean: ean,
            img: img,
        };
        let body = JSON.stringify(card);

        fetch("/cards/card", {
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
                alert("Added successfully");
            });
    });
//MODIFY CARDS
document
    .querySelector("#modificarca")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[name='nombrecar3']").value;
        let price = document.querySelector("input[name='preciocar3']").value;
        let copies = document.querySelector(
            "input[name='copiescar']"
        ).value;
        let genre = document.querySelector("input[name='generocar3']").value;
        let ean = document.querySelector("input[name='eancar3']").value;
        let img = document.querySelector("input[name='imgcar3']").value;

        let card = {
            name: name,
            price: price,
            copies: copies,
            genre: genre,
            ean: ean,
            img: img,
        };
        let body = JSON.stringify(card);

        fetch("/cards/card", {
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
                alert("Modified successfully");
            });
    });

//DELETE CARD
document
    .querySelector("#eliminarca")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let ean = document.querySelector("input[name='eancar2']").value;
        let card = {
            ean: ean,
        };
        let body = JSON.stringify(card);

        fetch("/cards/card", {
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
                alert("Deleted successfully");
            });
    });
//INSERT TABLE
document
    .querySelector("#insertarmes")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[name='nombremes']").value;
        let price = document.querySelector("input[name='preciomes']").value;
        let copies = document.querySelector(
            "input[name='ejemplarmes']"
        ).value;
        let genre = document.querySelector("input[name='generomes']").value;
        let ean = document.querySelector("input[name='eanmes']").value;
        let img = document.querySelector("input[name='imgmes']").value;

        let table = {
            name: name,
            price: price,
            copies: copies,
            genre: genre,
            ean: ean,
            img: img,
        };
        let body = JSON.stringify(table);

        fetch("/tables/table", {
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
                alert("Added successfully");
            });
    });

//MODIFY TABLE
document
    .querySelector("#modificarmes")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[name='nombremes3']").value;
        let price = document.querySelector("input[name='preciomes3']").value;
        let copies = document.querySelector(
            "input[name='ejemplarmes3']"
        ).value;
        let genre = document.querySelector("input[name='generomes3']").value;
        let ean = document.querySelector("input[name='eanmes3']").value;
        let img = document.querySelector("input[name='imgmes3']").value;

        let table = {
            name: name,
            price: price,
            copies: copies,
            genre: genre,
            ean: ean,
            img: img,
        };
        let body = JSON.stringify(table);

        fetch("/tables/table", {
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
                alert("Modified successfully");
            });
    });
//DELETE TABLE
document
    .querySelector("#eliminarmes")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let ean = document.querySelector("input[name='eanmes2']").value;
        let table = {
            ean: ean,
        };
        let body = JSON.stringify(table);

        fetch("/tables/table", {
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
                alert("Deleted successfully");
            });
    });

//INSERT SNACK
document
    .querySelector("#insertarsna")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[name='nombresna']").value;
        let category = document.querySelector(
            "input[name='categoriasna']"
        ).value;
        let copies = document.querySelector(
            "input[name='copiessna']"
        ).value;
        let img = document.querySelector("input[name='imgsna']").value;
        let price = document.querySelector("input[name='preciosna']").value;

        let snack = {
            name: name,
            price: price,
            copies: copies,
            category: category,
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
                alert("Added successfully");
            });
    });
//MODIFY SNACK
document
    .querySelector("#modificarsna")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[name='nombresna3']").value;
        let category = document.querySelector(
            "input[name='categoriasna3']"
        ).value;
        let copies = document.querySelector(
            "input[name='copiessna3']"
        ).value;
        let img = document.querySelector("input[name='imgsna3']").value;
        let price = document.querySelector("input[name='preciosna3']").value;

        let snack = {
            name: name,
            price: price,
            copies: copies,
            category: category,
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
                alert("Modified successfully");
            });
    });
//DELETE SNACK
document
    .querySelector("#eliminarsna")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[name='nombresna2']").value;
        let snack = {
            name: name,
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
                alert("Deleted successfully");
            });
    });
