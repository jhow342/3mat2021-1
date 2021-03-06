/* 
Algoritmo de ordenação bubble sort

percorre um veto, comparando um elemento com seu sucessor. Caso
o sucessor seja um menor que o valor atual, ocorre a troca entre eles.
esse processo se repete em vários passadas at~e que, no percurso final,
nenhuma troca seja feita.
*/

let totTrocas, comps, pass

function bubbleSort(vetor) {
    totTrocas = 0, comps = 0, pass = 0
    let trocas
    do{
        trocas = 0
        pass++

        // percurso do vetor do inicio ate o penultimo elemento
        for(let i = 0; i <= vetor.length - 2; i++){
            if(vetor[i] > vetor[i + 1]) {
                //let aux = vetor[i]
                //vetor[i] = vetor[i + 1]
                //vetor[i + 1] = aux

                //troca direta em jc usando destruturação de vetores
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]

                trocas ++
            }
            comps++
        }
        totTrocas += trocas

    } while(trocas > 0)
}

//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

//pior caso: vetor em ordem inversa 
//let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

//melhor caso
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('antes:', nums)
bubbleSort(nums)
console.log('depois:', nums)
console.log({totTrocas, comps, pass})

import { empresas } from './Includes/15-mil-empresas.mjs'

console.log('antes:', empresas)
console.time('ordenando empresas...')
bubbleSort(empresas)
console.timeEnd('ordenando empresas...')
console.log({totTrocas, comps, pass})
console.log('depois:', empresas)
