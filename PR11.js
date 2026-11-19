function processBill(event) {
    event.preventDefault();

    let packages = document.getElementById("packages").value;
    let cost = document.getElementById("cost").value;
    let type = document.getElementById("type").value;
    let result = document.getElementById("result");

    if (packages === "" || cost === "") {
        result.innerHTML = "Please fill all fields!";
    }
    else if (!Number.isInteger(Number(packages)) ||
             !Number.isFinite(Number(cost)) ||
             Number(packages) <= 0 || Number(cost) <= 0) {
        result.innerHTML = "Enter valid positive numbers!";
    }
    else {
        let subtotal = Number(packages) * Number(cost);
        let delivery = type === "express" ? 100 : 50;
        let total = subtotal + delivery;

        result.innerHTML =
            "<b>Bill Summary</b><br><br>" +
            "Packages: " + packages + "<br>" +
            "Package Cost: ₹" + subtotal.toFixed(2) + "<br>" +
            "Delivery Fee: ₹" + delivery + "<br>" +
            "<b>Total Bill: ₹" + total.toFixed(2) + "</b>";
    }
}

function resetForm() {
    document.getElementById("packages").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("type").value = "standard";
    document.getElementById("result").innerHTML =
        "Your bill will appear here.";
}
