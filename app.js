const btn = document.getElementById('btn');



btn.addEventListener('click', () => {
    const bill = Number(document.getElementById('bill').value);
    const tip = Number(document.getElementById('tip').value)
})

function calcTip(bill, tip) {
    const NewTotal = document.getElementById('result').textContent = `[${(bill * tip / 100)}]`
    return NewTotal;
}