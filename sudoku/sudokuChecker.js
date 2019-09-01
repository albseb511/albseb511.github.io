// Checks for row col and grid for 1-9

// Hor checks for error in row. returns false for error
function Hor(pos){
    var err = false
    let row = Math.ceil(pos/9)
    // console.log('Row error check, row',row)
    let horCheck = false
    for(let i=0;i<9;i++){
        // console.log('val',sudoku[pos-1],sudoku[i+(row-1)*9],err,i+(row-1)*9)
        if(sudoku[pos-1]===sudoku[i+(row-1)*9])
            if(horCheck===true)
                err=true
            else
                horCheck=!horCheck
    }
    if(err){   
        // console.log('error in Row',row)
        return pos
        }
    else
        return 0
    
}

// Ver checks for errors in vertical / columns. returns false for error

function Ver(pos){
    var err = false
    let col = pos%9
    // console.log('Column error check col', col)
    let colCheck = false
    for(let i=0;i<81;i+=9){
        // console.log('val',sudoku[pos-1],sudoku[i+col-1],err,i)
        if(sudoku[pos-1]===sudoku[i+col-1])
            if(colCheck===true)
                err=true
            else
                colCheck=!colCheck
    }
    if(err){   
        // console.log('error in column',col)
        return pos
        }
    else
        return 0
    
}

// GridCheck checks for errors in grid. returns false for error

function GridCheck(rowMin,colMin,grid,row,col,pos){
    // console.log('gridCheck called',rowMin,colMin,grid)
    var gridCheck=false;
    var err = false
    for(let i=0;i<9;i++){
        
        if(sudoku[i%3+Math.floor(i/3)*9+3*(grid-1)+(Math.ceil(grid/3)-1)*18]===sudoku[pos-1])
            if(gridCheck===true)
                err=true
            else 
                gridCheck=!gridCheck
    // console.log(sudoku[i%3+Math.floor(i/3)*9+3*(grid-1)+(Math.ceil(grid/3)-1)*18],'pos = ',i%3+Math.floor(i/3)*9+3*(grid-1)+(Math.ceil(grid/3)-1)*18,sudoku[pos-1],gridCheck,err)
    }
    if(err){   
        // console.log('error in grid',grid)
        return pos
        }
    else
        return 0
    
}

// Grid checks which grid the element belongs to 
// and passes info to GridCheck for errors
// THIS WILL BE DEPRECIATED. SEPERATE OUT FUNCTIONS
function Grid(pos){
    
    let row = Math.ceil(pos/9)
    let col = pos%9
    var grid
    if(row>0&&row<4&&col>0&&col<4){
        grid=1
        return GridCheck(0,0,grid,row,col,pos)
    }
    if(row>3&&row<7&&col>0&&col<4){
        grid=4
        return GridCheck(3,0,grid,row,col,pos)
    }
    if(row>6&&row<10&&col>0&&col<4){
        grid=7
        return GridCheck(6,0,grid,row,col,pos)
    }
    if(row>0&&row<4&&col>3&&col<7){
        grid=2
        return GridCheck(0,3,grid,row,col,pos)
    }
    if(row>3&&row<7&&col>3&&col<7){
        grid=5
        return GridCheck(3,3,grid,row,col,pos)
    }
    if(row>6&&row<10&&col>3&&col<7){
        grid=8
        return GridCheck(6,3,grid,row,col,pos)
    }
    if(row>0&&row<4&&col>6&&col<10){
        grid=3
        return GridCheck(0,6,grid,row,col,pos)
    }
    if(row>3&&row<7&&col>6&&col<10){
        grid=6
        return GridCheck(3,6,grid,row,col,pos)
    }
    if(row>6&&row<10&&col>6&&col<10){
        grid=9
        return GridCheck(6,6,grid,row,col,pos)
    }
    // console.log('item is in grid',grid,'row',row,'col',col)
        
}

// Need to seperate this

function GridPos(pos){
    
    let row = Math.ceil(pos/9)
    let col = pos%9
    var grid
    if(row>0&&row<4&&col>0&&col<4){
        return grid=1
    }
    if(row>3&&row<7&&col>0&&col<4){
        return  grid=4
    }
    if(row>6&&row<10&&col>0&&col<4){
        return grid=7
    }
    if(row>0&&row<4&&col>3&&col<7){
        return grid=2
    }
    if(row>3&&row<7&&col>3&&col<7){
        return grid=5
    }
    if(row>6&&row<10&&col>3&&col<7){
        return grid=8
    }
    if(row>0&&row<4&&col>6&&col<10){
        return grid=3
    }
    if(row>3&&row<7&&col>6&&col<10){
        return grid=6
    }
    if(row>6&&row<10&&col>6&&col<10){
        return grid=9
    }
    // console.log('item is in grid',grid,'row',row,'col',col)
        
}
