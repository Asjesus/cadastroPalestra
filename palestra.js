let dataAtual = new Date()
let dataEvento = new Date (2022, 08, 30)
let idadeParticipente = 18
let quantidadeParticipante = 100
let listaParticipante = ["Antonio", " João", " Claudia", " Catarina", " Amaral", " joão Vitor"]
let palestrante = ["Carlos", " Amadel"]


////////// VERIFICAÇÃO DATA //////////////////////////

if ( dataEvento <= dataAtual ){
    console.log("Cadastro não permitido, data invalida")
} else {
    console.log("Evento permitido")
}

/////////// VERIFICAÇÃO IDADE ////////////////////////////////////////

if (idadeParticipente >= 18) {
    console.log ("Idade permitida")
} else {
    console.log ("Cadastro não permitido pela idade")
}

////////////////// NOME PALESTRANTE///////////////////

console.log("Palestrante do evento: " + (palestrante))

////////////////// LISTA DE PARTICIPANTE //////////////////

console.log ("Participante do evento: " + (listaParticipante))

///////////// VERIFCAÇÃO DA LISTE E QUANTIDADE DE PARTICIPANTE/////////////////////

if (listaParticipante.length >= 100) {
    console.log ("Cadastro não permitido por ter excedido o limite")
} else {
    console.log("Cadastro permitido")
}

