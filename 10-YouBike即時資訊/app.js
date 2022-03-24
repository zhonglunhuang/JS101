// 程式碼寫這裡
const API =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
const ul = document.querySelector(".siteList")
const form = document.querySelector("#searchForm")

async function getData(API) {     //call api拿資料並解析
    let rawData = await fetch(API)
    let jsonData =  rawData.json()
    return jsonData
}

async function filterData(data) {    //建立一個新陣列，將符合搜尋內容的資料組成一個object塞進去
  const input = document.querySelector("#searchKeyword")
  const serchText = input.value.trim() //清除搜尋欄位多餘的空白
  const newData = await data //等待資料回傳
  const result = [] 
  newData.forEach((e) => {
      if (e.ar.includes(serchText)) {
        result.push({name:e.sna.replace("YouBike2.0_",""),num:e.bemp,address:e.ar})
      }
  });
  input.value = ""    // 清空搜尋欄位
  return result
}


async function updateList(result) {   //清除舊有搜尋結果，並將上述篩選結果塞入ul裡面
  while(ul.lastChild){            
    ul.removeChild(ul.lastChild)
  } 
  result = await result
  await result.forEach((e) => {
    let li = `<li class="list-group-item fs-5">
    <i class="fas fa-bicycle"></i>
    ${e.name} (${e.num})<br>
    <small class="text-muted">${e.address}</small>
    </li>`
    console.log(li);
    ul.insertAdjacentHTML("afterbegin",li)
  })

}

form.addEventListener('submit',(event) => {   //監聽form標籤的submit事件，並依序執行上述三個function
  event.preventDefault()
  updateList(filterData(getData(API)))
})



