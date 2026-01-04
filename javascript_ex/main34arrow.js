"use strict"

function printSuccess() {
    console.log("성공")
}

// // Call Back
// console.log("시작")
// setTimeout(printSuccess, 1000)
// console.log("끝")

// // Anonymous Function
// console.log("시작") 
// setTimeout(function () {
//   console.log("성공")  
// }, 1000)
// console.log("끝") 

// // Arrow Function
// console.log(console.log("성공"))

// console.log("시작")
// setTimeout(() => { console.log("성공") }, 1000)
// console.log("끝") 

// // 매개 변수 1개
// function printMessage(msg) { console.log(msg) }
// const print = printMessage
// print("성공")

// // 매매변수 1개 - 동일 기능
// const print = msg => { console.log(msg) }
// print("성공")

// // 객체 반환시
// const getGundam = () => ({
//   name: "건담",
//   model: "RX-78-2"
// })
// console.log(getGundam())

// 나머지 (...) 매개변수
function printMessages(title, ...arg) {
  console.log(`<${title}>`)
//   for (let i = 0; i < arg.length; i++)
    // console.log(arg[i])
//   for (let item of arg)
    // console.log(item)
  arg.forEach(mech => console.log(mech))
}
printMessages("메카닉", "건담", "건탱크", "자쿠II")

// forEach Index
const character = [
  { name: "호두", element: "불" },
  { name: "행추", element: "물" },
  { name: "베넷", element: "불" },
  { name: "카즈하", element: "바람" },
  { name: "유라", element: "얼음" },
  { name: "라이덴", element: "번개" },
  { name: "종려", element: "바위" },
  { name: "요이미야", element: "불" },
  { name: "이토", element: "바위" },
  { name: "디오나", element: "얼음" },
  { name: "설탕", element: "바람" },
]

character.forEach((char, i) => { console.log(`${i} : ${char.name}`) })

// map
const names = character.map((char, i) => ({ index: i, name: char.name }))
console.log(names)

// find
const anemoFirst = character.find(char => char.element === "바람")
console.log(anemoFirst)

// filter
const pyro = character.filter(char => char.element === "불")
console.log(pyro)

// reduce
const pyroCount = character.reduce((count, char) => {
  if (char.element === "불")
    return count + 1
  else
    return count
}, 0)
console.log(pyroCount)

// every
const anemo = character.every(char => char.element === "불")
console.log(anemo)

// some
const pyros = character.some(char => char.element === "불")
console.log(pyros)

