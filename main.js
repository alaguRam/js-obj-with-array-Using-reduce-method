// Using reduce method
// output:40
const numbers = [1, 2, 3, 4, 5];

let sum=numbers.reduce(function(pre,curr){
	return pre+curr*2;
	},10);
	console.log(sum);