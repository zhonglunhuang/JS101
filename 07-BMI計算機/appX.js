// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方

document.addEventListener("DOMContentLoaded", () => {
  const cal = document.querySelector("button")
  const height = document.querySelector("#bodyHeight")
  const weight = document.querySelector("#bodyWeight")
  const bmi = document.querySelector("#resultText")

  function BMICal() {
    result = weight.value / Math.pow(height.value / 100, 2)
    // return result
    bmi.textContent = result.toFixed(2)
  }
  cal.addEventListener("click", BMICal)
})

// document.addEventListener("DOMContentLoaded",()=>{
//     var height = document.querySelector("#bodyHeight")
//     var weight = document.querySelector("#bodyWeight")
//     const btn = document.querySelector("button")

//     btn.addEventListener("click",function(){
//         console.log(height.value, weight.value);
//     })

// })
