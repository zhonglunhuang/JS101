// 程式碼寫在這裡

document.addEventListener("DOMContentLoaded", function () {
    const plus = document.querySelector("#plus")
    const minus = document.querySelector("#minus")
    let counter = document.querySelector("#counter")
    plus.onclick = function () {
        counter.value = Number(counter.value) + 1
    }
    minus.onclick = function () {
        if (counter.value >= 1){
        counter.value = Number(counter.value) - 1
        }
    }
    console.log(counter);
})

