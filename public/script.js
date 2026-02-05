document
    .querySelector("body .buttons")
    .addEventListener("click", function (event) {
        event.preventDefault();

        let user = {
            user: document.querySelector("input[name='user']").value,
            password: document.querySelector("input[name='password']").value
        };

        fetch("/admins/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                console.log ("Login: ", res);
                if(res.message === "Logged in successfully"){
                     window.location.href = "http://localhost:3000/home/home.html";
                } else {
                    alert(res.message)
                }
                // 
                // //HERE IT SHOULD SEND YOU TO HOME;
            });
    });
