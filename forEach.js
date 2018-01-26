var canais = ["Globo", "Sbt", "Record"];

canais.forEach(function (canal) {
    canais.push("RedeTV");	//	este item será ignorado neste console.log, mas está sendo add no array a cada iteração
    console.log(canal);
});
console.log('O array canais após o forEach: '+ canais);

console.log("\n");
var nomes = ['maria', 'josé', 'joão'];

function imprimeNome(nome) {
    console.log(nome);
}
nomes.forEach(imprimeNome);