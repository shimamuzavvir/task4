//1.odd numbers

let odd = (array) => {
    for(var i = 0 ; i<array.length ; i++){
         if(array[i]%2 !=0){
            console.log(array[i]);
         } 
    }
         }
         odd([1,2,3,4,5])


   ///2. capital title case


   titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log(str.join(' '));
  }                   
     titleCase("my name is shima")   


//
//3. sum all the numbers
     
     
     let sumAll = (array)=>{
        var sum = 0;
        for(var i = 0 ; i< array.length ; i++){
           sum = sum + array[i];
         }
         console.log(sum);
         }

sumAll([1,2,3,4,5,6])

//
//4. prime number

let primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
primeNumber([2,5,6,3,7])

//
// 5. palindrome

let isPalindrome = (myArr)=>{
 var arr = myArr.filter(function(c, d) {
      var palindrome = c.split('').reverse().join('')
      if(c == palindrome){
     console.log(myArr[d])
      }
    })
}
isPalindrome(['syma', 'racecar', 'malayalam'])

