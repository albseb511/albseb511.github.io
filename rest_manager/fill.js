function _menuBarFill(){
    console.log('filling menu bar')
    var cont = document.getElementById('menu-bar')
    var div = '<div id="menu-head">Category</div>'

    var category = ['milkshake','sandwich','juice','desserts']
    for(let i=0;i<category.length;i++){
        // console.log(i,div)
        div += `<div class='category'>${category[i].toUpperCase()}</div>`
    }
    
    div+='<div onclick="showSales()">SALES</div>'

    cont.innerHTML = div
    // console.log(cont,div)
    
}

function _itemsFill(category){

    category = category || menu.items[0].category
    console.log('filling items '+category)
    var cont = document.getElementById('items')
    cont.style.background='#f44336'
    var div = '<div>'

    for(let i=0;i<menu.items.length;i++){
        // console.log(menu.items[i].category)
        if(menu.items[i].category===category)
            div += `<div onclick='_itemAdd(${menu.items[i].id})'><div>${menu.items[i].name}</div><div>Price:${menu.items[i].price}</div></div>`
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


function _billFill(clear=''){
    if(order.length===0)
        return 0
    console.log('filling bill total')
    var cont = document.getElementById('bill-total')
    if(clear===null){
        cont.innerHTML=''
        order=[]
        return 0
    }
    var div = '<div>TOTAL</div><div>'
    subtotal = [0,0,0,0]
    if(order.length>1){
        for(let i=0;i<order.length;i++){
            subtotal[0]+=order[i].total
            subtotal[1]+=order[i].count*10
        }
    }
    else {
        subtotal[0] = Number(order[0].total)
        subtotal[1] = 10
    }
    subtotal[2] = (subtotal[0]+subtotal[1])*0.05
    subtotal[3] = subtotal.reduce((a,b)=>a+b)
    for(let i=0;i<total.length;i++){
        // console.log(i,div)
        div += `<div><div>${total[i]}</div><div> ${subtotal[i]}</div></div>`
    }

    div += '</div>'
    div += '<div onclick="makeBill()" id="make-bill">MAKE BILL</div>'
    
    cont.innerHTML = div
    // console.log(cont,div)
}
