// a rigor, a função abaixo nao seria necessaria, pois usando
//recursos nativos do js, poderiamos escrever x** 2 ou math.pow(x, 2)

//caracteristicas desta função:
//1) Tem apenas um parametro 
//2) seu corpo tem apenas uma linha retornando valor
function quadrado(x){
    return x * x
}
console.log(quadrado(9))

// o formato de função acima é peifeito para conversão em arrow funcition
//que é um modo "abreviado" de escrever uma função em js

//1) Os parenteses em torno do parametro foram omitidos
//2) A palavra *funcition*, que vinha ANTES do parametro, foi substituida
//pelo simbolo
//3) as chaves foram omitidas
//4) a palavra chave *return* foi omitida
//5) uma arrow function é uma função anonima. portanto, caso deseje
// chama-la posteriormente, é necessario atribui-la a uma variavel
const quadrado2 = x => x * x
console.log(quadrado2(9))

// Função com mais de um parametro
function potencia(b, e){
    return b ** e
}
console.log(potencia(2, 10))

// arrow function equivalente
// quando temos mais de um parametro, os parametros retornam
const potencia2 = (b, e) => b ** e
console.log(potencia2(2, 10))

// Função sem parametros, que retorna um numero aleatorio entre 1 e 60
function megasena(){
    //math.random()-> retorna um numero aleatorio entre 0 e 1
    //* 60 -> ajusta faixa de valores para entre 0 e 59
    //+1 -> ajusta a faixa de falores pra entre 1 e 60
    //math.ceil() -> retira as casa decimais de um numero, deixando apenas
    // a parte interna
    return Math.ceil(Math.random() * 60 + 1)
}
console.log (megasena(), megasena(), megasena(), megasena(), megasena(), megasena())

// os parentes vazios (obrigatorios) marcar o lugar dos parametros
let megasena2 = () => Math.ceil(Math.random() * 60 + 1)
console.log (megasena2(), megasena2(), megasena2(), megasena2(), megasena2(), megasena2())

//funçaõ com mais de uma linha no corpo
function somaVet(vet){
    let soma = 0
    for(let n of vet) soma += n
    return soma
}
console.log(somaVet([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//com mais de uma linha no corpo, as chaves voltam e não é mais
//possivel emitir a palavra chave *return* caso a função retorne valor
const somaVet2 = vet =>{
    let soma = 0
    for(let n of vet) soma += n //soma = soma + n
    return soma
}
console.log(somaVet2([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//Conclusão: arrow function são ideais para casos em que o corpo da função
//possui apenas uma linha, embora arrow functions com multiplas linhas
//não sejam incomuns