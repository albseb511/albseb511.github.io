function _addItemToOrder(orderId,item){
    console.log(`added ${item} to ${orderId}`)
}


// Pass order as arg. and fill up Bill summary
function _orderAdd(item){
    // var item = [{name:'Apple Milkshake',price:'120'}]
    console.log('filling bill items',item)
    var cont = document.getElementById('bill-items')
    var div = '<div>Bill Summary</div><div>'

    for(let i=0;i<item.length;i++){
        // console.log(i,div)
        div += `<div class='item-bill'><div>${item[i].name}</div><div>x ${item[i].count}</div><div> ${item[i].total}</div></div>`
    }

    div += '</div>'
    
    cont.innerHTML = div
    // console.log(cont,div)
    
}

function _addItemCount(item,i){
    order[i].count += item.count
    order[i].total = order[i].count*order[i].price
}

function _itemAdd(orderId){
    var item = new Items(menu.items[orderId-1].name,menu.items[orderId-1].price,orderId)
    console.log('hey the item is',item)
    // order.push(item)
    var success = false
    if(order.length!=0){
        for(let i=0;i<order.length;i++){
            if(order[i].name===item.name){
                // console.log('item found')
                _addItemCount(item,i)
                success=true
            // return _orderAdd(order)
            }
            else continue;
        }
        if(!success)
            order.push(item)
        
    }
    else order.push(item)
    // console.log('itemAdd called',order)
    _orderAdd(order)
}
