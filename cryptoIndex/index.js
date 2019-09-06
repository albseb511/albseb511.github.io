// console.log('hey')
var exchangeData = ''
var exchanges = ''
var markets = ''

async function exchange () {
    // Exca
    await fetch('https://api.coingecko.com/api/v3/exchange_rates')
    .then(response=>response.json())
    .then(data => {
        // console.log(data.rates)
        exchangeData = data.rates
    })

    var btc = document.getElementById('index')
    let i =0
    console.log(btc)
    btc.children[4].innerHTML = `<div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                         See All Rates
                                        </button>
                                        <div class="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuButton" id='downMenu'>
                                        </div>
                                    </div>`
    
        btc.children[i++].textContent =`BITCOIN DAILY INDEX`
    btcToDollar = exchangeData['usd'].value
    btc.children[i++].textContent = ` ${exchangeData['usd'].value}${exchangeData['usd'].unit}`
    btc.children[i++].textContent = ` ${exchangeData['inr'].value}${exchangeData['inr'].unit}`
    btc.children[i++].textContent = ` ${exchangeData['ltc'].value}${exchangeData['ltc'].unit}`
    // console.log(btcToDollar)
    for(let key in exchangeData){
        if(key!='btc')
        document.getElementById('downMenu').innerHTML += `<a class="dropdown-item text-justify" href="#"> ${exchangeData[key].name}/USD: $ ${parseFloat(btcToDollar/exchangeData[key].value).toFixed(2)} </a>`
    }
    // console.log('btc',btc)
    // setTimeout(function(){btc.children[3].innerHTML += `</div></div>`},1000)
    

}


async function getExchanges() {
    await fetch('https://api.coingecko.com/api/v3/exchanges')
    .then(response=>response.json())
    .then(data => {
        // console.log(data)
        exchanges = data
    })

    cont = document.getElementById('right-sidebar')
    var count = 0
    exchanges.filter((item,index)=>{
        if(count<10&&item.description){
        let div = `<div class="card m-2">
                        <div class="card-header">
                        <img src=${item.image} width='50px'/>
                        ${item.name}  estd:${item.year_established}
                        <h6 class="card-subtitle mb-2 m-t-2 text-muted">Country: ${item.country}</h6>
                         
                        </div>
                        <div class="card-body">
                        ${item.description?item.description:'Description N/A'}
                        </div>
                        <a href="#" class="card-link"> Link :  ${item.url}</a>
                    </div>`
        cont.innerHTML += div
        count++
        }
    })
    

    

}


async function getMarketDetails() {
    await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&price_change_percentage=1h&sparkline=true')
    .then(response=>response.json())
    .then(data => {
        // console.log(data)
        markets = data
    })

    cont = document.getElementById('body-container')
    var count = 0
    markets.filter((item,index)=>{
        if(count<10){
        let div = `<div class="card mb-4 m-2" >
                        <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src='${item.image}' class="card-img" alt="${item.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">${item.name} : ${item.symbol} : <b>${item.current_price}</b></h5>
                            <p class="card-text ${item.price_change_percentage_24h>=0?'text-success':'text-danger'}">Price Change 24hr: ${item.price_change_percentage_24h}</p>
                            <p class="card-text"><small class="text-muted">Last updated: ${item.last_updated}</small></p>
                            
                            
                            </div>
                        </div>
                        </div>
                        <canvas class='chart' id="${item.id}" style="max-width:900px;" width="100" height="30"></canvas>
                    </div>`
        cont.innerHTML += div
        count++
        }
    })
    console.log(markets[0])

    $('.chart')
    .map((item)=>{
        var ctx = $('.chart')[item]
        var label = new Array(24*7).fill('')
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                    label: markets[item].name,
                    data: markets[item].sparkline_in_7d.price,
        
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'sparkline in 7d'
						}
					}],
					yAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Amount ($)'
						}
					}]
				}
            }
        });
    })
    
    
}
exchange()
getExchanges()
getMarketDetails()
