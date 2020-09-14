const studentList = document.getElementById('studentList')
var currentList = []

function printStudentList(students) {
    studentList.innerHTML = ""
    students.map(student => {
        var el = document.createElement("li")
        el.className = "student"
        el.innerHTML = `<h2 id="profilName">${student.name + " " +student.surname}</h2><p id="profilSurname">${student.course}</p><img id="profilImage" src='${student.image}'/>`
        studentList.appendChild(el)
    })
}

document.getElementById('searchBarName').addEventListener("keyup", e => {
    var student = []
    for(let stu of students) {
        if((stu.name.toLowerCase() + " " +stu.surname.toLowerCase()).includes(e.target.value.toLowerCase())) {
            student.push(stu)
        }
    }
    printStudentList(student)
})

document.getElementById('comboCourse').addEventListener("change", e => {
    let v = e.target.value
    if (v === "Tous") {
        currentList = students
    }
    else {
        for (let student of students) {
            if (student.course === v) {
                currentList.push(student)
            }
        }
    }
    printStudentList(currentList)
})

printStudentList(students)