students.map(student => {
    var el = document.createElement("li")
    console.log(student)
    el.className = "student"
    el.innerHTML = `<h2 id="profilName">${student.name + " " +student.surname}</h2><p id="profilSurname">${student.course}</p><img id="profilImage" src='${student.image}'/>`
    document.getElementById('studentList').appendChild(el)
})