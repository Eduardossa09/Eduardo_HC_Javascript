
let min = 1
let max = 100
let número_misterioso = (Math.round(Math.random() * (max - min) + min));
let número_de_tentativas = 0
let número_escolhido = min-1

while(número_misterioso != número_escolhido){
    número_escolhido = parseInt(prompt("Escolha um número entre 1 e 100:"));
    if (número_escolhido < min || número_escolhido > max) {
        console.log("Número inválido.")
    }
    else {
        if (número_escolhido < número_misterioso) {
            console.log("O número misterioso é menor.") 
            número_de_tentativas += 1
        }
        else if (número_escolhido > número_misterioso) {
            console.log("O número misterioso é maior.")
            número_de_tentativas += 1
        }
    }
}

console.log("O número misterioso é:")
console.log(número_escolhido)
console.log("Número de tentativas:")
console.log(número_de_tentativas)