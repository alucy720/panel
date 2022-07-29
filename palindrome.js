function palindrome(str){
    const data =str.split("").reverse().join("");
    return  data=== str;
  
}
console.log(palindrome("lucy"));
