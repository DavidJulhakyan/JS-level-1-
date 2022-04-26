// 1. Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.

arr.findIndex(function (el,i=0,arr){
    if(arr[i]<arr[i-1]){
        return true
    }
})

// 2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array

function resultEl (arr){
      let resultel=0
    for (let k=0;k<arr.length;k++){
        resultel += arr[k]
    }
    return resultel
}


arr.map(function(el,i,arr){
    return resultEl(el)
})


// 3. Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length

function onlyOdd (arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
         if (Math.abs(arr[i]) % 2 === 1 ){
            result.push(arr[i])  
        }
    }
    result = result.map(function (el){
        return el * 3
    })
    return result
}

// 4. Given a number. Write a function that calculates its sum of the digits and if that sum
// has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
// return the result.

function sumRepeator(n){ 
    let result = 0 
    for (let i = 0;i < n.length;i++){
            result = Number(n[i]) + Number(result)
            result = String(result)
                if(i == n.length-1){
                    n = result 
                }
    }
    if (n.length !== 1 ){
        n = sumRepeator(n)
    }    
    return n
}


// 5. Write a recursive function which receives  a number as arguments and returns the
// fibonacci sequence as array.

// function fibonachi(n){
//     let arr = []
//     if (n === 1){
//         arr.push(n)
//         return arr
//     } 
//     if (n === 2 ){
//         arr.push(fib(n-1))
//         arr.push(fib(n))
//         return arr 
//     }
//     if (n === 3){
//         arr.push(fib(n-2))
//         arr.push(fib(n-1))
//         arr.push(fib(n))
//         return arr 
//     }
//     if (n === 4){
//         arr.push(fib(n-3))
//         arr.push(fib(n-2))
//         arr.push(fib(n-1))
//         arr.push(fib(n))
//         return arr
//     }
// }

function fib (n){
    if (n === 1 || n === 2){
        return 1
    }
    return fib(n-1)+ fib(n-2)
}

function fibonachi (n){
    let arr = []
    for(let i = 0; i < n; i++ ){
        arr.unshift(fib(n-i))
    }
    return arr
}

