const btn = document.getElementById('btn');
const result = document.getElementById('result');




btn.addEventListener('click', () => {
    const bill = Number(document.getElementById('bill').value);
    const tip = Number(document.getElementById('tip').value);
    calcTip(bill, tip);
})

function calcTip(bill, tip) {
    const newTotal = document.getElementById('result').textContent = `[${(bill * tip / 100)}]`;

    console.log(result.textContent = newTotal)
}



// btn.addEventListener('click', calcTip())

// function calcTip() {
//     const bill = Number(document.getElementById('bill').value);
//     const tip = Number(document.getElementById('tip').value);

//     const newTotal = result.textContent = `[${(bill * tip / 100)}]`;

//     return newTotal
// }