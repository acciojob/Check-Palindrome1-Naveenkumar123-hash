// complete the given function

function palindrome(str){
	    let ntr=str.toLowerCase();
        let start=0;
	    let end=ntr.length-1;
	  while(start<end){
		  if(ntr.charAt(start)!==ntr.charAt(end)){
			  return false;
		  }
		  start++;
		  end--;
	  }
	return true;
}
module.exports = palindrome
