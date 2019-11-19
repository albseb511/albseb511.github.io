var students = {}
var tableData = []

function addStudent(){
    var name = document.getElementById("name").value
    var grade = document.getElementById("grade").value
    var sci = document.getElementById("sci").value
    var math = document.getElementById("math").value
    var eng = document.getElementById("eng").value
    var hist = document.getElementById("hist").value
    var geo = document.getElementById("geo").value
    var details = {
        name: name,
        grade: grade,
        sci:sci,
        math:math,
        eng:eng,
        hist:hist,
        geo:geo
    }
    console.log(details)
    if(!students[grade]){
        console.log('executing if')
        students[grade] = []
        students[grade].push(details)
    }
    else{
        console.log('executing else')
        students[grade].push(details)
    }
    console.log(students)
}

function filterTable(){
    var gradeFilter = document.getElementById("gradeTable").value 
    tableData = students[gradeFilter]
    createTable(tableData)
}

function createTable(data){
    console.log('creating table for',data)
    var cont = document.getElementById("result")
    cont.innerHTML = ''
    for(var i=0; i<data.length; i++){
        var div = document.createElement("div")
        div.setAttribute("class","flex")
        var sum = 0
        for(key in data[i]){
            if(key==='grade')
                continue
            var child = document.createElement("div")
            child.textContent = data[i][key]
            div.appendChild(child)
            if(key!='name'){
                sum+=parseInt(data[i][key])
            }
        }
        var avg = document.createElement("div")
        avg.textContent = sum/5
        div.appendChild(avg)

        var total = document.createElement("div")
        total.textContent = sum
        div.appendChild(total)
        cont.appendChild(div)
    }
}


function resetForm(){
    document.getElementById("name").value = ''
    document.getElementById("grade").value = '12'
    document.getElementById("sci").value = ''
    document.getElementById("math").value = ''
    document.getElementById("eng").value = ''
    document.getElementById("hist").value = ''
    document.getElementById("geo").value = ''
}

var addBtn = document.getElementById("submit")
var filter = document.getElementById("gradeTable")

addBtn.addEventListener("click",function(){
    console.log('submitting')
    addStudent()
    resetForm()
    filterTable()
})

filter.addEventListener("click",function(){
    console.log('filtering')
    filterTable()
})

// window.addEventListener("resize",function(){
//     cin
//     if(window.innerWidth<600){
//         head = document.getElementById("heading")
//         for(var i=0; i<head.length ; i++){
//             console.log('hey, updating',i)
//             head[i].textContent = head[i].textContent.slice(0,4)
//         }
//     }
// })