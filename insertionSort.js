'use strict';

const insertion_Sort = (colors) => {
  for (let i = 1; i < colors.length; i++) {
    let x = i - 1
    let temp = colors[i]
    while (x >= 0 && colors[x] > temp) {
      colors[x + 1] = colors[x]
      x--
    }
    colors[x+1] = temp
  }
  return colors
}
console.log(insertion_Sort([0, 6, 3, 1, 5, 2, 4, 7]));