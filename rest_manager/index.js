var items = ['Milkshake','Sandwich','Chai','Milkshake','Sandwich','Chai','Milkshake','Sandwich','Chai','Milkshake','Sandwich','Chai','Milkshake','Sandwich','Chai']
var total = ['Subtotal','Packaging','Taxes @ 5%','Total']

function _menuBarFill(){
    console.log('filling menu bar')
    var cont = document.getElementById('menu-bar')
    var div = '<div id="menu-head">Category</div>'

    var menu = ['Milkshake','Sandwich','Juice','Desserts']
    for(let i=0;i<menu.length;i++){
        // console.log(i,div)
        div += `<div>${menu[i]}</div>`
    }
    
    cont.innerHTML = div
    // console.log(cont,div)
    
}

function _itemsFill(){
    console.log('filling items')
    var cont = document.getElementById('items')
    var div = '<div>'

    for(let i=0;i<items.length;i++){
        // console.log(i,div)
        div += `<div><div>${items[i]}</div><div>Price:</div></div>`
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
        console.log(i,div)
        div += `<div><div>${total[i]}: 100</div></div>`
    }

    div += '</div>'
    
    cont.innerHTML = div
    console.log(cont,div)
}



_menuBarFill()
_itemsFill()
_TableItemsFill()
_billFill()