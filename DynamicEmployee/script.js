const employeeForm = document.getElementById("employeeForm");

const employeeName = document.getElementById("employeeName");

const employeeRole = document.getElementById("employeeRole");

const employeeContainer = document.getElementById("employeeContainer");


employeeForm.addEventListener("submit", function(event) {

    event.preventDefault();
    const name = employeeName.value.trim();

    const role = employeeRole.value.trim();

    if (name === "" || role === "") {

        alert("Please enter employee name and role.");

        return;
    }

    const employeeCard = document.createElement("div");

    employeeCard.classList.add("employee-card");


    employeeCard.innerHTML = `
        <h2>Employee Name: ${name}</h2>
        <p>Employee Role: ${role}</p>
    `;


    employeeContainer.appendChild(employeeCard);


    employeeName.value = "";

    employeeRole.value = "";


    employeeName.focus();

});