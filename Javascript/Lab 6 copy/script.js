console.log('Fahrenhiet to Celsius'):

function fToC1 (degreeInput, targetUnit){
	var targetUnit = (212-32)*5/9;
		console.log ("The temperature of 212 degrees in celsius is " + targetUnit);
}
convertTemp (212, "targetUnit");

function fToC2 (degreeInput, targetUnit){
	var targetUnit = (32-32)*5/9;
		console.log ("The temperature of 32 degrees Fahrenhiet is " + targetUnit);

}
convertTemp (32, "targetUnit");

function fToC3 (degreeInput, targetUnit){
	var targetUnit = (65-32)*5/9;
		console.log ("The temperature of 65 degrees Fahrenhiet is " + targetUnit);
}
convertTemp (65, "targetUnit");

function cToF (degreeInput, targetUnit){
	var targetUnit = (-40+32)*9/5;
		console.log ("The temperature of -40 degrees Celsius is " + targetUnit);
}
convertTemp (-40, "targetUnit");