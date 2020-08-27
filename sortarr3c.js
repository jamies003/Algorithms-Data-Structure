// Start looping from the end of an array to the beginning with a variable called I
// Start an inner loop with A variable called j from the beginning until i -1
// if arr[j] is greater than arr[j+1], swap those two values
// Retun the sorted array
// * Optimized with noSwap

function bubbleSort (arr) {

  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i-1; j++) {

      console.log(arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j+1]) {
        // swapping process
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps)break;
    console.log("Is IT Completed?"); 
  }
  return arr;
}
bubbleSort([9, 5, 6, ,7, 8, 10, 11]);

