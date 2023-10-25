
const limitinput=document.getElementById("limit");
const maginput=document.getElementById("magical");
var addBtn = document.getElementById("addbtn");
var display = document.getElementById("options-list");
var inputArr = [];
addBtn.addEventListener("click", addAnddisplay);

function addAnddisplay() {

    inputArr.push(maginput.value);

    display.textContent = inputArr;   
}

function sum (factors, limit) {
    const uniqueMultiples = new Set();
    let total = 0;
    for (const factor of factors){
        const maxMultiple = (limit-1 - (limit-1) % factor);
        for (let currentMultiple = maxMultiple; currentMultiple >= factor; currentMultiple -= factor){
            if (!uniqueMultiples.has(currentMultiple)){
            uniqueMultiples.add(currentMultiple);
            total += currentMultiple;
            }
        }
    }
    return total;}

const btn = document
            .getElementById("btn")
            .addEventListener("click", function () {
                document.getElementById("output").textContent =
                    sum(inputArr,parseInt(limitinput.value, 10));
                // console.log(sum(magicalitem,limit));
            });