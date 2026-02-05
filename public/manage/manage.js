//ADD COMIC
document
    .querySelector("#insertarco")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[name='name']").value;
        let author = document.querySelector("input[name='author']").value;
        let publisher = document.querySelector("input[name='publisher']").value;
        let price = document.querySelector("input[name='price']").value;
        let pages = document.querySelector("input[name='pages']").value;
        let copies = document.querySelector(
            "input[name='copies']"
        ).value;
        let genre = document.querySelector("input[name='genre']").value;
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
        let name = document.querySelector("input[name='name3']").value;
        let author = document.querySelector("input[name='author3']").value;
        let publisher = document.querySelector(
            "input[name='publisher3']"
        ).value;
        let price = document.querySelector("input[name='price3']").value;
        let pages = document.querySelector("input[name='pages3']").value;
        let copies = document.querySelector(
            "input[name='copies3']"
        ).value;
        let genre = document.querySelector("input[name='genre3']").value;
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
        let name = document.querySelector("input[name='namecar']").value;
        let price = document.querySelector("input[name='pricecar']").value;
        let copies = document.querySelector(
            "input[name='copiescar']"
        ).value;
        let genre = document.querySelector("input[name='genrecar']").value;
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
        let name = document.querySelector("input[name='namecar3']").value;
        let price = document.querySelector("input[name='pricecar3']").value;
        let copies = document.querySelector(
            "input[name='copiescar3']"
        ).value;
        let genre = document.querySelector("input[name='genrecar3']").value;
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
        let name = document.querySelector("input[name='namemes']").value;
        let price = document.querySelector("input[name='pricemes']").value;
        let copies = document.querySelector(
            "input[name='copiesmes']"
        ).value;
        let genre = document.querySelector("input[name='genremes']").value;
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
        let name = document.querySelector("input[name='namemes3']").value;
        let price = document.querySelector("input[name='pricemes3']").value;
        let copies = document.querySelector(
            "input[name='copiesmes3']"
        ).value;
        let genre = document.querySelector("input[name='genremes3']").value;
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
        let name = document.querySelector("input[name='namesna']").value;
        let category = document.querySelector(
            "input[name='categorysna']"
        ).value;
        let copies = document.querySelector(
            "input[name='copiessna']"
        ).value;
        let img = document.querySelector("input[name='imgsna']").value;
        let price = document.querySelector("input[name='pricesna']").value;

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
        let name = document.querySelector("input[name='namesna3']").value;
        let category = document.querySelector(
            "input[name='categorysna3']"
        ).value;
        let copies = document.querySelector(
            "input[name='copiessna3']"
        ).value;
        let img = document.querySelector("input[name='imgsna3']").value;
        let price = document.querySelector("input[name='pricesna3']").value;

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
        let name = document.querySelector("input[name='namesna2']").value;
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
