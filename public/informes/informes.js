fetch("/ventas/venta/arraysnac/")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["table"] });
        google.charts.setOnLoadCallback(drawTable);
        // console.log(res);
        function drawTable() {
            var data = new google.visualization.DataTable();
            data.addColumn("string", "Producto");
            data.addColumn("number", "Cantidades vendidas");

            for (let i = 0; i < res.length; i++) {
                let cantidad = parseInt(`${res[i].cantidad}`);
                data.addRows([[`${res[i].nombre}`, { v: cantidad }]]);

                var table = new google.visualization.Table(
                    document.getElementById("table_div2")
                );

                table.draw(data, {
                    showRowNumber: false,
                    width: "60%",
                    height: "100%",
                });
            }
        }
    });

fetch("/ventas/venta/arraysnac/")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["table"] });
        google.charts.setOnLoadCallback(drawTable);
        // console.log(res);
        function drawTable() {
            var data = new google.visualization.DataTable();
            data.addColumn("string", "Producto");
            data.addColumn("number", "Cantidades vendidas");

            for (let i = 0; i < res.length; i++) {
                let cantidad = parseInt(`${res[i].cantidad}`);
                data.addRows([[`${res[i].nombre}`, { v: cantidad }]]);

                var table = new google.visualization.Table(
                    document.getElementById("table_div2")
                );

                table.draw(data, {
                    showRowNumber: false,
                    width: "60%",
                    height: "100%",
                });
            }
        }
    });

fetch("/ventas/venta/arraycomic/")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["table"] });
        google.charts.setOnLoadCallback(drawTable);
        // console.log(res);
        function drawTable() {
            var data = new google.visualization.DataTable();
            data.addColumn("string", "Producto");
            data.addColumn("number", "Cantidades vendidas");

            for (let i = 0; i < res.length; i++) {
                let cantidad = parseInt(`${res[i].cantidad}`);
                data.addRows([[`${res[i].nombre}`, { v: cantidad }]]);

                var table = new google.visualization.Table(
                    document.getElementById("table_div3")
                );

                table.draw(data, {
                    showRowNumber: false,
                    width: "60%",
                    height: "100%",
                });
            }
        }
    });

fetch("/ventas/venta/arraymesa/")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["table"] });
        google.charts.setOnLoadCallback(drawTable);
        // console.log(res);
        function drawTable() {
            var data = new google.visualization.DataTable();
            data.addColumn("string", "Producto");
            data.addColumn("number", "Cantidades vendidas");

            for (let i = 0; i < res.length; i++) {
                let cantidad = parseInt(`${res[i].cantidad}`);
                data.addRows([[`${res[i].nombre}`, { v: cantidad }]]);

                var table = new google.visualization.Table(
                    document.getElementById("table_div4")
                );

                table.draw(data, {
                    showRowNumber: false,
                    width: "60%",
                    height: "100%",
                });
            }
        }
    });

fetch("/ventas/venta/arraycartas/")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["table"] });
        google.charts.setOnLoadCallback(drawTable);
        // console.log(res);
        function drawTable() {
            var data = new google.visualization.DataTable();
            data.addColumn("string", "Producto");
            data.addColumn("number", "Cantidades vendidas");

            for (let i = 0; i < res.length; i++) {
                let cantidad = parseInt(`${res[i].cantidad}`);
                data.addRows([[`${res[i].nombre}`, { v: cantidad }]]);

                var table = new google.visualization.Table(
                    document.getElementById("table_div5")
                );

                table.draw(data, {
                    showRowNumber: false,
                    width: "60%",
                    height: "100%",
                });
            }
        }
    });

fetch("/ventas/venta/arraysnac/")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        // console.log(res);
        function drawChart() {
            let array = [["Producto", "Cantidad"]];

            for (let i = 0; i < res.length; i++) {
                let subArray = [res[i].nombre, parseInt(res[i].cantidad)];
                array.push(subArray);
            }

            var data = google.visualization.arrayToDataTable(array);

            var options = {
                title: "Ventas de snacks",
            };

            var chart = new google.visualization.PieChart(
                document.getElementById("piechart")
            );

            chart.draw(data, {
                width: 900,
                height: 300,
                title: "VENTAS DE SNACKS",
                is3D: true,
            });
        }
    });

fetch("/ventas/venta/arraymesa/")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        // console.log(res);
        function drawChart() {
            let array = [["Producto", "Cantidad"]];

            for (let i = 0; i < res.length; i++) {
                let subArray = [res[i].nombre, parseInt(res[i].cantidad)];
                array.push(subArray);
            }

            var data = google.visualization.arrayToDataTable(array);

            var options = {
                title: "Ventas de snacks",
            };

            var chart = new google.visualization.PieChart(
                document.getElementById("graficamesa")
            );

            chart.draw(data, {
                width: 900,
                height: 300,
                title: "VENTAS DE JUEGOS DE MESA",
                is3D: true,
            });
        }
    });

fetch("/ventas/venta/arraycartas/")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        // console.log(res);
        function drawChart() {
            let array = [["Producto", "Cantidad"]];

            for (let i = 0; i < res.length; i++) {
                let subArray = [res[i].nombre, parseInt(res[i].cantidad)];
                array.push(subArray);
            }

            var data = google.visualization.arrayToDataTable(array);

            var options = {
                title: "Ventas de snacks",
            };

            var chart = new google.visualization.PieChart(
                document.getElementById("graficacarta")
            );

            chart.draw(data, {
                width: 900,
                height: 300,
                title: "VENTAS DE CARTAS",
                is3D: true,
            });
        }
    });

fetch("/ventas/venta/arraycomic/")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        // console.log(res);
        function drawChart() {
            let array = [["Producto", "Cantidad"]];

            for (let i = 0; i < res.length; i++) {
                let subArray = [res[i].nombre, parseInt(res[i].cantidad)];
                array.push(subArray);
            }

            var data = google.visualization.arrayToDataTable(array);

            var options = {
                title: "Ventas de comics",
            };

            var chart = new google.visualization.PieChart(
                document.getElementById("graficacomic")
            );

            chart.draw(data, {
                width: 900,
                height: 300,
                title: "VENTAS DE COMICS",
                is3D: true,
            });
        }
    });
