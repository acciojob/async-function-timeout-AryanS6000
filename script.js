function wait (ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}
 async function showmessage(){
	 let text = document.getElementById("text").value;
	 let delay = parseInt(document.getElementById("delay").value);
	let output = document.getElementById("output");
	   if(isNaN(delay) || delay<0){
		    output.textContent = "please enter a valid delay";
	   }
	      if(!text){
		    output.textContent = "please enter a valid text";
	   } 
	  output.textContent = "";
	await wait(delay);
	output.textContent = text;
}
document.getElementById("btn").addEventListener("click",showmessage);
