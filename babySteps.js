function babySteps() {
	var numbers = process.argv.slice(2);
	var i = 0;
	var sum = 0;
	while (i < numbers.length) {
		sum += parseInt(numbers[i]);
		i += 1;
	}
	console.log(sum);
}

babySteps();