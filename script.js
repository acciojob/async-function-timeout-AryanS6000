function wait (ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}
function async showmessage(){
	 let text = document.getElementById("text").value;
	 let delay = document.getElementById("delay").value;
	let output = document.getElementById("output");
	   if(isNaN(delay) || delay<0){
		    output.textcontent = "please enter a valid delay";
	   }
	      if(!text){
		    output.textcontent = "please enter a valid text";
	   } 
	  output.textcontent = "waiting";
	await(delay);
	output.textcontent = text;
}
document.getElementById("btn").addEventListener("click",showmessage);
