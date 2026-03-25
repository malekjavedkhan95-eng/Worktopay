// User ka starting balance
let balance = 0;
const balanceDisplay = document.getElementById('userBalance');

// Task start karne ka function
function startTask(buttonElement, rewardAmount) {
    // Button ko disable karo taaki user baar baar click na kare
    buttonElement.disabled = true;
    buttonElement.innerText = "Processing...";
    buttonElement.style.backgroundColor = "#ffaa00";
    buttonElement.style.color = "#000";

    // Asli app jaisa delay (3 seconds wait) dikhane ke liye
    setTimeout(() => {
        // Balance add karo
        balance += rewardAmount;
        
        // UI update karo
        balanceDisplay.innerText = "₹" + balance;
        
        // Button ko Completed me badal do
        buttonElement.innerText = "Completed";
        buttonElement.style.backgroundColor = "#30363d";
        buttonElement.style.color = "#00ff88";

        // Chota sa alert/popup
        alert(`Congratulations! Aapne ₹${rewardAmount} earn kar liye hain.`);
    }, 3000); // 3 seconds (3000 ms) ka timer
}

// Withdraw button par click
document.getElementById('withdrawBtn').addEventListener('click', () => {
    if (balance >= 50) {
        alert(`Aapke paas ₹${balance} hain. Withdraw page open ho raha hai... (Future Update)`);
    } else {
        alert(`Aapke paas sirf ₹${balance} hain. Withdraw karne ke liye minimum ₹50 earn karein!`);
    }
});
