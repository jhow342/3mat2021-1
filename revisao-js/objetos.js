//Criação de um objeto vazio
let vazio1 = {} // Forma moderna
let vazio2 = new Object() //Forma tradicional

//Criação de objetos já com dados
let pessoa = {
    // Objetos organizam-se em pares de propriedades: valor
    //tambem chamados de atributo: valor
    nome: 'Orkutilson da Silva',
    dataNasc: '2009-01-29',
    sexo: 'M',
    ocupacao: 'estudante',
    //Nomes podem ter espaços e acentos
    //mas, nesse caso precisa vit entre aspas
    'cidade de origem' : 'Franca/SP'
}

//acessando uma propriedade do objeto
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
// Quando o nome da propriedade tem espaços ou acentos, nao é possivel acessa-la pela sintaxe . e sim usar os colchetes.
console.log(pessoa['cidade de origem'])

// A sintaxe dos colchetes SEMPRE funciona
console.log(pessoa.dataNasc)     //Sintaxe do ponto
console.log(pessoa['dataNasc'])  // Sintaxe dos colchetes
//A sintaxe dos colchetes é importante tambem quando o nome da propriedade esta armazenada em uma variavel 
let prop = 'nome'
console.log(pessoa[prop])
prop = 'sexo'
console.log(pessoa[prop])
prop = 'cidade de origem'
console.log(pessoa[prop])

//Formas de exibir um objeto inteiro
console.log(pessoa)
console.table(pessoa)

let veiculo ={}  // O objeto inicia-se vazio
//foi criada a propriedade marca e colocando o valor 'volkswagen' dentro dela
veiculo.marca = 'Volkswagen'
veiculo.modelo = 'Variant'
veiculo.ano = 1974
veiculo['combustível'] = 'gasolina'
// Propriedade com acento -> sintaxe dos colchetes
veiculo.cor = 'azul'

console.log(veiculo)
console.table(veiculo)

// Listando todas propriedades de um objeto
console.log('---------------------------')
// for..in -. lista todas as propriedades de um objeto
// Variaveis:
// Prop -. a variavel que ira conter o nome de cada uma das propriedades 
//do objeto (pode ser qualquer nome valido de variavel)
//pessoa -> o objeto do qual queremos lisatr as propriedades
for(let prop in pessoa){
    console.log(prop)
}
console.log('---------------------------')
for(let x in veiculo){
    console.log(x)
}

// Listando propriedades e valores do objeto veiculo for..in
for(let atrib in veiculo) {
    console.log(atrib + '->' + veiculo[atrib])
}

// Objeto veiculo antes da exclusão de proproedades
console.log(veiculo)

//Apagando uma propriedade de um objeto: delete
delete veiculo.ano

// Objeto veiculo depois da exclusão de proproedades
console.table(veiculo)
