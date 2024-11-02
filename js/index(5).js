let alunos = [
    { nome: "Alice", nota: 89},
    { nome: "Bob", nota: 92},
    { nome: "Charlie", nota: 78},
    { nome: "Chris", nota: 50},
];

function calcularMediaNotas(alunosNotas) {
    let totalNotas = 0
    for(let position = 0; position < alunosNotas.length; position++) {
        
        totalNotas = alunosNotas[position].nota + totalNotas
    }
    return totalNotas / alunosNotas.length
}

let counter = 0
while (counter < alunos.length) {
    document.write(alunos[counter].nome + ' ' + alunos[counter].nota + "<br>");
    counter++;
}

document.write("A média da turma é de: ");
document.write(calcularMediaNotas(alunos).toString());
document.write(notaQualitativa);

if (0 <= totalNotas / alunosNotas.length <= 19) {
    notaQualitativa = "Muito Fraco"
}
else if (19 < totalNotas / alunosNotas.length <= 39) {
    notaQualitativa = "Insuficiente"
}
else if (39 < totalNotas / alunosNotas.length <= 69) {
    notaQualitativa = "Suficiente"
}
else if (69 < totalNotas / alunosNotas.length <= 89) {
    notaQualitativa = "Bom"
}
else if (89 < totalNotas / alunosNotas.length <= 100) {
    notaQualitativa = "Muito Bom"
}
else {
    document.write("Erro")
}