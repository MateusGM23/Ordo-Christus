function calcularHabilidade(atributoId, habilidadeId, resultadoId) {
    var atributoInput = document.getElementById(atributoId);
    var atributo = parseInt(atributoInput.value);
    var habilidadeInput = document.getElementById(habilidadeId);
    var habilidade = parseInt(habilidadeInput.value);
    var resultadoElement = document.getElementById(resultadoId);

    var valores = [];

    for (let i = 0; i < atributo; i++) {
        var dado = Math.floor(Math.random() * 20) + 1;
        var resultado = dado + habilidade;
        valores.push(resultado);
    }

    resultadoElement.textContent = `${valores.join(', ')}`;
}

function borda(habilidadeId, habilidadeCard){
    var habilidade = document.getElementById(habilidadeId);
    var habilidadeNumero = parseInt(habilidade.value);
    
    if (parseInt(habilidadeNumero) >= 1) {
        var card = document.getElementById(habilidadeCard);
        card.classList.remove("border-light");
        card.classList.add("border-success-2");
        card.classList.remove("bg-dark");
        card.classList.add("text-bg-success-2")
    } else if (parseInt(habilidadeNumero) == 0){

    } else {
        var card = document.getElementById(habilidadeCard);
        card.classList.remove("border-light");
        card.classList.add("border-danger");
        card.classList.remove("bg-dark");
        card.classList.add("text-bg-danger")
    }
}

function colorirBorda(){
    borda("acrobacia", "cardAcrobacia")
    borda("adestramento", "cardAdestramento")
    borda("artes", "cardArtes")
    borda("atletismo", "cardAtletismo")
    borda("atualidades", "cardAtualidades")
    borda("ciencias", "cardCiencias")
    borda("crime", "cardCrime")
    borda("diplomacia", "cardDiplomacia")
    borda("enganacao", "cardEnganacao")
    borda("fortitude", "cardFortitude")
    borda("furtividade", "cardFurtividade")
    borda("iniciativa", "cardIniciativa")
    borda("intimidacao", "cardIntimidacao")
    borda("intuicao", "cardIntuicao")
    borda("investigacao", "cardInvestigacao")
    borda("luta", "cardLuta")
    borda("medicina", "cardMedicina")
    borda("ocultismo", "cardOcultismo")
    borda("percepcao", "cardPercepcao")
    borda("pilotagem", "cardPilotagem")
    borda("pontaria", "cardPontaria")
    borda("profissao", "cardProfissao")
    borda("reflexo", "cardReflexo")
    borda("religiao", "cardReligiao")
    borda("sobrevivencia", "cardSobrevivencia")
    borda("tatica", "cardTatica")
    borda("tecnologia", "cardTecnologia")
    borda("vontade", "cardVontade")
}