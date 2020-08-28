// Create an empty array, take a look at the smallest values in each input array
// While there are still values we havnt looked at...
// if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// If the value in the first array is larger than the value in the second array, push the value in the second array into our result and move on to the next value in the second array
// Once we exhausted one array, push in all remainig values from the other array

function mergeSort (arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        result.push(arr1[i]);
        i++;
      }else{
        result.push(arr2[j])
        j++;
      }
      
    }
    while (i < arr1.length) {
      result.push(arr1[i])
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j])
      j++;
    }
    console.log(result)
  return result;
  
}
mergeSort([1, 10, 20], [3, 17, 87, 90])

// this only works with sorted arrays
