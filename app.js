const btn = document.getElementById('btn');
const result = document.getElementById('result');




btn.addEventListener('click', () => {
    const bill = Number(document.getElementById('bill').value);
    const tip = Number(document.getElementById('tip').value);
    calcTip(bill, tip);
    totalBill(bill, tip)
})

function calcTip(bill, tip) {
    const newTotal = Math.ceil(bill * tip / 100);
    
    return result.innerHTML = `[$${newTotal}.00]`
}

function totalBill(bill, tip) {
    const totalBill = Math.ceil(bill + (bill * tip/100))

    return document.getElementById("total_bill").innerText = `[$${totalBill}.00]`
}


// btn.addEventListener('click', calcTip())

// function calcTip() {
//     const bill = Number(document.getElementById('bill').value);
//     const tip = Number(document.getElementById('tip').value);

//     const newTotal = result.textContent = `[${(bill * tip / 100)}]`;

//     return newTotal
// }