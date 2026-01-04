"use strict";

let i = 0
for (i = 0; i < 6; i++) {
  const num = Math.floor(Math.random() * 45) + 1
  console.log(num)
  if (num > 30)
    break
}

console.log(i)