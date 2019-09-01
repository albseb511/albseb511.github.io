function __swap(a,b){
    return [b,a]
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function _bubble(){
    var cont = document.getElementsByClassName('array-item')
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            var swap= []
            cont[j].style.background = 'green'
            if(arr[j]>arr[j+1])
            {
                cont[j].style.background = 'yellow'
                swap = __swap(arr[j],arr[j+1])
                console.log(swap)
                arr[j] = swap[0]
                arr[j+1] = swap[1]
                console.log(swap,arr,j,i)
                await sleep(1500)
                _visualiseArray()
            }
            else null;
            
        }
    }
}

