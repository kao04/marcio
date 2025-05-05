function mensagem(){
	console.log("Seja bem vindo(a)!")
	console.log("É um prazer tê-lo aqui.!")
	console.log("Aproveite")
}

mensagem()

function somarNumeros(valor1, valor2){
	let soma = valor1 + valor2
	console.log(soma)
}

somarNumeros(15,27)

function boasVindas(nome, cargo){
	console.log(`Seja bem-vindo(a) ${cargo} ${nome}!`)
}

boasVindas("Marcio", "professor")

function somar(valor1, valor2) {
	return valor1 + valor2
}

let resultado = somar(29, 32)

console.log(somar(12, 12))
console.log(resultado)

function boasVindas(nome, cargo){
	return `Seja bem-vindo(a) ${cargo} ${nome}!`
}

let saudacao = boasVindas ("Marcio", "professor")

console.log(saudacao)

function parImpar(valor){
	if(valor % 2 === 0){
	    return "par"
	} else {
		return "impar"
	}
}

let verificação = parImpar(13)

console.log(verificação)