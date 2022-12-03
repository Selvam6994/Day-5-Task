//Odd numbers in array.
//Anonymous Function.
var anonArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = [];
var odd = function (a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 != 0) {
      result.push(a[i]);
    }
  }
  return result;
};
console.log(odd(anonArr1));

//Arrow function.
var anonArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = [];
var odd = (a) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 != 0) {
      result.push(a[i]);
    }
  }
  return result;
};
console.log(odd(anonArr1));

//IIFE
var result = [];
(function odd(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 != 0) {
      result.push(a[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Print string to title caps.
//Anonymous Function.
var input = ["GUVI", "GEEK"];
var output = [];
var titleFunc = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    var a = arr[i].toLowerCase();
    var s = a.split("");
    var res = s[0].toUpperCase() + s.slice(1).join("");
    output.push(res);
  }
  return output;
};
console.log(titleFunc(input));

//Arrow function.
var input = ["GUVI", "GEEK"];
var output = [];
var titleFunc =(arr)=> {
  for (let i = 0; i < arr.length; i++) {
    var a = arr[i].toLowerCase();
    var s = a.split("");
    var res = s[0].toUpperCase() + s.slice(1).join("");
    output.push(res);
  }
  return output;
};
console.log(titleFunc(input));

//IIFE.
var output = [];
(function titleCaps(arr) {
  for (let i = 0; i < arr.length; i++) {
    var a = arr[i].toLowerCase();
    var s = a.split("");
    var res = s[0].toUpperCase() + s.slice(1).join("");
    output.push(res);
  }
  console.log(output);
})(["GUVI", "GEEK"]);

//Sum of all numbers in an Array.
//Anonymous Function.
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
var total = function (a) {
  for (let i = 0; i < a.length; i++) {
    sum = a[i] + sum;
  }
  return sum;
};
console.log(total(numArr));

//Arrow function.
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
var total =(a)=> {
  for (let i = 0; i < a.length; i++) {
    sum = a[i] + sum;
  }
  return sum;
};
console.log(total(numArr));

//IIFE.
var sum = 0;
(function total(a) {
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  console.log(sum);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Print all prime numbers.
//Arrow function.
let prime_Numbers = (num) =>
  (num = num.filter((ele) => {
    for (let i = 2; i <= Math.sqrt(ele); i++) {
      if (ele % i === 0) {
        return false;
      } else {
        return true;
      }
    }
    return ele;
  }));
console.log(prime_Numbers([2, 3, 5, 7, 9, 4, 6, 1, 8]));


//Print Palindrome.
//Anonymus Function.
let str1=['mango','madam','malayalam','rotator','reper'];
 var res =[];
var palin=function(a){
    for(let i=0;i<a.length;i++){
        let n = a[i].split("");
        let r = n.reverse();                                                                  
        let v = r.join("");
        if(a[i] == v){
            res.push(a[i]);
        }else{
            continue;
        }
    }
    return res;

};
console.log(palin(str1));

//Arrow function.
let str=['mango','madam','malayalam','rotator','reper'];
 var res =[];
var palin=(a)=>{
    for(let i=0;i<a.length;i++){
        let n = a[i].split("");
        let r = n.reverse();                                                                  
        let v = r.join("");
        if(a[i] == v){
            res.push(a[i]);
        }else{
            continue;
        }
    }
    return res;
};
console.log(palin(str));

//IIFE.
let str2=['mango','madam','malayalam','rotator','reper'];
str=(function(){
    var res =[];
    for(let i=0;i<str.length;i++){
        let n = str[i].split("");
        let r = n.reverse();                                                                  
        let v = r.join("");
        if(str[i] == v){
            res.push(str[i]);
        }else{
            continue;
        }
    }
    console.log(res);

})();

//Median of two sorted Array.
//IIFE.
let ar1=[4,6,5,3,8];
let ar2=[1,7,2,9,10];
(function(){
  var res1=[];
  var res2=[];
    ar1.sort((a,b)=>a-b);
    ar2.sort((a,b)=>a-b);
   let l = ar1.length /2;
   if(l%2===0){
       res1.push(ar1[(ar1.length/2)-1],ar1[ar1.length/2]);
       res2.push(ar2[(ar2.length/2)-1],ar2[ar2.length/2]);
   }else{
       res1.push(ar1[Math.floor(ar1.length/2)]);
       res2.push(ar2[Math.floor(ar2.length/2)]);
   }
   
   console.log(res1);
   console.log(res2);
})();

//Duplicates of Array.
//IIFE.
let arr=[22,55,6,7,77,55,76,22];
(function(){
    let res =[];
    res.push(num[0]);
    for(i=1;i<num.length;i++){
        if(res.indexOf(num[i]) == -1){
            res.push(num[i]);
        } 
    }
   console.log(res);
})();

//Rotation of array by k times.
//Anonymus function.
let Arr1=[1,2,3,4,5,6,7,8];
let k=6;
var arr1=function(a){
    for(let i=0;i<k;i++){
        a.push(a[i]);
        
    }
    for(let i=0;i<k;i++){
        a.shift();
    }return a;
    };
    console.log(arr1(Arr1));

//IIFE.
let Arr=[1,2,3,4,5,6,7,8];
let A=6;
arr1=(function(){
    for(let i=0;i<A;i++){
        arr1.push(arr1[i]);
        
    }
    for(let i=0;i<A;i++){
        arr1.shift();
    }
    console.log(arr1);
    
})();