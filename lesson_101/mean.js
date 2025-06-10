// const firstName = 'John'
// const lastName = 'Smith'
// // firstName = 'Alex'
// let age = 25

// console.log(firstName, lastName, age, 'y.o')




// const name1 = 'Ann'
// console.log(name1) 

// ===========================================================================

// const a = 5
// console.log( a)

// const sum = 5+5
// console.log(sum)


// const minus = 10-5
// console.log(minus)

// const x = 10
// const y = 20 
// const result = x * y 
// console.log(result) //  console.log(x * y)

// const division = y / 2
// console.log(division)

// console.log(3 ** 2)
// console.log( 5 % 2)

// console.log('Hello' + 'World')
// console.log('Hello ' + 'World')

// const num = 2
// console.log(-num)

// =====================================================
// const instrument = 'Инструмент'
// const box = 'ящик'
// console.log(`${instrument} лежит в ${box}e`)
// let  instrument = 'Инструмент'
// instrument = 10
// console.log(instrument)

// const user = 'User'
// const age = 25
// const isAdmin = true
// console.log(`${user} admin: ${isAdmin}`)

// console.log(typeof(instrument))

// let foo 
// console.log(foo)
// let sum = null
// sum = 5 + 5
// console.log(sum)
// ===============================================================================
// const firstNumber = 5
// const secondNumber = 5

// if (firstNumber == secondNumber)  //true
// { const result = firstNumber + secondNumber
//     console.log(result)
// }

// const firstNumber = 5 
// const secondNumber = 10

// if (firstNumber == secondNumber)  //false
// { const result = firstNumber + secondNumber
//     console.log(result)
// }

// const firstNumber = 5
// const secondNumber = 10

// if (firstNumber == secondNumber)  //false
// { const result = firstNumber + secondNumber
//     console.log(result)
// } 
// else { const result = secondNumber - firstNumber
//     console.log(result)
// }

// let result = null
// if (firstNumber == secondNumber) {
//     result = firstNumber + secondNumber
//     console.log(result)
// } else {
//     result = secondNumber - firstNumber
//     console.log(result)
// }

// let result = null
// if (firstNumber > secondNumber) {
//     result = firstNumber + secondNumber
//     console.log(result)
// } else {
//     result = secondNumber - firstNumber
//     console.log(result)
// }


// const firstNumber = 10
// const secondNumber = 10
// let result = null
// if (firstNumber > secondNumber) {
//     result = firstNumber + secondNumber
//     console.log(result)
// } else {
//     result = secondNumber - firstNumber
//     console.log(result)
// }

// const firstNumber = 10
// const secondNumber = 10
// let result = null
// if (firstNumber >= secondNumber) {
//     result = firstNumber + secondNumber
//     console.log(result)
// } else {
//     result = secondNumber - firstNumber
//     console.log(result)
// }

// const firstNumber = 3
// const secondNumber = 2
// let result = null
// if (firstNumber != secondNumber) 
//     {
//     result = firstNumber + secondNumber
//     console.log(result)
// } else {
//     result = secondNumber - firstNumber
//     console.log(result)
// }

// const firstNumber = '10'
// const secondNumber = 10
// let result = null
// if (firstNumber == secondNumber) //  оператор сравнения игнорирует типы данных операндов
//     {
//     result = firstNumber + secondNumber
//     console.log(result)
// } else {
//     result = secondNumber - firstNumber
//     console.log(result)
// }

// const firstNumber = '10'
// const secondNumber = 10
// let result = null
// if (firstNumber === secondNumber) //  оператор строгое сравнение 
//     {
//     result = firstNumber + secondNumber
//     console.log(result)
// } else {
//     result = secondNumber - firstNumber
//     console.log(result)
// } // выполняется блок else

// const firstNumber = '10'
// const secondNumber = 10
// let result = null
// if (firstNumber !== secondNumber) //  оператор строгое неравно
//     {
//     result = firstNumber + secondNumber
//     console.log(result)
// } else {
//     result = secondNumber - firstNumber
//     console.log(result)
// }

// const firstNumber = 5
// const secondNumber = 20
// let result = null
// if (firstNumber === 10 || secondNumber === 20) //  оператор строгое равно , или , сторогое равно
//     {
//     result = firstNumber + secondNumber
//     console.log(result)
// } else {
//     result = secondNumber - firstNumber
//     console.log(result)
// }

// const firstNumber = 5
// const secondNumber = 20
// let result = null
// if (firstNumber === 10 && secondNumber === 20) //  оператор строгое равно, и, строгое равно
// {
//     result = firstNumber + secondNumber
//     console.log(result)
// } else {
//     result = secondNumber - firstNumber
//     console.log(result)
// }

// const alex = 'admin'
// if (alex === 'user') { console.log('Alex is user') }
// else if (alex === 'vip')
// { console.log('Alex is vip user')}
// else {
//     console.log('Alex is admin')
// }

// тернарный оператор :
// const alex = 'admin'
// alex === 'admin' ? console.log('Alex is admin') : console.log('Alex is not admin')




// ==================================================================== 
// циклы
// let i = 0
// while(i < 10) 
// {
//     i = i +  1
//     console.log(i)
// }

// let i = 0
// do {
//     i++
//     console.log(i)
// } while (i < 5)


// for (let i = 1; i <= 10; i++)
//     {
// console.log( `Пройден ${i} круг`)
// }

// массивы =========================================================
// const numbers = [1, 2, 3, 4, 5]
// console.log (numbers)
// console.log(numbers[0]) 
// console.log(numbers[2])

// const numbers = [1, '2', true, [1, 2, 3], 5]
// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5]
// numbers[4] = 6
// console.log (numbers)


// const numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] + 1)
// }

// ===========================================================================
// функции
// function sumNumbers() {
//     return 5 + 5
// }
// const result = sumNumbers()
// console.log(result)


// function sumNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }
// const result = sumNumbers(3, 10)
// console.log(result)
// console.log(sumNumbers(-2, 2))


// const users = ['John', 'Ann', 'Alex', 'Max']
// function checkForCopyItem(array, item) {
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === item) {
//         return `There is a copy of the ${item} in the array`
//     }
// }
// return 'There is no such item in the array'
// }
// console.log(checkForCopyItem(users, 'Alex'))



// =====================================================================================================================




function nameI(argument) {
    return `Hello ${argument}`
}
const res = nameI("Alex")
console.log(res)  // вот здесь консоль мы записываем после фигурных скобок...


const numbers = [1, 20, 3, 40, 5]
function masiv(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]); //  а вот здесь внутри ... почему?
        }
    }
}
masiv(numbers); //  второй вопрос: почему мы здесь не пишем console.log в конце, а записываем просто masiv(numbers)? 


function calc(firstNumber, secondNumber, operator) {
    if (operator === 'plus') {
        return firstNumber + secondNumber; // и здесь у тебя поставлена ; (точка с запятой) это на что-то влияет? в первом примере (alex) там их нигде нет)
    }

    if (operator === 'minus') {
        return firstNumber - secondNumber;
    }

    if (operator === 'multiplication') {
        return firstNumber * secondNumber;
    }

    if (operator === 'division') {
        return firstNumber / secondNumber;
    }
}
const result = calc(2, 3, 'plus');
console.log(result);

const result2 = calc(2, 3, 'minus');
console.log(result2);

const result3 = calc(2, 3, 'multiplication');
console.log(result3);

const result4 = calc(2, 3, 'division');
console.log(result4);