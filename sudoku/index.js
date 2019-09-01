// This js is for box click and for submitting a number

function onSubmit(id){
    if(!id)
    alert('select a box first')
    // console.log('onsubmit called')
    input=document.getElementById('input').value
    if(input=='1'||input=='2'||input=='3'||input=='4'||input=='5'||input=='6'||input=='7'||input=='8'||input=='9'||input=='1'){
        sudoku[id-1]=document.getElementById(id).innerHTML=parseInt(input)
        // console.log(id-1,'pos filled with value:',sudoku)

        Hor(id)>0?console.log('error in row'):console.log('row no error')
        Ver(id)>0?console.log('error in column'):console.log('col no error')
        Grid(id)>0?console.log('error in Grid'):console.log('grid no error')
        }
    else if(input=='')
            sudoku[id-1]=document.getElementById(id).innerHTML=input
        else
            alert('wrong input')
    
    document.getElementById(parentId).lastChild.setAttribute('style','display:none')
    document.getElementById('input').value=''
    
}

function boxClick(i){
    // console.log('clicked box:',i)
    document.getElementById('submit').setAttribute('onclick',`onSubmit(${i})`)
    document.getElementById(parentId).lastChild.setAttribute('style','display:block')

}

function onFinalCheck(){
    let sumh=0, sumv=0, sumG=0;
    let err = false
    let v =0
    
    if(sudoku.reduce((a,b)=>a+b)===405)
        return 0
    
    for(let i=0,grid=0;i<9;i++){
        
        for(let j=0;j<9;j++){
            //row
            sumh+=parseInt(sudoku[i*9+j])?sudoku[i*9+j]:0;
            sumv+=parseInt(sudoku[i+9*j])?sudoku[i+9*j]:0;
            grid = sudoku[j%3+Math.floor(j/3)*9+3*(i+1-1)+(Math.ceil((i+1)/3)-1)*18]
            sumG+=parseInt(grid)?grid:0;
        }
        if(sumh!=45||sumv!=45||sumG!=45)
            v++
        console.log(sumh,sumv,sumG)
        sumG=sumh=sumv=0
        
    }

    // All conditions met, hence final check is true
    if(v===0)
        document.getElementById('ans').textContent='ANSWER IS CORRECT'
    else
        document.getElementById('ans').textContent='ANSWER IS WRONG'
    return 1
}