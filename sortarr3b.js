// Start looping from the end of an array to the beginning with a variable called I
// Start an inner loop with A variable called j from the beginning until i -1
// if arr[j] is greater than arr[j+1], swap those two values
// Retun the sorted array
// *This method uses the arrow function

function bubbleSort (arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i-1; j++) {

      console.log(arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j+1]) {
        // swapping process
        swap(arr, j, j +1);
      }
    }
    console.log("Checking Conditions");
  }
  return arr;
}
bubbleSort([2, 15, 7, 19, 13, 17]);

