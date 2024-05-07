
function addItemTabela() {
    const seletorEquip = document.getElementById("equipamento");
    let equipamento = seletorEquip.value;
    const corpoTabela = document.getElementById("corpaoTabela");

    if (equipamento === "faca") {
        let criaTr = document.createElement("tr");

        let criaTd = document.createElement("td");
        let criaTd2 = document.createElement("td");
        let criaTd3 = document.createElement("td");
        let criaCk = document.createElement("input")

        let texto1 = document.createTextNode("Faca");
        let texto2 = document.createTextNode("I");
        let texto3 = document.createTextNode("1");

        criaTd.appendChild(texto1);
        criaTr.appendChild(criaTd);

        criaTd2.appendChild(texto2);
        criaTr.appendChild(criaTd2);

        criaTd3.appendChild(texto3);
        criaTr.appendChild(criaTd3);

        criaCk.setAttribute('type', 'checkbox')
        criaCk.id('rabisca')
        criaTr.appendChild(criaCk)

        let rabisca = document.getElementById('rabisca')
        rabisca.checked

        corpoTabela.appendChild(criaTr);
    } else if (equipamento === "martelo") {
        let criaTr = document.createElement("tr");

        let criaTd = document.createElement("td");
        let criaTd2 = document.createElement("td");
        let criaTd3 = document.createElement("td");

        let texto1 = document.createTextNode("Martelo");
        let texto2 = document.createTextNode("I");
        let texto3 = document.createTextNode("1");

        criaTd.appendChild(texto1);
        criaTr.appendChild(criaTd);

        criaTd2.appendChild(texto2);
        criaTr.appendChild(criaTd2);

        criaTd3.appendChild(texto3);
        criaTr.appendChild(criaTd3);

        corpoTabela.appendChild(criaTr);
    } else if (equipamento === "3") {
        const corpoTabela = document.getElementById("corpaoTabela");
        let criaTr = document.createElement("tr");

        let criaTd = document.createElement("td");
        let criaTd2 = document.createElement("td");
        let criaTd3 = document.createElement("td");

        let texto1 = document.createTextNode("Punhal");
        let texto2 = document.createTextNode("I");
        let texto3 = document.createTextNode("1");

        criaTd.appendChild(texto1);
        criaTr.appendChild(criaTd);

        criaTd2.appendChild(texto2);
        criaTr.appendChild(criaTd2);

        criaTd3.appendChild(texto3);
        criaTr.appendChild(criaTd3);

        corpoTabela.appendChild(criaTr);
    } else if (equipamento === "4") {
        const corpoTabela = document.getElementById("corpaoTabela");
        let criaTr = document.createElement("tr");

        let criaTd = document.createElement("td");
        let criaTd2 = document.createElement("td");
        let criaTd3 = document.createElement("td");

        let texto1 = document.createTextNode("Bastão");
        let texto2 = document.createTextNode("I");
        let texto3 = document.createTextNode("1");

        criaTd.appendChild(texto1);
        criaTr.appendChild(criaTd);

        criaTd2.appendChild(texto2);
        criaTr.appendChild(criaTd2);

        criaTd3.appendChild(texto3);
        criaTr.appendChild(criaTd3);

        corpoTabela.appendChild(criaTr);
    }
    }