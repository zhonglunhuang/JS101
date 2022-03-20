// 程式碼寫這裡
//需求1.輸入文字後按新增，下方會出現代辦事項，且會清除輸入值
//需求2，點擊X會清除該代辦事項

const ul = document.querySelector(".todo-list")
const btn = document.querySelector("#addBtn")
const xBtn = document.querySelectorAll(".closeBtn")

function addToDo () {
    let input = document.querySelector("#taskInput")   //為何這邊將input宣告為(#taskInput).value就不能重新指定input的值?
    const newItem = document.createElement("li")
    const newSpan = document.createElement("span")
    const newButton = document.createElement("button")
    newItem.className = "todo-item"
    newSpan.className = "item"
    newSpan.textContent = input.value
    newButton.className = "closeBtn"
    newButton.textContent = "X"
    ul.appendChild(newItem)
    newItem.appendChild(newSpan)
    newItem.appendChild(newButton)
    console.log(input);
    input.value = ""
}

btn.addEventListener("click", () => {
    addToDo();
})

document.querySelector("#taskInput").addEventListener("keydown", (e) => {      //監聽鍵盤按鍵
   if (e.code == "Enter") {
       addToDo();
   }
})
//事件代理
document.querySelector(".todo-list").addEventListener("click", (event) =>{
    const target = event.target; //指向最初觸發事件的 DOM 物件
    if (target.classList.contains('closeBtn')) {
        target.parentNode.remove() //把父層刪除
    } 
})