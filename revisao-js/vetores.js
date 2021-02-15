let frutas = ['laranjas', ',maçã', 'banana', 'pera', 'uva', 'mamão']

//exibir o vetor
console.log(frutas)

//tirar o ultimo elemento do vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

// Tirar o primeiro elemento do vetor
let primeiraFruta = Frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Removendo de posições intermediarias
// splice()
// 1° parâmetro: posição que será removida (lembre-se que a contagem começa em zero)
// 2° parâmetro: quantidade de elementos que serão removidos
let terceiraFruta =fruta.splice(2, 1) // Fruta na posição 2

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

