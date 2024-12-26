


const div = document.querySelector("#container")
const total = document.querySelector("#total")

function data() {
   const items = localStorage.getItem( "cartItems")
const convert = JSON.parse(items)
   div.innerHTML = ""

   
convert.map((items , index) => {

   
   // console.log(items)
   div.innerHTML += `
   <div>
           <img class="image" src="${items.thumbnail}" alt="Mobile Image">
           <h2>Brand : ${items.brand}</h2>
           <h2>Name : ${items.name}</h2>
           <h2>Storage : ${items.ram} / ${items.rom}</h2>
           <h2>Price : $${items.price}</h2>
       <div class="quantity-count">
           <button onclick="decrese(${index})">-</button>
           <h4 class="quantity">${items.quantity}</h4>
           <button onclick="increse(${index})">+</button>
           
       </div>
       
       <button onclick="remove(${index})">Delete</button>`
})
}

const totalAmount = convert.reduce((acc , curVal) => {
    return acc + curVal.price
} , 0)

total.innerHTML = "Total : " + "$" + totalAmount

data()


function renderTotal() {
   var totalvalue= 0

   convert.map((items) => {

      const itemTotal = items.price * items.quantity 
      totalvalue += itemTotal
   
      total.innerHTML = totalvalue
   
      console.log(total);
      })
}

function decrese(index) {
   
   convert[index].quantity -= 1;


  renderTotal()
   data()
   
}


function increse(index) {
   
   convert[index].quantity += 1;
   // console.log(convert[index].quantity);
   
renderTotal()

   data()
}




function remove(index){
   const items = localStorage.getItem( "cartItems")
const convert = JSON.parse(items)

   convert.splice(index , 1)
   console.log(convert);

renderTotal()
// data()

console.log(convert);

  data() 
}

