var total = ['Subtotal','Packaging','Taxes @ 5%','Total']
var order = []
var subtotal = [0,0,0,0]
var sales = []

function Sale(amt,item){
    this.amt = amt;
    this.id = new Date().getUTCMilliseconds();
    this.item = item
}

function Items(name,price,id){
    this.id = id
    this.name = name;
    this.price = Number(price);
    this.count = 1;
    this.total = this.count*Number(this.price)
}


console.log(order, 'value of order')
var menu = {
    items:[{category:'milkshake',
     name:'Apple Milskshake',
     price:'120',
     id:001},
     {category:'milkshake',
     name:'Chikuu Milskshake',
     price:'120',
     id:002},
     {category:'milkshake',
     name:'Avacado Milskshake',
     price:'140',
     id:003},
     {category:'milkshake',
     name:'Strawberry Milskshake',
     price:'100',
     id:004},
     {category:'milkshake',
     name:'Mango Milskshake',
     price:'150',
     id:005},
     {category:'milkshake',
     name:'Lychee Milskshake',
     price:'180',
     id:006},
     
     {category:'sandwich',
     name:'Veg Grill',
     price:'90',
     id:007},
     {category:'sandwich',
     name:'Club Cheese Sandwich',
     price:'100',
     id:008},
     {category:'sandwich',
     name:'Glazed Banana Honey Toast',
     price:'80',
     id:009},
     {category:'sandwich',
     name:'Aloo Tikki Sub',
     price:'80',
     id:010},
     {category:'sandwich',
     name:'Chilli Corn Sandwich',
     price:'100',
     id:011},
     {category:'sandwich',
     name:'Speacial Sandwich',
     price:'120',
     id:012},

     {category:'juice',
     name:'Anar juice',
     price:'180',
     id:013},
     {category:'juice',
     name:'Lemon Juice',
     price:'50',
     id:014},
     {category:'juice',
     name:'Honey Lemon juice',
     price:'60',
     id:015},
     {category:'juice',
     name:'Blazing Gun Mocktail',
     price:'100',
     id:016},
     {category:'juice',
     name:'Virgin Mohito',
     price:'90',
     id:017},
     {category:'juice',
     name:'Classic Iced Tea',
     price:'100',
     id:018},

     {category:'desserts',
     name:'Chocolate Lava Cake',
     price:'100',
     id:019},
     {category:'desserts',
     name:'Ice cream Bowl',
     price:'80',
     id:020},
     {category:'desserts',
     name:'Mango Cream',
     price:'180',
     id:021},
     {category:'desserts',
     name:'Sizzling Brownie',
     price:'180',
     id:022},
     {category:'desserts',
     name:'Fruit Salad',
     price:'140',
     id:023},
     {category:'desserts',
     name:'Art of Delight',
     price:'200',
     id:024},
    ]
}

// order.push(new Items(menu.items[0].name,menu.items[0].price,menu.items[0].id))
// console.log(menu)