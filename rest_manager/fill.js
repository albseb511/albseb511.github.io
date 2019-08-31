function _menuBarFill(){
    console.log('filling menu bar')
    var cont = document.getElementById('menu-bar')
    var div = '<div id="menu-head">Category</div>'

    var category = ['milkshake','sandwich','juice','desserts']
    for(let i=0;i<category.length;i++){
        // console.log(i,div)
        div += `<div class='category'>${category[i].toUpperCase()}</div>`
    }
    
    cont.innerHTML = div
    // console.log(cont,div)
    
}

function _itemsFill(category){

    category = category || menu.items[0].category
    console.log('filling items '+category)
    var cont = document.getElementById('items')
    var div = '<div>'

    for(let i=0;i<menu.items.length;i++){
        // console.log(menu.items[i].category)
        if(menu.items[i].category===category)
            div += `<div><div>${menu.items[i].name}</div><div>Price:${menu.items[i].price}</div></div>`
    }

    div += '</div>'
    
    cont.innerHTML = div
    // console.log(cont,div)
}

function _TableItemsFill(){
    console.log('filling bill items')
    var cont = document.getElementById('bill-items')
    var div = '<div>Bill Summary</div><div>'

    for(let i=0;i<items.length;i++){
        // console.log(i,div)
        div += `<div><div>${items[i]}: 100</div></div>`
    }

    div += '</div>'
    
    cont.innerHTML = div
    // console.log(cont,div)
}


function _billFill(){
    console.log('filling bill total')
    var cont = document.getElementById('bill-total')
    var div = '<div>TOTAL</div><div>'

    for(let i=0;i<total.length;i++){
        // console.log(i,div)
        div += `<div><div>${total[i]}: 100</div></div>`
    }

    div += '</div>'
    
    cont.innerHTML = div
    // console.log(cont,div)
}
