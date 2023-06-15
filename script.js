// complete the given function

function palindrome(str){
        let start=0;
	    let end=str.length-1;
	 for(let i=0;i<str.length;i++) {
			  let x =s.charAt(i);
			  if(x>='A' && x<='Z') {
				  x=x+32;
			  }
		  }
	  while(start<end){
		  if(str.charAt(start)!==str.charAt(end)){
			  return false;
		  }
		  start++;
		  end--;
	  }
	return true;
}
module.exports = palindrome
