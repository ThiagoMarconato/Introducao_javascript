function botao(){
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
  //console.log(document.getElementById("agradecimento"));
  //alert("Obrigado por clicar");
}

function redirecionar(){
  window.open("https://studeo.unicesumar.edu.br/"); // abre em outra página
  window.location.href = "https:www.google.com.br"; // abre na mesma página
}

function trocar(elemento){
  elemento.innerHTML = "Obrigado por passar o mouse";
  //document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse";
  //alert("trocar texto");
}

function voltar(elemento){
  elemento.innerHTML = "Passe o mouse aqui"; 
  //document.getElementById("mouse").innerHTML = "Passe o mouse aqui";
}

function load(){
  alert("Página carregada");
}

function funcaoChange(elemento){
  console.log(elemento.value);//quando o clt selecionar o valor ele guarda o valor que esta pegando;
}
/*
function soma (num1, num2){
return num1 + num2;
}

alert(soma(10,20));
*/

/*
function validaIdade(idade){
var validar;
  if(idade >= 18){
validar = true
}else{
validar = false
}
  return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

/*var frutas = ["melao", "melancia", "morango"];

console.log(frutas);*/

/*var d = new Date();

alert(d);
alert(d.getMonth() + 1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());*/


/*var count;

for(count = 0; count <= 5; count ++)
{
console.log(count);
}*/

/*var count = 0;
while (count <= 5){
console.log(count);
count ++;
}*/

/*var idade = prompt("Qual sua idade?");

if (idade >= 18){
alert("Maior de idade");
}else{
alert("Menor de idade");
}*/

/*var frutas = [{Nome: "Maçã", Sabor: "Doce", Calorias: "50"}, {Nome: "Abacate", Sabor: "Sem Gosto", Calorias: "100"}];
console.log(frutas);
alert(frutas[1].Nome);*/

/*var fruta = {Nome: "Maçã", Sabor: "Doce", Calorias: "50"}
alert(fruta.Sabor);
console.log(fruta.Nome);*/

/* var nome = "Thiago";
var idade = 33;
var idade2 = 10;
var n1 = 15;
var n2 = 20;
var frase = "Thiago seu gostoso";
var lista = ["Maçã", "Pera", "Laranja"];

lista.pop();
lista.push("Uva");
console.log(lista[2]);
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("="));
console.log(n1 * n2);
console.log(idade + idade2);
console.log(nome);
console.log(frase.replace("gostoso", "delicio"));
console.log(frase.toUpperCase());
//alert(idade + idade2);
//alert("Bem vindo " + nome + " " + "você tem: " + idade + "anos"); */