
function factorial(n){
   if (n===0){
       return 1;
   }
   else {
       var value = n*factorial(n-1);
   return value;
    }
}
console.log(factorial(4));