// Sign_product
function sign(v1,v2,v3){
	var mult = v1 * v2 *v3;
	if (mult >= 0){
		var message = 'The sign is +';
	}else if (mult < 0){
		var message = 'The sign is -';
	}
	alert(message);
}
sign(3,-7,2);

// Sort_numbers
function sortValues(v1,v2,v3){
	var num1 = v1;
	var num2 = v2;
	var num3 = v3;

	if (v1<v2){
		num1 = v1;
		num2 = v2;
	}else if (v1 > v2){
		num1 = v2;
		num2 = v1;
	}
	var num21, num22, num23
	if (v3>num2){
		num21 = num1;
		num22 = num2;
		num23 = v3;
	}else if (v3<num2 && v3>num1){
		num21 = num1;
		num22 = v3;
		num23 = num2;
	}else if(v3<num1){
		num21 = v3;
		num22 = num1;
		num23 = num2;
	}
	var message = num23 + ', ' + num22 + ', ' + num21;
	return message;
}
console.log(sortValues(0,-1,4));

// Largest_number
function largestNumber(v1,v2,v3,v4,v5){
	if (v1>v2){
		var largest = v1;
	}else{
		var largest = v2;
	}

	if (v3>largest){
		var largest = v3;
	}
	if (v4>largest){
		var largest = v4;
	}
	if (v5>largest){
		var largest = v5;
	}
	return largest;
}
alert(largestNumber(-5,-2,-6,0,-1))

// odd_or_even
for (var i = 0; i < 16; i++){
	var result = i % 2;
}