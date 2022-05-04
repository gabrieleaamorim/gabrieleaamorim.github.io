// Função nominal com parâmetro obrigatório.

// undefined é um tipo de valor que não existe.
// null é um tipo de valor inválido.

//uma função sem return é uma subrotina

//function write(nome, sobrenome) {
  //      const a = sobrenome;
    //    if(a === undefined) {
      //      console.log("a é undefined");
        //    console.log("Valor de a", a, "\n");
          //  console.log("Valor de sobrenome", sobrenome, "\n");

        //}
    //console.log(`${nome} ${sobrenome}`);
//}

//write("Glaucio");

// função nominal que retorna valor
//function soma(a, b){
  //  return Number(a) + Number(b);
//}

//const resultado = soma(1,2);

//console.log(soma(3,5));


//expressão de função = uma função é atribuida a um contexto por 
//função anónima como expressão de função
//const exibe = function(x) {
   // return `Exibidindo parâmaetro ${x}`
//}

//console.log(exibe(" -x- "));

// O js evolui a cada ano, todo ano tem uma nova versão
// 2012-15
//Não tinha muita restrição de forma de escrever JS
//"use strict"
//2015 - muitas mudanças e algumas melhorias...o const e o let foram adicionados nesta versão
// 2018 - os navegadores passaram a implementar o use strict;
// option explicit

//this === windows - true
// this === window - false;
//use strict - this é undefined.

// this - este. é uma variável interna para apontar atributos e metodos dentro de um objeto ou classe.


// Pessoa correr() Pessoa.correr();
// Pessoa correr() parar() andar() sentar(); levantar(); velocidade = 0;

//function andar(){ this.velocidade = 1;}

//this. variável interna do javascript
//this ele tem comportamentos diferentes dependendo de onde ele está sendo usado
// refere-se a um objeto

//objeto global
//let empresa = this; //window

//quando criamos um objeto, criamos um escopo
//quando usamos o this dentro de um objeto, o this é o objeto.

//quando criamos um objeto, criamos um escopo.
const aluno = {
    nome: 'Glaucio',
    matricula: 123,
    executar: function() {
        return this.nome;
    }
};

//console.log(aluno.executar())
console.log(aluno.executar());

//estrito - this é undefined
//console.log("Quem é o this no contexto global", empresa);

//this dentro de uma funcao - tambem é um objeto global.

function globalObj() {
    //"use strict"; //this vira undefined;
    return this;
}

window.document.write("<h2>Escrevendo no Body</h2>");
document.write(globalObj());

//Arrow Function - Função de seta, ela é mais curta, não tem o próprio contexto.
const novaFuncao = () => {
    console.log("Chamando de dentro de uma arrow function");
    //Interpolação de variáveis é chamar uma variável dentro de uma string; Template String.
    console.log(`Exibindo o valor de ${a}`);
    //Concatenação de variáveis.
    console.log("Exibindo o total de caracteres" + blur.length);
    //indentação é um código escrito de forma legível, que respeita hierarquia { dá um espaço, para facilitar a leitura do código, um código indentado é uma das maneiras de manter um código limpo}

};

const funcao3 = (a) =>
    console.log(`Exibindo o total de caracteres de ${a.length}`);

funcao3("Glaucio Daniel");


const carros = (primeiro, segundo, ...restante) => {
    console.log(
        `Os carros informados foram: ${primeiro}, ${segundo} - ${
            restante[5]
        }.  Todos os demais são ${restante.join(", ")}`
    );

};
carros(
    "DelRey",
    "Brasilia",
    "Belina",
    "Fusca",
    "Variant",
    "Parati",
    "Monza",
    "Scort",
    "Fiat 147",
    "D-20",
    "Kombi",
    "BMW",
    "Opala",
    "Land-Rover",
    "Gurgel",
    "Maverick",
    "Marea"
);

const frutas = ["Guaraná", "Cupuaçu", "Açaí"];
const todasFrutas = [...frutas, "banana", "abacaxi"];

// const {password, ...result} = await user.findById(50);
//password
//name, email, id, salary



console.log("Todas as frutas", todasFrutas);

//destructuring assigment
// atribuição por deses

let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log('Exibindo o primeiro', primeiro);
console.log('Exibindo o resto', resto);

const meuArray = [10, 20, 30, 40];
console.log(meuArray, meuArray.join(", ")); //transforma o array em um texto só

//const [p, s, t, q] = meuArray;
//const [...p, q] = meuArray;

//console.log('exibindo o quarto elemento', q);
const [q, ...p] = meuArray.reverse();
console.log(meuArray.reverse());




// novo JavaScript ES2017

//spread operator

//destructuring assigment
// atribuição por desestruturação

//globalObj().alert("Vai Conrinthias!");

//function Pessoa(){
    //this.velocidade = 0;

    //function andar() {
        //console.log("velocidade atual", this.velocidade);
    //}
//}

//const Pessoa = {
  //  velocidade: 0,
    //nome: "Glaucio Daniel"; 
    //andar: function(){
      //  console.log('velocidade atual', this.velocidade);
    //},
    //exibeNome: function () {
      //  this.andar();
        //console.log(`Nome: ${this.nome} velocidade: ${this.velocidade}`);
    //}
//} 

//var nome = "Fiap;"


//Onde o JS esta sendo executado? Qual o contexto?
//Contexto: navegador, this depende do contexto
// this é o window

// mas se estiver usando a versão estrita do js o thsi será a window.


//function quemEoThis(){
//console.log(this === window);
//}


//function quemEpThisEstrito() {
    //quando queremos usar o JS na versão mais pólida, o use strict deve ser informado no inicio.
  //  "use strict";
    //console.log("strict");
    //console.log(this === window);
//}

//quemEoThis();
//quemEpThisEstrito();

//function Exibe2() {
  //  this.a = 50;

    //function metodo1();

//}

//const novoObjeto = new Exibe2();
//console.log(novoObjeto.a);
