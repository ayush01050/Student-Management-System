
let form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let roll = document.getElementById("roll").value;

    let email = document.getElementById("email").value;

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    let course = document.getElementById("course").value;

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = roll;
    row.insertCell(2).innerHTML = email;
    row.insertCell(3).innerHTML = gender;
    row.insertCell(4).innerHTML = course;

    let cell = row.insertCell(5);

    let btn = document.createElement("button");

    btn.innerHTML = "Delete";

    btn.onclick = function() {
        row.remove();
    };

    cell.appendChild(btn);

    form.reset();

});
