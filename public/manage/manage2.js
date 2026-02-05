//SELECT DNI

fetch("/clients/client")
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

//ADD CLIENT
document
    .querySelector("#post")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[name='name']").value;
        let surname = document.querySelector("input[name='surname']").value;
        let dni = document.querySelector("input[name='dni']").value;
        let postalCode = document.querySelector("input[name='postalcode']").value;
        let address = document.querySelector("input[name='address']").value;
        let email = document.querySelector("input[name='email']" ).value;
        let phone = document.querySelector("input[name='phone']").value;

        let client = {
            name: name,
            surname: surname,
            dni: dni,
            postalCode: postalCode,
            address: address,
            email: email,
            phone: phone,
        };
        let body = JSON.stringify(client);

        fetch("/clients/client", {
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
//MODIFY CLIENT
    document
    .querySelector("#put")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let dni = document.querySelector("select[name='mdni']").value;
        let name = document.querySelector("input[name='name']").value;
        let surname = document.querySelector("input[name='surname']").value;
        let postalCode = document.querySelector("input[name='postalcode']").value;
        let address = document.querySelector("input[name='address']").value;
        let email = document.querySelector("input[name='email']").value;
        let phone = document.querySelector("input[name='phone']").value;
      

        let client = {
            dni : dni,
            name: name,
            surname: surname,
            postalCode: postalCode,
            address: address,
            email: email,
            phone: phone,
        };
        let body = JSON.stringify(client);

        fetch("/clients/client", {
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
//DELETE CLIENT
document
    .querySelector("#delete")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let dni = document.querySelector("select[name='ddni']").value;
        let client = {
            dni: dni,
        };
        let body = JSON.stringify(client);

        fetch("/clients/client", {
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