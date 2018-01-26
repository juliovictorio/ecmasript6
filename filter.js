//utilizado	 quando	 temos	 a	 necessidade	 de	 filtrar	 nossa	 lista	 de acordo	 com	 algum	 critério

var alunos = [
    { nome: 'joão', idade: 15 },
    { nome: 'josé', idade: 18 },
    { nome: 'maria', idade: 20 }
];

var alunosDeMaior = alunos.filter(function (aluno) {
    return aluno.idade >= 18;
});
console.log(alunosDeMaior);


//com arrow function
var alunosDeMaior2 =  alunos.filter(aluno => aluno.idade >=18)
console.log(alunosDeMaior2);
