// let arr = ["Muhammad", "Azamat", "Azim", "Malika"]

// let name = prompt("Ваша имя")

// let ind = null
// if (arr.indexOf(name) != -1) {
//     ind = arr.indexOf(name)
//     arr.splice(ind, 1)
//     alert("goodbye" + name)
//     alert("тут остались только" + " " + arr)
// } else {
//     alert("нету такой имини")
//     alert("в списке только" + " " + arr)
// }


let arr2 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

if (arr2.filter(Number).length > 5) {
    alert("good")
} else {
    alert("bad")
}




// Тест на нахождение ключей
// Сложить все цифры из массива с объектами в переменную `total`

let a = [
    [{ a: { price: 20 } }],
    [{ a: { price: 35 } }],
    [{ a: { price: 44 } }]
]
let total = a[0][0].a.price + a[1][0].a.price + a[2][0].a.price

alert(total)