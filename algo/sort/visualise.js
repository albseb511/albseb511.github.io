function _visualiseArray(){
    var cont = document.getElementById('array')
     var div =''
    for(let i=0;i<arr.length;i++){
        div += `<div class="array-item" style="height:${arr[i]*5}px">${arr[i]}</div>`
    }
    cont.innerHTML = div
 }