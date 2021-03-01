function buscasequencial(vetor, fnComp){
    //percurso com for tradicional
    for(let i = 0; i < vetor.length; i++){
        // encontrado o valor de busca, retorna-se a posição onde foi encontrado
        if(fnComp(vetor[i])) return i
    }
    //Retorna-se -1 caso o valor de busca não tenha sido encontrado
    return -1
}
//function comparaNome(objNome, valorBusca){
    //return objNome.First_name === valorBusca
//}
const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import { objNomes } from './Includes/vetor-obj-nomes.mjs'

console.time('Buscando ZILMAR')
console.log(buscasequencial(objNomes, obj => obj.first_name === 'ZILMAR'))
console.timeEnd('Buscando ZILMAR')

console.time('Buscando KATIUSCIA')
console.log(buscasequencial(objNomes, obj => obj.first_name === 'KATIUSCIA'))
console.timeEnd('Buscando KATIUSCIA')

console.time('Buscando nome AABRAO')
let posEncontrado = buscasequencial(objNomes, obj => obj.first_name === 'AABRAO')
console.timeEnd('Buscando nome AABRAO')

console.log(objNomes[posEncontrado])

console.time('buscando group_name MARIA')
console.log(buscasequencial(objNomes, obj => obj.group_name === 'KATIUSCIA'))
console.timeEnd('buscando group_name MARIA')
