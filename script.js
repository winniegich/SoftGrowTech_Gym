function calculateBMI(){

let height=document.getElementById("height").value/100
let weight=document.getElementById("weight").value
let bmi=(weight/(height*height)).toFixed(2)
document.getElementById("result").innerText="Your BMI: "+bmi
}