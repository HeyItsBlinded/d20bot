const buttons = document.querySelectorAll('.myButton');
const displayText = document.getElementById('displayText');
const rollHistory = [];

function rollD20() {
    const roll = Math.floor(Math.random() * 20) + 1;
    rollHistory.push({ type: 'straight', value: roll });
    return roll;
}

function rollWithAdvantage() {
    const roll1 = rollD20();
    const roll2 = rollD20();
    const result = Math.max(roll1, roll2);
    rollHistory.push({ type: 'advantage', value: result });
    return result;
}

function rollWithDisadvantage() {
    const roll1 = rollD20();
    const roll2 = rollD20();
    const result = Math.min(roll1, roll2);
    rollHistory.push({ type: 'disadvantage', value: result });
    return result;
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let randomNumber;
        if (this.id === 'button1') {
            randomNumber = rollD20();
        } else if (this.id === 'button2') {
            randomNumber = rollWithAdvantage();
        } else if (this.id === 'button3') {
            randomNumber = rollWithDisadvantage();
        }

        displayText.textContent = `${randomNumber}`;
        
        // Update roll history on the page
        const historyList = document.getElementById('historyList');
        const newRoll = document.createElement('li');
        newRoll.textContent = `${rollHistory[rollHistory.length - 1].type}, ${rollHistory[rollHistory.length - 1].value}`;
        historyList.appendChild(newRoll);
    });
});
