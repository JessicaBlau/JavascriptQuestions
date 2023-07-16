var array1 = [[5, "fff"], [14, "ggg"], [12, "aaa"], [25, "ddd"], [13, "eee"]];

// 1. Search for element with first index 12 and print the second index
var foundElement = array1.find(item => item[0] === 12);
if (foundElement) {
  console.log(foundElement[1]);
} else {
  console.log("Element not found");
}

// 2. Order the array by distinct first elements
var distinctArray = [...new Map(array1.map(item => [item[0], item])).values()];
console.log(distinctArray);
