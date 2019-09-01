function createGrid(a,b,pId, val){

    var cont = document.getElementById(`${pId}`)
    // console.log(cont)
    trueVar = `class='noEdit'`
    
    for(let i=0;i<a*b;i++)
    {
        boxClick = `onclick=boxClick(${i+1})`
        var element = document.createElement('div')
        element.innerHTML = `<button id='${i+1}' ${val[i]?trueVar:boxClick}>${val[i]?val[i]:''}</button>`;
        // console.log(element.innerHTML)
        cont.appendChild(element);
    }
    var input = document.createElement('div')
    input.className='input'
    input.innerHTML = `<input id='input'  maxlength='1'/>
                        <button id='submit' onclick='onSubmit()'>Submit</button>`

    cont.appendChild(input)
}

var parentId = 'sudoku'
var sudoku = new Array(81).fill('')

sudoku[3]=7
sudoku[9]=1
sudoku[21]=4
sudoku[22]=3
sudoku[24]=2
sudoku[35]=6
sudoku[39]=5
sudoku[41]=9
sudoku[51]=4
sudoku[52]=1
sudoku[53]=8
sudoku[58]=8
sudoku[59]=1
sudoku[65]=2
sudoku[70]=5
sudoku[73]=4
sudoku[80]=3


createGrid(9,9,parentId,sudoku)

