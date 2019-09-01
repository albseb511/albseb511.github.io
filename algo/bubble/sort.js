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
            await sleep(500)
            cont[j+1].style.background = cont[j].style.background = 'green'
            await sleep(500)
            if(arr[j]>arr[j+1])
            {
                cont[j+1].style.background = cont[j].style.background = 'yellow'
                swap = __swap(arr[j],arr[j+1])
                console.log(swap)
                arr[j] = swap[0]
                arr[j+1] = swap[1]
                console.log(swap,arr,j,i)
                await sleep(500)
                _visualiseArray()
            }
            else null;
            
        }
    }
    _visualiseArray()
}

