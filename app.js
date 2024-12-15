// console.log("Hello World!");


const phones =  [{
    brand: "Apple",
    name: "iPhone 15 Pro",
       model: "A2890",
       ram: 6,
       rom: 128,
       screen_size: "6.1 inches",
       battery: "3,349",
       price: 999,
       thumbnail: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_jd3UjAFovLyfrmyHR7ukeOhmvYnTBbQ36WCsbqIJ.jpg"
     },
     {
       brand: "Samsung",
       name: "Samsung Galaxy S24",
       model: "SM-G988B",
       ram: 8,
       rom: 256,
       screen_size: "6.8 inches",
       battery: "5,000 mAh",
       price: 1199,
       thumbnail: "https://cellmart.pk/wp-content/uploads/2024/07/S24-Ultra-Black-cellmart.webp"
     },
     {
       brand: "Google",
       name: "Pixel 8",
       model: "GD1YQ",
       ram: 8,
       rom: 128,
       screen_size: "6.2 inches",
       battery: "4,575 mAh",
       price: 699,
       thumbnail: "https://cellmart.pk/wp-content/uploads/2024/07/ajuhaegabuaguagja.jpg"
     },
     {
       brand: "OnePlus",
       name: "OnePlus 11",
       model: "CPH2451",
       ram: 12,
       rom: 256,
       screen_size: "6.7 inches",
       battery: "5,000 mAh",
       price: 899,
       thumbnail: "https://retail.com.pk/cdn/shop/files/one-2_grande.jpg?v=1707155017"
     },
     {
       brand: "Xiaomi",
       name: "Xiaomi 13 Pro",
       model: "2210132G",
       ram: 12,
       rom: 256,
       screen_size: "6.73 inches",
       battery: "4,820 mAh",
       price: 1099,
       thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTtzb2P7bBFdInD87DB2ebmRcwT5i9mYcgA&s"
     },
     {
       brand: "Sony",
       name: "Xperia 1 V",
       model: "XQ-DQ72",
       ram: 12,
       rom: 256,
       screen_size: "6.5 inches",
       battery: "5,000 mAh",
       price: 1299,
       thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yvFX5QqwNgFujplKT2ex741ql8SuQVpKAQ&s"
     },
     {
       brand: "Oppo",
       name: "Find X6 Pro",
       model: "CPH2469",
       ram: 12,
       rom: 256,
       screen_size: "6.82 inches",
       battery: "5,000 mAh",
       price: 1049,
       thumbnail: "https://gsmfloor.pk/wp-content/uploads/Oppo-Find-X6-Pro.png"
     },
     {
       brand: "Realme",
       name: "GT 2 Pro",
       model: "RMX3301",
       ram: 12,
       rom: 256,
       screen_size: "6.7 inches",
       battery: "5,000 mAh",
       price: 799,
       thumbnail: "https://rukminim2.flixcart.com/image/850/1000/l3rmzrk0/mobile/c/c/o/-original-imagetmegwtng3xg.jpeg?q=90&crop=false"
     },
     {
       brand: "Huawei",
       name: "P60 Pro",
       model: "EUD-AL00",
       ram: 12,
       rom: 512,
       screen_size: "6.67 inches",
       battery: "4,815 mAh",
       price: 1199,
       thumbnail: "https://retail.com.pk/cdn/shop/files/60pro-mobile.jpg?v=1707754871"
     },
     {
       brand: "Motorola",
       name: "Edge 40 Pro",
       model: "XT2301-5",
       ram: 12,
       rom: 256,
       screen_size: "6.67 inches",
       battery: "4,600 mAh",
       price: 899,
       thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOnwCSsyrh1hWhdp5AdUEBDR44ORUx9coD3A&s"
     },
     {
       brand: "Asus",
       name: "ROG Phone 7",
       model: "AI2201",
       ram: 16,
       rom: 512,
       screen_size: "6.78 inches",
       battery: "6,000 mAh",
       price: 1399,
       thumbnail: "https://dukaanexpress.pk/wp-content/uploads/2024/09/Asus-Rog-Phone-7-Ultimate_1_resized.jpg"
     },
     {
       brand: "Vivo",
       name: "X90 Pro",
       model: "V2219A",
       ram: 12,
       rom: 256,
       screen_size: "6.78 inches",
       battery: "4,870 mAh",
       price: 1099,
       thumbnail: "https://cdn.dxomark.com/wp-content/uploads/medias/post-136691/Vivo-X90-Pro_featured-image-packshot-review.jpg"
     },
     {
       brand: "Samsung",
       name: "Galaxy Z Fold 5",
       model: "SM-F946B",
       ram: 12,
       rom: 512,
       screen_size: "7.6 inches (Folded)",
       battery: "4,400 mAh",
       price: 1799,
       thumbnail: "https://retail.com.pk/cdn/shop/files/1.jpg?v=1707737180"
     },
     {
       brand: "Apple",
       name: "iPhone 14 Pro Max",
       model: "A2891",
       ram: 6,
       rom: 128,
       screen_size: "6.7 inches",
       battery: "4,323 mAh",
       price: 1099,
       thumbnail: "https://regen.pk/cdn/shop/products/REGEN-iPhone14ProMax-Frontback-DeepPurple-Pakistan_1_cf318a55-4d9c-49bc-890c-f481de0a1bbe.png?v=1681907898"
     },
     {
       brand: "Google",
       name: "Pixel 7 Pro",
       model: "GD1X6",
       ram: 12,
       rom: 128,
       screen_size: "6.7 inches",
       battery: "5,000 mAh",
       price: 899,
       thumbnail: "https://cellmart.pk/wp-content/uploads/2024/07/pixel-7-pro-cellmart-2.jpeg"
     },
     {
       brand: "OnePlus",
       name: "OnePlus 10 Pro",
       model: "LE2120",
       ram: 12,
       rom: 256,
       screen_size: "6.7 inches",
       battery: "5,000 mAh",
       price: 899,
       thumbnail: "https://propakistani.pk/price/wp-content/uploads/2021/12/oneplus-10-pro-price-1.png"
     },
     {
       brand: "Xiaomi",
       name: "Mi 11 Ultra",
       model: "M2102K1G",
       ram: 12,
       rom: 256,
       screen_size: "6.81 inches",
       battery: "5,000 mAh",
       price: 799,
       thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvp5jrFqyxEZq660pfBay9EHJdQe_RJDihw&s"
     },
     {
       brand: "Oppo",
       name: "Reno 8 Pro",
       model: "CPH2359",
       ram: 12,
       rom: 256,
       screen_size: "6.7 inches",
       battery: "4,500 mAh",
       price: 549,
       thumbnail: "https://propakistani.pk/price/wp-content/uploads/2022/06/Oppo-Reno-8-Pro-Plus-price.png"
     },
     {
       brand: "Realme",
       name: "Realme 11 Pro+",
       model: "RMX3741",
       ram: 12,
       rom: 256,
       screen_size: "6.7 inches",
       battery: "5,000 mAh",
       price: 599,
       thumbnail: "https://gsmfloor.pk/wp-content/uploads/Realme-11-Pro-plus.jpg"
     },
     {
       brand: "Vivo",
       name: "Vivo V27 Pro",
       model: "V2232",
       ram: 12,
       rom: 256,
       screen_size: "6.78 inches",
       battery: "4,600 mAh",
       price: 499,
       thumbnail: "https://gsmfloor.pk/wp-content/uploads/Vivo-V27-pro-1.png"
     },
     {
       brand: "Motorola",
       name: "Moto Edge 20 Pro",
       model: "XT2143-2",
       ram: 12,
       rom: 256,
       screen_size: "6.7 inches",
       battery: "4,500 mAh",
       price: 799,
       thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge20-pro-.jpg"
     },
     {
       brand: "Samsung",
       name: "Samsung Galaxy A54",
       model: "SM-A546B",
       ram: 6,
       rom: 128,
       screen_size: "6.4 inches",
       battery: "5,000 mAh",
       price: 349,
       thumbnail: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-a546ezkdpkd/gallery/pk-galaxy-a54-5g-sm-a546-sm-a546ezkdpkd-538125087?$650_519_PNG$"
     },
     {
       brand: "Apple",
       name: "iPhone SE 2022",
       model: "A2595",
       ram: 4,
       rom: 64,
       screen_size: "4.7 inches",
       battery: "2,018 mAh",
       price: 429,
       thumbnail: "https://images-cdn.ubuy.co.id/64e0912ba5fb9e63f93ff341-straight-talk-apple-iphone-se-2022-3rd.jpg"
     },
     {
       brand: "Xiaomi",
       name: "Redmi Note 12 Pro",
       model: "22011219I",
       ram: 6,
       rom: 128,
       screen_size: "6.67 inches",
       battery: "5,000 mAh",
       price: 299,
       thumbnail: "https://cubeonline.pk/cdn/shop/files/productimage2_1_grande_133930f6-a0bb-4fa3-9ff5-ef52313c0b94_600x.webp?v=1704190743"
     },
     {
       brand: "Asus",
       name: "Zenfone 9",
       model: "ZS698KS",
       ram: 16,
       rom: 256,
       screen_size: "5.9 inches",
       battery: "4,300 mAh",
       price: 799,
       thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnST31QO_Z6wpZYnbEgWqQFgNXgEJKxgU-w&s"
     },
     {
       brand: "Realme",
       name: "Realme Narzo 60 5G",
       model: "RMX3810",
       ram: 6,
       rom: 128,
       screen_size: "6.72 inches",
       battery: "5,000 mAh",
       price: 239,
       thumbnail: "https://images.priceoye.pk/realme-narzo-60-pro-pakistan-priceoye-v24cy-500x500.webp"
     },
     
   ]
 
 
   // kal sab sa phela sa objects ki price ma sa string hatana hai kiu ka aga jakar price ko plus aur multiple bhi karna hoga
     
  
 
   // phones[0].quan = 7
   // console.log(phones);
   
   
 let cartItems = [];
 
 const checkLocalStorageData = JSON.parse(localStorage.getItem("cartItems"))
 
 if (checkLocalStorageData == null) {
   cartItems = []
 }else{
   cartItems = [...checkLocalStorageData]
 }
 
 
 
 //   console.log(phones);
 const div = document.querySelector("div")
 
 phones.map((items , index) => {
     // console.log(items);
 
 div.innerHTML += `
 <div id="cart">
             <h2>Mobile : ${items.brand} ${items.model}</h2>
             <h2>Storage : ${items.ram} / ${items.rom}</h2>
             <h2>Price : $${items.price}</h2>
         <button onclick="addCart(${index})">Add to Cart</button>
             
         </div>`
     
   })
 
 
 
 
 
 
   function addCart(index) {
     // console.log(index);
    const checkIndex = cartItems.indexOf(phones[index]) 
    console.log(checkIndex);
   //  cartItems.push(phones[index])
 
     if (checkIndex == -1) {
         cartItems.push(phones[index])
         phones[index].quantity = 1
 
     }else{
       phones[index].quantity += 1
         
     }
     console.log(cartItems);
 
     const count = document.querySelector("#count")
     count.innerHTML = cartItems.length
     
     Swal.fire({
       title: "Good job!",
       text: "Your item sucessfully added in cart",
       icon: "success"
     });
     
     
   }
   
 
 
   function checkout(){
     window.location = "./singleCart.html"
     localStorage.setItem("cartItems" , JSON.stringify(cartItems))
   }