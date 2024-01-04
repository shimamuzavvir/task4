// 1. print odd numbers in an array
let arr = [1,2,3,4,5,6,7,8]
let odd = function(){
 let result = arr.filter(num => num % 2 != 0)
    console.log(result)
}
odd()

// convert all the strings to title caps in a string array

let str = function(){
    let arr = "welcoming the new year"
    let str2 = arr.toLowerCase().split(' ')
     for(let i=0; i<str2.length; i++){
         str2[i]= str2[i].charAt(0).toUpperCase() + str2[i].slice(1)
    }
    console.log(str2.join(' '))
}
str()

// sum of all the number in an array

let sumNum = function(){
let num = [1,2,3,4,5]
let sum = 0
for(var i=0; i<num.length; i++){
    sum = sum + num[i]
}
console.log(sum)
}
sumNum();

// 4.return all the prime num in an array

var prime = function(){
    let num = [3,4,5,6,7,8,9]
    num = num.filter((number)=>{
        for(var i=2; i<=Math.sqrt(number); i++){
            if(number % i === 0) return false;
        }
        return true;
    })
   console.log(num)
}
prime()


// 5. return all the palindeomes in an array

let isPalindrome = function (){
    var myArr = ['syma', 'racecar', 'malayalam']
    var arr = myArr.filter(function(c, d) {
      var palindrome = c.split('').reverse().join('')
      if(c == palindrome){
     console.log(myArr[d])
      }
    })
}
isPalindrome()


//  6. return median of two sorted array


let arr1 = [1, 12, 15, 26, 38,24];
let arr2 = [2, 13, 17, 30, 45,47];

let median = function(a, b) {

    let c = [...a, ...b].sort((a, b) => a - b);
    const half = c.length / 2 | 0;
    
  if (c.length % 2 != 0) {
    return c[half];
  } else {
     return (c[half] + c[half - 1]) / 2;
  }
  }
  console.log(median(arr1, arr2));


//7. remove dublicate

let duplicate= function(){
    let Array = [1,1,2,2,3,4]
    let dup = [...new Set(Array)]
    console.log(dup)
    }
    duplicate()



// 8. rotate array


    let rotateArray =function(A, K) {
        if (A.length === K || K === 0) {
            return A;
        }
        K = K % A.length;
        for (let i = 0; i < K; i++) {
            A.unshift(A.pop());
        }
      console.log(A)
      }
      rotateArray([1,2,3,4,5],2)  









