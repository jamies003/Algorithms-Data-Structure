function ArrSort (arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  
}
[6, 4, 7, 15, 10].sort(ArrSort)