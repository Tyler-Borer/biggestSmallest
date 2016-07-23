var arr = [2, 4, 6, 9, 7, 3,];

max = Math.max.apply(arr[0], arr);
min = Math.min.apply(arr[0], arr);

function newArr (arr){
for (var i = 0; i < arr.length; i++){
var newArr = [Math.min.apply(arr[0], arr), Math.max.apply(arr[0], arr)];

}
return newArr;
}
newArr(arr);



	
