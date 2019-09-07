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
    

    async function _insertionSort(){
        var cont = document.getElementsByClassName('array-item')
           for(let i=0;i<arr.length;i++)
            {
                let min =arr[i]
                let pos = i
                await sleep(speed)
                cont[i].style.background = 'white'
                await sleep(speed)
                for(let j=i+1;j<arr.length;j++){
                    cont[j].style.background = 'green'
                    await sleep(speed)
                    if(min>arr[j]){
                        min = arr[j]
                        pos = j
                        cont[j].style.background = 'yellow'
                        await sleep(speed)
                    }
                }
                cont[pos].style.background = 'white'
                await sleep(speed)
                let temp = arr[i]
                arr[i] = arr[pos]
                arr[pos] = temp
                await sleep(speed)
               _visualiseArray()
               cont[pos].style.background = 'white'
               cont[i].style.background = 'white'
               await sleep(2*speed)
               cont[pos].style.background = 'blue'
               cont[i].style.background = 'blue'
        }
    }

     function __merge(left,right,array=[]){
        // console.log('merging',left,right)
        // await sleep(speed)
        var i = 0
        var j = 0
        while(i<left.length&&j<right.length){
            if(left[i]<right[j]){
                array.push(left[i++])
                // await sleep(speed)
                // console.log(array,i-1)
            }
            else{
                 array.push(right[j++])
                //  console.log(array,j-1)
            }
        }
        // await sleep(speed)
        // console.log(`left ${left} -- right ${right} - rray ${array}`)
        return array.concat(left.slice(i),right.slice(j))
    }

    function _mergeSort(array){
        // alert('sorry')
        _visualiseArray()
        // alert('sorry')
        if(array.length<2)
            return array
        // console.log('merge sort start')
        var cont = document.getElementsByClassName('array-item')
        let i = 0;
        let m = array.length%2===0?array.length/2:(array.length-1)/2;
        let k = array.length - 1;
        
        const left = array.filter((a,i)=>i<m?a:null)
        const right = array.filter((a,i)=>i>=m?a:null)

        // console.log(left,right)
        // alert('sorry')
        _visualiseArray()
        // alert('sorry')
        // console.log('recursion',array)
        return __merge(_mergeSort(left),_mergeSort(right))
        
        // while
        // console.log('array is',arr)
    }

    function callMerge(){
        // console.log('before',arr)
        arr = _mergeSort(arr)
        // console.log('final',arr)
        // alert('sorry')
        _visualiseArray()

        
    }
