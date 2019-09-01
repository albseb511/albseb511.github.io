
// filling top bar info
function _tabBar(){
    var cont = document.getElementById('container')
    var div ='<div class="navbar">'
    div += '<div>Sort by By Bubble sort</div><div></div><div></div>'

    div += '</div>'
    cont.innerHTML = div
}

// random generator
function __random(min,max){  
    min=min-1
    return Math.ceil(Math.random() * (+max - +min)) + +min
}

// filling array
function _arrayFill(){
    
    for(let i=0;i<arr.length;i++){
        arr[i] = __random(min,max)
    }
    console.log(arr)
}