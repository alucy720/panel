



//reverseseint(15)====51
//reverseseint(981)====189
//reverseSeint(500)====5
//reverseSeint(-15)===51
//reverseSeint(-90)====-9



function reverse(str) {
    return str.split("").reverse().join("")
} 
console.log(reverse("51"));
console.log(reverse ("981"));
console.log(reverse("500"));
console.log(reverse("-15"));
console.log(reverse("-90"));