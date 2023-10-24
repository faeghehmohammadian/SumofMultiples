
const limitinput=document.getElementById("limit");
const magicalinput1=document.getElementById("magical1");
const magicalinput2=document.getElementById("magical2");

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
                    sum([parseInt(magicalinput1.value, 10),parseInt(magicalinput2.value, 10)],parseInt(limitinput.value, 10));
                // console.log(sum(magicalitem,limit));
            });