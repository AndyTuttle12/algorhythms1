function bubbleSort(items){
	var length = items.length;
	for(let i = 0; i < length; i++){
		var sorted = true;
		for(let j = 0; j < (length - (1+i)); j++){
			if(items[j] > items[j+1]){
				sorted = false;
				var temp = items[j];
				items[j] = items[j+1];
				items[j+1] = temp;
			}
		}
		if(sorted){
			break;
		}
	}
	console.log(items);
}

bubbleSort([7,8,1,9,2,5,3,4,6,0]);