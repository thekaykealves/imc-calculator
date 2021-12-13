"use strict";

let inputAge = document.getElementById("age");
let inputHeight = document.getElementById("height");
let inputWeight = document.getElementById("weight");

let result = document.getElementById("result");

let imc = null;

function calculate() {
    const height = inputHeight.value;
    const weight = inputWeight.value;

    imc = weight / (height * height);

    setTimeout(() => {
        increaseSize();
        showResult();
        showButton();
    }, 1000);
}

function increaseSize() {
    const container = document.querySelector(".container");

    if(container.style.height == "350px"){
        container.style.height = "500px"
    }
}

function showButton() {
    const btnClean = document.getElementById("btnClean")
    btnClean.classList.remove("toggle")
}

function clean() {
    document.location.reload();
}

function showResult() {
    result.innerHTML = `<div>IMC = ${imc.toFixed(2)}</div>`;

    if(imc < 17) {
        result.innerHTML += `<p class="situation">Situação: Muito abaixo do peso</p>`;
        result.innerHTML += `<p> <span style="color: red">(Magreza Grave)</span></p>`;
    }

    if(imc >= 17 && imc <= 18.5){
        result.innerHTML += `<p class="situation">Situação: Abaixo do peso</p>`;
        result.innerHTML += `<p> <span style="color: orange">(Magreza Leve)</p>`;
    }

    if(imc >= 18.5 && imc <= 24.9) {
        result.innerHTML += `<p class="situation">Situação: Peso normal</p>`;
        result.innerHTML += `<p> <span style="color: #88E0EF">(Eutrófico)</span></p>`;
    }

    if(imc >= 25 && imc <= 29.9) {
        result.innerHTML += `<p class="situation">Situação: Acima do peso</p>`;
        result.innerHTML += `<p> <span style="color: orange">(Sobrepeso)</p>`;
    }

    if(imc >= 30 && imc <= 34.9) {
        result.innerHTML += `<p class="situation">Situação: Obesidade I</p>`;
        result.innerHTML += `<p> <span style="color: red">(Obesidade I)</span></p>`;
    }

    if(imc >= 35 && imc <= 39.9) {
        result.innerHTML += `<p class="situation">Situação: Obesidade II</p>`;
        result.innerHTML += `<p> <span style="color: red">(Obesidade Severa)</span></p>`;
    }

    if(imc >= 40) {
        result.innerHTML += `<p class="situation">Situação: Obesidade III</p>`;
        result.innerHTML += `<p> <span style="color: red">(Obesidade Mórbida)</span></p>`;
    }
}