// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方

document.addEventListener("DOMContentLoaded",() => {
  const height = document.querySelector("#bodyHeight")
  const weight = document.querySelector("#bodyWeight")
  const bmi = document.querySelector("#resultText")

  function BMIcal () {
    const result =  weight.value / Math.pow(height.value/100,2)
    bmi.textContent = result.toFixed(2)
    console.log(result);
  }

  document.querySelector("button").addEventListener("click", BMIcal)

})