document
    .querySelector("body .buttons")
    .addEventListener("click", function (event) {
        event.preventDefault();

        let usuario = {
            usuario: document.querySelector("input[name='usuario']").value,
            contraseña: document.querySelector("input[name='contraseña']").value
        };

        fetch("/admins/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                console.log ("Login: ", res);
                if(res.mensaje === "Logueado correctamente"){
                     window.location.href = "http://localhost:3000/home/home.html";
                } else {
                    alert(res.mensaje)
                }
                // 
                // //AQUI TE TIENE QUE MANDAR A LA HOME;
            });
    });
