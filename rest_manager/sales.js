function showSales(){
    var cont = document.getElementById('items')
    cont.style.background='#ecf0f1'
    console.log(sales)
    var total = 0
    for(let i=0;i<sales.length;i++)
        total+=sales[i].amt
    var div =`<div>TOTAL SALES: ${total}</div>`
    cont.innerHTML = div
}