// 1. print odd numbers in an array
(function odd(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] %2 != 0){
         console.log(arr[i])
        }
    } 
})([1,2,3,4,5]);

//// convert all the strings to title caps in a string array

(function titlecase(str){
    str = str.toLowerCase().split(' ')
    for(var i=0; i<str.length; i++){
        str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    console.log(str.join(' '))
})("live the life")

/// 3.sum of all the number in an array


(function(num){
    let sum = 0
    for(var i=0; i<num.length; i++){
        sum = sum + num[i];
    }
    console.log(sum)
})([1,2,3,4,5]);


// 4. Return all the prime numbers in an array

( function prime(array){
    array = array.filter(function(number){
        for(var i=2; i<=Math.sqrt(number); i++){
            if(number % i === 0) return false;
}
return true;
    });
    console.log(array)
})([3,5,4,9,17,11])


// 5.palindrome

(function ispalindrome(myArr){
    myArr=myArr.filter((c,d)=>{
        var palindrome = c.split('').reverse().join('')
        if(c==palindrome){
            console.log(myArr[d])
        }
    })
})(["racecar","malayalam","laptop"])


// 6. Return median of 2 sorted array


( function(arr1, arr2) {
    
    let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
  console.log(c[half]);
  } else {
    
  console.log((c[half] + c[half - 1]) / 2);
  }
  
  })([1,5,9,25,65],[2,8,12,32,45])
  

// 7. remove dublicates

(function duplicate(Array){
    let dup = [...new Set(Array)]
    console.log(dup)
})([1,1,2,5,5,6,4])

//8.rotate array

(function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  })([1,2,3,4,5],3)
  







