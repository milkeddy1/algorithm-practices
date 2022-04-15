function bubbleSort(arr) {
  for (let i = 0, l = arr.length; i < l - 1; i++) {
    for (let j = i; j < l; j++) {
      if (arr[i] > arr[j]) {
        let tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
      }
    }
  }
  console.log(arr);
}

bubbleSort([1, 2, 3, 1, 2, 6, 123, 4321]);
