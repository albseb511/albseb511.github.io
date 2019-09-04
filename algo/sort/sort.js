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
            await sleep(speed)
            cont[j+1].style.background = cont[j].style.background = 'green'
            await sleep(speed)
            if(arr[j]>arr[j+1])
            {
                cont[j+1].style.background = cont[j].style.background = 'yellow'
                swap = __swap(arr[j],arr[j+1])
                console.log(swap)
                arr[j] = swap[0]
                arr[j+1] = swap[1]
                console.log(swap,arr,j,i)
                await sleep(speed)
                _visualiseArray()
            }
            else null;
            
        }
    }
    _visualiseArray()
}



async function _selectionSort(){
    var cont = document.getElementsByClassName('array-item')
       for(let i=1;i<arr.length;i++)
        {
            let key = arr[i]
            let j = i-1
            await sleep(speed)
            cont[i].style.background = 'green'
            while(j>=0 && arr[j]>key){
                await sleep(speed)
                cont[j].style.background = 'yellow'  
                await sleep(speed)
                arr[j+1] = arr[j]
                j = j - 1
                // await sleep(500)
            }
            
            arr[j + 1] = key;
            await sleep(speed)
            _visualiseArray() 
          
          }
          _visualiseArray()
    }
    


