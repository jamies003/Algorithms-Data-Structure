function compareByLen (str1, str2) {
  return str1.length - str2.length;
  
}

["Functions", "Algorithms", "Arrays", "Data"].sort(compareByLen);