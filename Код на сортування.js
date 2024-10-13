function MySort(arr, direction) {

if (direction !== 'asc' && direction !== 'desc') {

}
  
for (let i = 0; i < arr.length - 1; i++) {
for (let j = 0; j < arr.length - 1 - i; j++) {
        
if (direction === 'asc' && arr[j] > arr[j + 1]) {
        
[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
} else if (direction === 'desc' && arr[j] < arr[j + 1]) {
        
[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  
    return arr;
  }
  

  const numbers = [5, 9, 3, 15, 8, 2];
  

  console.log("Сортування за зростанням:", MySort(numbers, 'asc'));
  

  console.log("Сортування за спаданням:", MySort(numbers, 'desc'));
  