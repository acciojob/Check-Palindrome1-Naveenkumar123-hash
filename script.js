// complete the given function

function palindrome(str){
       let left = 0, right = str.length-1;
    
    while(left < right){
        if(left!== right) return false
        left++
        right--
    }
    return true
}
module.exports = palindrome
