function countMe(arr) {
  let result = {};

  //   while (arr.length > 0) {
  //     let current = arr.shift();

  //     console.log(arr);
  // if (!result[current]) {
  //   result[current] = 1;
  // } else {
  //   result[current]++;
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === current) {
  //     arr.splice(i, 1);
  //     i--;
  //   }
  // }
  //   }

  //   return result;
  // }

  // menggunakan for

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (!result[current]) {
      result[current] = 1;
    } else {
      result[current]++;
    }
  }

  return result;
}

console.log(countMe(["Sofyan", "Ricky", "Sofyan", "Semmi", "Semmi", "Wika"]));
// { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }

console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]));
// { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }
