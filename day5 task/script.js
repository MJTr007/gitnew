//sum of numbers in an array

// var num = [11, 22, 33, 44];
// var toSum = 0;

// var sum = function(num){
//     for(var i =0; i<num.length; i++){
//     toSum += num[i];
//     }
//     return toSum;
// }

// console.log(sum(num));

///////////////////////////////////////////////////////////////////////////////////////

//return all the prime numbrs in an array

// var num = [1,3,5,7,9,11];

// var prime = function(num){
//     for (var i =0; i<num.length; i++){
//          if(num[i]%2 ==0 || num[i]%3 ==0);//{
//         //     console.log("not a prime number");
//         // }
//         else{
//             console.log(`${num[i]} is a prime number`)
//         }

//     }
// }
// prime(num)


////////////////////////////////////////////////////////////////////////////////////////

//convert string to title caps in string array
// var arr = ['ab','bc','cd'];
// var res = [];
// var convert = function(arr){
//     for(var i = 0; i<arr.length;i++){
//         arr[i] = arr[i].toUpperCase();
//         res.push(arr[i]);
//     }
//     return res;
// }
// console.log(convert(arr));
///////////////////////////////////////////////////////////////////////////////////////


// ODD number in array using anonyomus function

// var arr = [1,2,3,4,5,6,7];
// var res = [];
// var odd = function(arr){
//     for (var i=0;i<arr.length; i++){
//         if (arr[i]%2!=0){
//             res.push(arr[i]);
//         }
//     } 
//     return res;
// }
// console.log(odd(arr));
///////////////////////////////////////////////////////////////////////////////////

// return all the palindromes in an arry 

function isPalindrome(word) {
        const firstHalf = word.slice(0, Math.ceil(word.length/2));
        const secondHalfReversed = word.slice(Math.floor(word.length/2)).split('').reverse().join('');

        return firstHalf === secondHalfReversed;
    }

    function getPalindromesFromArray(arr) {
        return arr.filter(isPalindrome);
    }

    const wordsArr = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];

    console.log(getPalindromesFromArray(wordsArr));

// var arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
// var palindromes = arr.filter(w => {
//   let len = w.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (w[i] == w[len - i - 1]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// });
// console.log(palindromes)





///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//using IIFE
// (function odd(arr){
//     var result =[];
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             result.push(arr[i]);
//         }
//     }
//     console.log(result);
// }
// )([1,2,3,4,5,6,7])




