"use strict"

let data
console.log(`value = ${data}, type = ${typeof data}`)
console.log()
data = 1000
console.log(`value = ${data}, type = ${typeof data}`)
console.log("value = " +data +", type = "+ typeof data)

console.log()

const gundam = {
    name: "건담",
    model: "rx-78-2",
    pilot: "아무도 레이",
}
console.log(`${gundam.name} (${typeof gundam.name})`)
console.log(`${gundam['name']} (${typeof gundam['name']})`)

for (const property in gundam)
    console.log(`${property} ${gundam[property]} : (${typeof gundam[property]})`)

console.log()

const gundaem = {name: "건댐", model: "rx-78-3"}
const guntank = {name: "건탱크", model: "rx-75"}
const zaku2 = {name: "자쿠II", model: "MS-06F"}

for (const property in zaku2)
    console.log(`${property} ${zaku2[property]} : (${typeof zaku2[property]})`)

console.log()

const guntdami = new Mechanic("건담이", "rx-78-4")
const guntanki = new Mechanic("건탱키", "rx-76")
const zaku2i = new Mechanic("자쿠투이", "MS-06F2")

function Mechanic(name, model) {
    this.name = name
    this.model = model
}

for (const property in guntanki)
    console.log(`${property} ${guntanki[property]} : (${typeof guntanki[property]})`)

console.log()

class Mechanic {
  constructor(name, model) {
    this.name = name
    this.model = model
  }
}

const mechanics = [ 
  new Mechanic("건담", "RX-78-2"),
  new Mechanic("건탱크", "RX-75"),
  new Mechanic("자쿠 II", "MS-06F")
]

console.log(mechanics)

for (let i = 0; i < mechanics.length; i++) {
  console.log(mechanics[i].model)
}

mechanics.pop()
console.log(mechanics)

mechanics.push(new Mechanic("릭돔", "MS-09R"))
console.log(mechanics)

mechanics.unshift(new Mechanic("짐", "RGM-79 GM"))
console.log(mechanics)

mechanics.shift()
console.log(mechanics)

mechanics.splice(2, 1, new Mechanic("즈고크", "MSM-07"))
console.log(mechanics)

const list = mechanics.slice(2)
console.log(list)
