function _catListener(){
    var cat = document.querySelectorAll('.category')
    // console.log(cat)
    for(let i=0;i<cat.length;i++){
        cat[i].addEventListener('click',function(){_itemsFill(cat[i].textContent.toLowerCase())})
    }
    
    }