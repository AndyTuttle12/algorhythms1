function quickSort(arr){

	if(arr.length === 0){
		return[];
	}
	//Start left of the wall.
	var left = [];
	//init right of the wall.
	var right = [];
	//pick the pivot
	var pivot = arr[0];

	for(let i = 1; i < arr.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}	
	}
	return quickSort(left).concat(pivot, quickSort(right));
}

quickSort([7,5,1,4,6,3,65,2,45,11,0,39,9,10,98,54,36,77,67]);