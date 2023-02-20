/*eslint-env browser*/
//Samruddhi Somwanshi
//Red ID: 828286661

//Loading an Initial Set of Employees
let EmpArray = [[78789078, "Ben Dover", 1212, "ben.d@gmail.com", "Administrative"],
    [57469078, "Penny Black", 9089, "pennyblack123@gmail.com", "Executive"],
    [35468978, "Emma Grate", 4545, "e.grate@gmail.com", "Quality Assurance"],
    [89563467, "Clyde Stale", 6548, "staleclyde08@gmail.com", "Engineering"],
    [23567846, "Cody Ramirez", 3080, "cr.3050@gmail.com", "Sales"]]

//Storing Data
if (localStorage.getItem('employees') !== null) {
    EmpArray = JSON.parse(localStorage.getItem('employees'))
}

let form = document.getElementById('addForm')
let employees = document.getElementById('empTable')
let employeeCount = document.getElementById('empCount')
Gridbuilding()

// Adding Data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let empID = parseInt(document.getElementById('id').value)
    let empName = document.getElementById('name').value
    let empExt = parseInt(document.getElementById('extension').value)
    let empEmail = document.getElementById('email').value
    let empDept = document.getElementById('department').value
    let arrEmployee = [empID, empName, empExt, empEmail, empDept]
    EmpArray.push(arrEmployee)
    Gridbuilding()
    form.reset()
    form.id.focus()
})

//Removing Data
employees.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure, do you want to delete the record? This process cannot be undone.')) {
            let newRow = e.target.parentNode.parentNode.rowIndex
            EmpArray.splice(newRow - 1, 1)
            Gridbuilding()
        }
    }
})

// Building the Grid
function Gridbuilding() {
    employees.lastElementChild.remove()
    let tbody = document.createElement('tbody')
    for (let employee of EmpArray) {
        tbody.innerHTML +=
        `<tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `}
employees.appendChild(tbody);
employeeCount.value = `(${EmpArray.length})`

//Storing Data
localStorage.setItem('employees', JSON.stringify(EmpArray))
}
