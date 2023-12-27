// 01
// setTimeout(() => {
//     console.log("Hello NodeJS")
// }, 2000)

// 02
const arr = [10, 20, 30, 40, 50];

function printArrayAsync(arr, index) {
  if (index < arr.length) {
    setTimeout(() => {
      console.log(arr[index]);
      printArrayAsync(arr, index + 1);
    }, 1000);
  }
}

printArrayAsync(arr, 0);
