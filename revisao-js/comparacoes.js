let a = 10, b = 15, c = 10// numeros 
console.log(a > b)
console.log(a < b)
console.log( a == c)
console.log( a != c)

console.log('--------------------------')

//Strings

a = 'Maria'
b = 'Dinah'
c = 'Maria'
console.log(a > b)
console.log(a < b)
console.log( a == c)
console.log( a != c)

console.log('--------------------------')

a = true
b = false
c = true
console.log(a > b)
console.log(a < b)
console.log( a == c)
console.log( a != c)

console.log('--------------------------')

a = [1, 2, 3, 4, 5]
b = [10, 20, 30, 40, 50]
c = [1, 2, 3, 4, 5]

console.log(a > b)
console.log(a < b)
console.log( a == c)
console.log( a != c)

console.log('--------------------------')

//na comparação de vetores, os resultados para maior e menor
//nao sao consistentes
// conclusã: vetores não são diretamentes comparaveis entre si

//objetos
a = {marca: 'volkswagem', modelo: 'fusca', ano: 1976} 
b = {marca: 'fiat', modelo: '147', ano: 1980} 
c = {marca: 'volkswagem', modelo: 'fusca', ano: 1976} 
console.log(a > b)
console.log(a < b)
console.log( a == c)
console.log( a != c)

console.log('--------------------------')

//nao sao consistentes

// conclusão: tambem vetores não são diretamentes comparaveis entre si
// tipos de dados que são comparaveis em js: number, string, boolean