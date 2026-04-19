// Function to calculate total price using variables and operators
function calculateTotal() {
    // 1. Variables
    let total = 0;
    let userName = document.getElementById("userName").value;
    let modelSelected = document.getElementsByName("model");
    let resultDiv = document.getElementById("resultArea");

    // 2. Conditional Checking (Validation)
    if (userName === "") {
        alert("Please enter your name!"); // Dialog Box
        return;
    }

    // 3. Operators & Loop (Finding selected radio button)
    for (let i = 0; i < modelSelected.length; i++) {
        if (modelSelected[i].checked) {
            total += parseInt(modelSelected[i].value);
        }
    }

    // 4. Checking Checkboxes
    if (document.getElementById("giftWrap").checked) {
        total += 10;
    }
    if (document.getElementById("warranty").checked) {
        total += 20;
    }

    // 5. JavaScript DOM Manipulation
    if (total === 0) {
        resultDiv.innerHTML = "<p style='color:red;'>Please select a watch model.</p>";
    } else {
        resultDiv.innerHTML = "<h3>Order Summary</h3>" + 
                              "<p>Customer: " + userName + "</p>" +
                              "<p><b>Total Amount: $" + total + "</b></p>";
        
        // Final Dialog Box
        alert("Calculation Complete for " + userName);
    }
}