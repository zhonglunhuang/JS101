// 程式碼寫這裡
//需求1.輸入文字後按新增，下方會出現代辦事項，且會清除輸入值
//需求1.1 按enter也會新增代辦事項
//需求2點擊X會清除該代辦事項

const ul = document.querySelector(".todo-list")
const btn = document.querySelector("#addBtn")

function addTask () {
    let input = document.querySelector("#taskInput")
    let newLi = document.createElement("li")
    let newSpan = document.createElement("span")
    let newXBtn = document.createElement("button")
    newLi.className = "todo-item"
    newSpan.className = "item"
    newSpan.textContent = input.value
    newXBtn.className = "closeBtn"
    newXBtn.textContent = "X"
    newLi.appendChild(newSpan)
    newLi.appendChild(newXBtn)
    ul.appendChild(newLi)
    input.value = ""
    // console.log(newLi);
}

btn.addEventListener("click", () => {
    addTask()
})

document.querySelector("#taskInput").addEventListener("keydown", (e) =>{
    if (e.keyCode == 13) {
        addTask()
    }
} )

document.querySelector(".todo-list").addEventListener("click",(event) => {
    const target = event.target
    if (target.className == "closeBtn") {
        target.parentNode.remove()
    }
})
