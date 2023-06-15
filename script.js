// complete the given function

function palindrome(str){
        let start=str.charAt(0);
	    let end=str.charAt(str.length-1);
	  while(start>end){
		  if(start!=end){
			  return false;
		  }
		  start++;
		  end--;
	  }
	return true;
}
module.exports = palindrome
