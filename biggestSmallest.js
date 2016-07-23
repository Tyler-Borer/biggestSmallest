var arr = [2, 4, 6, 9, 7, 3,];

max = Math.max.apply(arr[0], arr); 				// search entire array for the biggest number
min = Math.min.apply(arr[0], arr); 				// search entire array for the smallest number

function newArr (arr){
for (var i = 0; i < arr.length; i++){ 				// iterate through the array cells
var newArr = [min, max];  					// set the new array to these cells

}
return newArr;
}
newArr(arr);							// call newArr



	
