function salvar(){
    localStorage.nome = document.getElementById("nome").value
    localStorage.jogador = document.getElementById("jogador").value
    localStorage.origem = document.getElementById("origem").value
    localStorage.classe = document.getElementById("classe").value
    localStorage.nex = document.getElementById("nex").value
    localStorage.pePR = document.getElementById("pePR").value
    localStorage.desl = document.getElementById("desl").value
    localStorage.pv = document.getElementById("pv").value
    localStorage.pva = document.getElementById("pva").value
    localStorage.pe = document.getElementById("pe").value
    localStorage.pea = document.getElementById("pea").value
    localStorage.def = document.getElementById("def").value
    localStorage.men = document.getElementById("men").value
    localStorage.mena = document.getElementById("mena").value
    localStorage.agl = document.getElementById("agl").value
    localStorage.int = document.getElementById("int").value
    localStorage.vig = document.getElementById("vig").value
    localStorage.pre = document.getElementById("pre").value
    localStorage.forc = document.getElementById("forc").value
    
    localStorage.acrobacia = document.getElementById("acrobacia").value
    localStorage.adestramento = document.getElementById("adestramento").value
    localStorage.artes = document.getElementById("artes").value
    localStorage.atletismo = document.getElementById("atletismo").value
    localStorage.atualidades = document.getElementById("atualidades").value
    localStorage.ciencias = document.getElementById("ciencias").value
    localStorage.crime = document.getElementById("crime").value
    localStorage.diplomacia = document.getElementById("diplomacia").value
    localStorage.enganacao = document.getElementById("enganacao").value
    localStorage.fortitude = document.getElementById("fortitude").value
    localStorage.furtividade = document.getElementById("furtividade").value
    localStorage.iniciativa = document.getElementById("iniciativa").value
    localStorage.intimidacao = document.getElementById("intimidacao").value
    localStorage.intuicao = document.getElementById("intuicao").value
    localStorage.investigacao = document.getElementById("investigacao").value
    localStorage.luta = document.getElementById("luta").value
    localStorage.medicina = document.getElementById("medicina").value
    localStorage.ocultismo = document.getElementById("ocultismo").value
    localStorage.percepcao = document.getElementById("percepcao").value
    localStorage.percepcao = document.getElementById("pilotagem").value
    localStorage.pontaria = document.getElementById("pontaria").value
    localStorage.profissao = document.getElementById("profissao").value
    localStorage.reflexo = document.getElementById("reflexo").value
    localStorage.religiao = document.getElementById("religiao").value
    localStorage.sobrevivencia = document.getElementById("sobrevivencia").value
    localStorage.tatica = document.getElementById("tatica").value
    localStorage.tecnologia = document.getElementById("tecnologia").value
    localStorage.vontade = document.getElementById("vontade").value
}

function carregaPraMim(){
    document.getElementById("nome").value = localStorage.nome
    document.getElementById("jogador").value = localStorage.jogador
    document.getElementById("origem").value = localStorage.origem
    document.getElementById("classe").value = localStorage.classe
    document.getElementById("nex").value = localStorage.nex
    document.getElementById("pePR").value = localStorage.pePR
    document.getElementById("desl").value = localStorage.desl
    document.getElementById("pv").value = localStorage.pv
    document.getElementById("pva").value = localStorage.pva
    document.getElementById("pe").value = localStorage.pe
    document.getElementById("pea").value = localStorage.pea
    document.getElementById("def").value = localStorage.def
    document.getElementById("men").value = localStorage.men
    document.getElementById("mena").value = localStorage.mena
    document.getElementById("agl").value = localStorage.agl
    document.getElementById("int").value = localStorage.int
    document.getElementById("vig").value = localStorage.vig
    document.getElementById("pre").value = localStorage.pre
    document.getElementById("forc").value = localStorage.forc

    document.getElementById("acrobacia").value = localStorage.acrobacia
    document.getElementById("adestramento").value = localStorage.adestramento
    document.getElementById("artes").value = localStorage.artes
    document.getElementById("atletismo").value = localStorage.atletismo
    document.getElementById("atualidades").value = localStorage.atualidades
    document.getElementById("ciencias").value = localStorage.ciencias
    document.getElementById("crime").value = localStorage.crime
    document.getElementById("diplomacia").value = localStorage.diplomacia
    document.getElementById("enganacao").value = localStorage.enganacao
    document.getElementById("fortitude").value = localStorage.fortitude
    document.getElementById("furtividade").value = localStorage.furtividade
    document.getElementById("iniciativa").value = localStorage.iniciativa
    document.getElementById("intimidacao").value = localStorage.intimidacao
    document.getElementById("intuicao").value = localStorage.intuicao
    document.getElementById("investigacao").value = localStorage.investigacao
    document.getElementById("luta").value = localStorage.luta
    document.getElementById("medicina").value = localStorage.medicina
    document.getElementById("ocultismo").value = localStorage.ocultismo
    document.getElementById("percepcao").value = localStorage.percepcao
    document.getElementById("pilotagem").value = localStorage.percepcao
    document.getElementById("pontaria").value = localStorage.pontaria
    document.getElementById("profissao").value = localStorage.profissao
    document.getElementById("reflexo").value = localStorage.reflexo
    document.getElementById("religiao").value = localStorage.religiao
    document.getElementById("sobrevivencia").value = localStorage.sobrevivencia
    document.getElementById("tatica").value = localStorage.tatica 
    document.getElementById("tecnologia").value = localStorage.tecnologia 
    document.getElementById("vontade").value = localStorage.vontade

}

document.addEventListener("DOMContentLoaded", function() {
    carregaPraMim()
});
