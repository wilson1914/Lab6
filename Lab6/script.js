

function convertTemp (degreeInput, targetUnit){
	var result;
if (targetUnit==="C") {
	result = ((degreeInput-32)*5/9);
		
}


if (targetUnit==="F"){
	result = ((degreeInput+32)*9/5);
		
}
console.log ("The answer is " + degreeInput + " " + targetUnit + " " + result);
}

convertTemp (212, "C"); 
convertTemp (32, "C"); 
convertTemp (65, "C"); 
convertTemp (0, "F"); 
