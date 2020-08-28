// break up the array into halves until you have the arrays that are empty or have one element
// Once you have the smallest sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged(and sorted!)array


function mergeSort (arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return mergeSort (left, right);
  
}
mergeSort([11, 27, 75, 66, 72, 1, 9])