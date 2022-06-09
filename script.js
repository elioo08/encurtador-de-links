function myFunction() {
    var valor = document.getElementById("flink").value;
    $.getJSON("https://is.gd/create.php?callback=?", {
        url: valor,
        format: "json"
    }).done(function(data) {
        let novolink = data.shorturl;
        console.log(novolink);
        if (novolink !== undefined)
            document.getElementById("h2resp").innerHTML = novolink;
        else document.getElementById("h2resp").innerHTML = "Erro ao gerar link";
    });
}
