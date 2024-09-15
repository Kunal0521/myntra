let Bagitems=[];
onload();
function onload(){
    let BagitemsStr=localStorage.getItem('Bagitems')
     Bagitems=BagitemsStr?JSON.parse(BagitemsStr):[];
    display();
    count_items();
     
   
}
function addToBag(itemid){
    Bagitems.push(itemid);
    localStorage.setItem('Bagitems',JSON.stringify(Bagitems))
    count_items()
    }
function count_items(){
 let count=document.querySelector(`.item_count`)
 if(Bagitems.length > 0){
    count.innerText=Bagitems.length;
    
 }
 else{
    count.innerText=' ';}
}    
function display(){
    let itemContainer=document.querySelector('.items-container')
    if (!itemContainer){
        return;
    }
    let innerHTML=``;
    items.forEach(item=>{
        innerHTML+=`  <div class="item-container">
                    <img src="${item.image}" alt="item image">
                    <div class="rating">
                        ${item.rating.stars}  ⭐️| ${item.rating.count}
                    </div>
                    <div class="company-name">
                        <h1>${item.company}</h1>
                        <p>${item.item_name}</p>
                        <span class="current-price">${item.current_price}</span>
                        <span class="orginal-price">${item.original_price}</span>
                        <span class="discount">${item.discount_percentage}% OFF</span>
                    </div>
                    <button onclick="addToBag(${item.id})">Add to Bag</button>
    
                </div>`
    })
    itemContainer.innerHTML=innerHTML;

};



