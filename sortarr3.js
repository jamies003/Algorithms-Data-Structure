// Start looping from the end of an array to the beginning with a variable called I
// Start an inner loop with A variable called j from the beginning until i -1
// if arr[j] is greater than arr[j+1], swap those two values
// Retun the sorted array

function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j+1]) {
        // swapping process
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

  }
  return arr;
}
bubbleSort([2, 15, 7, 19, 13, 17]);

