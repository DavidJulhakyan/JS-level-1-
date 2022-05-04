// 1. Given an array. Write a recursive function that removes the first element and returns the given
// array. (without using arr.unshift(),assign second element to first, third element to second...)
let recursiv = function (arr, result = []) {
    if(arr.length!==1){
        arr[0]=arr[0+1]
        result.push(arr[0])
        arr.shift()
    }
    if(arr[0] !== arr[arr.length-1]){
      return recursiv(arr)
    }
    return result 
}


2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
that concats arrays).
function flatter (arr,res = []){
    for (let i = 0;i < arr.length;i++){
        if (typeof(arr[i])== 'object'){
            res = res.concat(flatter(arr[i]))
        }else {
            res.push(arr[i])
        }
        }
        return res 
    }

// 3. Given an array and a number N.  Write a recursive function that rotates an array N places to the
// left. (Hint: to add element to the beginning use arr.unshift())
function toTheLeft (arr,N,result = []){
    debugger
    for (let i = 0; i < arr.length && i+N !=arr.length ;i++ ){
        result.push(arr[i+N])
    }
    return result 
}


4.Given the list of the following readers:
[
{ book: &quot;Catcher in the Rye&quot;, readStatus: true, percent: 40},
{ book: &quot;Animal Farm&quot;, readStatus: true, percent: 20},
{ book: &quot;Solaris&quot;, readStatus: false, percent: 90 },
{ book: &quot;The Fall&quot;, readStatus: true, percent: 50 },
{ book: &quot;White Nights&quot;, readStatus: false, percent: 60 } ,
{ book: &quot;After Dark&quot;, readStatus: true, percent: 70 }
];
Output the books sorted by the percent in descending order which readStatus is true.

function sorter (arr,result = []){
    for (let i = 0; i < arr.length;i++){
        let obj = arr[i] 
            if (obj['readStatus']==true){
                result.push(obj)
            } 
    }
    result = result.sort(function(a,b){
       return b['percent'] - a['percent'] 
    }) 
    return result 
}
