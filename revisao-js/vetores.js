let frutas = ['laranjas', 'maçã', 'banana', 'pera', 'uva', 'mamão']

//exibir o vetor
console.log(frutas)

//tirar o ultimo elemento do vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

// Tirar o primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Removendo de posições intermediarias
// splice()
// 1° parâmetro: posição que será removida (lembre-se que a contagem começa em zero)
// 2° parâmetro: quantidade de elementos que serão removidos
let terceiraFruta = frutas.splice(2, 1) // Fruta na posição 2

console.log(frutas)
console.log(terceiraFruta) //splice() sempre retorna um vetor

//inserindo um elemento no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)

//Inserir um elemento no inicio do vetor
frutas.unshift('amora')

console.log(frutas)

// inserir em posição intermediaria
// slice() para inserção
// 1° parametro: a posição onde ocorrera a inserção
// 2° parametro: quantos elementos serão excluidos (0)
// parametros seguintes: elementos a serem inseridos

//inserindos na 4° posição
frutas.splice(3, 0, 'pêssego')
console.log(frutas)

//inserirndo 2 furtas na 3° posição
frutas.splice(2, 0, 'caqui', 'jaca')
console.log(frutas)

//substituindo 6° fruta 
frutas.splice(5, 1, 'abacate')
console.log(frutas)

/********************************************
 * Percursos de vetores
 */
 // 1) percurso via for tradicinal
 //é o mais flexivel, permitindo o percurso parcial (pode começar em um elemento que não seja o primeiro e terminar um elemento que não seja o ultimo)
 for(let i = 0;  i < frutas.length; i++) {
     console.log(i, frutas[i])
 }
 console.log('--------------------------------')

 //2) Percurso via for tradicional, em ordem inversa
 for(let i = frutas.length - 1; i >= 0; i--){
     console.log(i,frutas[i])
 }
console.log('---------------------------------')
 // 3) Percurso usando for..of
 //percorre totalmente um vetor, sem nescessidade de manter uma variavel contadora
 //variaveis:
 //fruta -. nome da varivel que recebera cada elemento (pode ser qqr nome valido de variavel)
 for(let fruta of frutas) {
     console.log(fruta)
 }

 console.log('---------------------------------')
 //4) percurso utilizado forEach()
 // o nome do parametro pode ser qualquer coisa
 frutas.forEach(function(elemento){
     console.log(elemento)
 })

  console.log('---------------------------------')

  //foreach() utilizado arrow function como parametro
  frutas.forEach(elemento => console.log(elemento))




 