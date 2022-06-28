// comece a criar a sua função add na linha abaixo
function add(num1, num2){
    return num1 + num2;

    
}
console.log(add(3,5))
 console.assert(add(3, 5) === 8,);


// comece a criar a sua função multiply na linha abaixo
function multiply(num1, num2){
    let mult = 0
    for (let i = 0; i <num2; i++){
        mult += add(0, num1)
    }
   return mult
}
console.log(multiply (4,6))
 console.assert(multiply(4, 6) === 24,);


// comece a criar a sua função power na linha abaixo
function power (num1, num2 ){
    let poweer = 1;

    for(let i = 0; i < num2; i++){
        poweer = multiply(num1,poweer)
    }
    return poweer
}
console.log(power(3,4))
console.assert(power(3, 4) === 81,);


// comece a criar a sua função factorial na linha abaixo
function factorial(fac1){
    let factor = 1;
    
    for(let i = 1; i <= fac1; i++){
        factor = multiply(factor, i)
    }
    return factor
}
console.log(factorial(5))
console.assert(factorial(5) === 120,);


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
