fetch("/sales/sale/arraysnack")
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
            data.addColumn("string", "Product");
            data.addColumn("number", "Quantities sold");

            for (let i = 0; i < res.length; i++) {
                let cantidad = parseInt(`${res[i].quantity}`);
                data.addRows([[`${res[i].name}`, { v: cantidad }]]);

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

fetch("/sales/sale/arraysnack")
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
            data.addColumn("string", "Product");
            data.addColumn("number", "Quantities sold");

            for (let i = 0; i < res.length; i++) {
                let cantidad = parseInt(`${res[i].quantity}`);
                data.addRows([[`${res[i].name}`, { v: cantidad }]]);

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

fetch("/sales/sale/arraycomic/")
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
            data.addColumn("string", "Product");
            data.addColumn("number", "Quantities sold");

            for (let i = 0; i < res.length; i++) {
                let cantidad = parseInt(`${res[i].quantity}`);
                data.addRows([[`${res[i].name}`, { v: cantidad }]]);

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

fetch("/sales/sale/arraytable")
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
            data.addColumn("string", "Product");
            data.addColumn("number", "Quantities sold");

            for (let i = 0; i < res.length; i++) {
                let cantidad = parseInt(`${res[i].quantity}`);
                data.addRows([[`${res[i].name}`, { v: cantidad }]]);

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

fetch("/sales/sale/arraycards")
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
            data.addColumn("string", "Product");
            data.addColumn("number", "Quantities sold");

            for (let i = 0; i < res.length; i++) {
                let cantidad = parseInt(`${res[i].quantity}`);
                data.addRows([[`${res[i].name}`, { v: cantidad }]]);

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

fetch("/sales/sale/arraysnack")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        // console.log(res);
        function drawChart() {
            let array = [["Product", "Cantidad"]];

            for (let i = 0; i < res.length; i++) {
                let subArray = [res[i].name, parseInt(res[i].quantity)];
                array.push(subArray);
            }

            var data = google.visualization.arrayToDataTable(array);

            var options = {
                title: "Snack sales",
            };

            var chart = new google.visualization.PieChart(
                document.getElementById("piechart")
            );

            chart.draw(data, {
                width: 900,
                height: 300,
                title: "SNACK SALES",
                is3D: true,
            });
        }
    });

fetch("/sales/sale/arraytable")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        // console.log(res);
        function drawChart() {
            let array = [["Product", "Cantidad"]];

            for (let i = 0; i < res.length; i++) {
                let subArray = [res[i].name, parseInt(res[i].quantity)];
                array.push(subArray);
            }

            var data = google.visualization.arrayToDataTable(array);

            var options = {
                title: "Board game sales",
            };

            var chart = new google.visualization.PieChart(
                document.getElementById("graficamesa")
            );

            chart.draw(data, {
                width: 900,
                height: 300,
                title: "BOARD GAME SALES",
                is3D: true,
            });
        }
    });

fetch("/sales/sale/arraycards")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        // console.log(res);
        function drawChart() {
            let array = [["Product", "Cantidad"]];

            for (let i = 0; i < res.length; i++) {
                let subArray = [res[i].name, parseInt(res[i].quantity)];
                array.push(subArray);
            }

            var data = google.visualization.arrayToDataTable(array);

            var options = {
                title: "Card sales",
            };

            var chart = new google.visualization.PieChart(
                document.getElementById("graficacarta")
            );

            chart.draw(data, {
                width: 900,
                height: 300,
                title: "CARD SALES",
                is3D: true,
            });
        }
    });

fetch("/sales/sale/arraycomic/")
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (res) {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        // console.log(res);
        function drawChart() {
            let array = [["Product", "Cantidad"]];

            for (let i = 0; i < res.length; i++) {
                let subArray = [res[i].name, parseInt(res[i].quantity)];
                array.push(subArray);
            }

            var data = google.visualization.arrayToDataTable(array);

            var options = {
                title: "Comic sales",
            };

            var chart = new google.visualization.PieChart(
                document.getElementById("graficacomic")
            );

            chart.draw(data, {
                width: 900,
                height: 300,
                title: "COMIC SALES",
                is3D: true,
            });
        }
    });
