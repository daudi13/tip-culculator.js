const btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    const bill = Number(document.getElementById('bill').value);
    const tip = Number(document.getElementById('tip').value)
    
    calcTip(bill, tip);
})

function calcTip(bill, tip) {
    console.log(bill * tip/100)
}