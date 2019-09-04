
// filling top bar info
function _tabBar(){
    var cont = document.getElementById('container')
    var div ='<div class="navbar">'
    div += `    <div>Array Size: <input type='number' id='size'></input></div>
                <div>Speed (ms): <input type='number' id='speed'></input> </div>
                <button onclick='_changeSettings()'>Save Changes</button>
                <button onclick='_resetArray()'>Reset Array</button>
                <br>
                <button onclick='_bubble()'>Sort by By Bubble sort</button>
                <button onclick='_selectionSort()'>Sort by By Insertion sort</button>
            <div></div>
            <div></div>`
    

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
    
    for(let i=0;i<size;i++){
        arr.push(__random(min,max))
    }
    console.log(arr)
}

function _resetArray(){
    arr = []
    _arrayFill()
    _visualiseArray()
}

function _changeSettings(){
    if(document.getElementById('size').value>1)
        size = document.getElementById('size').value
    arr = []
    console.log('size is',arr)
    if(document.getElementById('speed').value>0)
        speed = document.getElementById('speed').value
    _arrayFill()
    _visualiseArray()
}