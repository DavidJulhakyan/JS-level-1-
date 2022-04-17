//1.Given an object. Invert it (keys become values and values become keys). If there is
more than key for that given value create an array.

let obj = {
    key1 : 'hi',
    key2 : 'bro',
    key3 : 'whats up'
}

function inverter(anyObj){
  let newObj = {}
  for(let key in anyObj){
    newObj[anyObj[key]] = key
  }
  return newObj
}


//2.Given two objects. Write a function that performs shallow compare.

function shallowCompare(a,b){
    let informer = true 
    for (let k in a ){ 
       if  (a[k] == b[k] && Object.keys(a).length == Object.keys(b).length ){
           informer = true
       } else {informer = false} 
    } return informer
}


//3. Given an array. Determine whether it consists only from uniques or not.

let arr = [1,2,'brat',4,5,'brat', {} ]

function consistFromUniques (arr){
let arr1 = []
let result = true 

for (let i=0;i<arr.length && result !== false ;i++){
   arr1.push(arr[i])

    for(let j = arr[i+1] ; j < arr.length && result !== false ;j++){
        if (arr1[ i ] === arr[ j ]) {
            result = false 
        } else result = true 
}
} return result
}


//4. Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
word&quot;) is a word or phrase without a repeating letter.
function isogramOrNot(string){
let string1 = ''
let result = true 

for (let i=0;i<string.length && result !== false ;i++){
   string1 += string[i]

    for(let j = i+1 ; j < string.length && result !== false ;j++){
        if (string1[ i ] === string[ j ]) {
            result = false 
        } else result = true 
}
} return result
}

let word = prompt('Type any word to check is it isogram or not')
isogramOrNot(word)


5.
























