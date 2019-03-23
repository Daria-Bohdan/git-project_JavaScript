//Exercise 2 
//Вариант №1
/*function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log( ucFirst("hello world") );


//Вариантн №2
/*var newStr = "hello world";
newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1).toLowerCase();
console.log(newStr);*/

//Вариант №3
var str = "hello world";
console.log( str.charAt(0).toUpperCase() + str.slice(1));


//Exercise 1
var arr = [27, 14, 63, 2, 129];
function BubbleSort (arr){
	for(var i = arr.length - 1; i > 0; i--){
		var counter = 0;
		for(var j = 0; j < i; j++) {
			if (arr[j] > arr[j+1]){
				var tmp = arr [j];
				arr [j] = arr [j+1];
				arr[j+1] = tmp;
				counter ++;
			}
		}
		if (counter == 0){
			break;
		}
	}
return document.write(arr);
}
BubbleSort(arr);


	


	
