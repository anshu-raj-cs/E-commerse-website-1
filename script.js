const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if (bar){
   bar.addEventListener('click',()=> {
    nav.classList.add('active');
   });
}
if (close){
   close.addEventListener('click',()=> {
    nav.classList.remove('active');
   });
}

// const productContainer = document.getElementById("product-container");

//  const products = [
//   { img: "img/products/f1.jpg", brand: "adidas", name: "Cartoon Astronaut T-shirts", price: 78, star: 2 },
//   { img: "img/products/f2.jpg", brand: "adidas", name: "Cartoon Astronaut T-shirts", price: 78, star: 2 },
//   { img: "img/products/f3.jpg", brand: "adidas", name: "Cartoon Astronaut T-shirts", price: 78, star:  2},
//   { img: "img/products/f4.jpg", brand: "adidas", name: "Cartoon Astronaut T-shirts", price: 78, star: Math.floor(Math.random() * 5) + 1 },
//   { img: "img/products/f5.jpg", brand: "adidas", name: "Cartoon Astronaut T-shirts", price: 78, star: Math.floor(Math.random() * 5) + 1 },
//   { img: "img/products/f6.jpg", brand: "adidas", name: "Cartoon Astronaut T-shirts", price: 78, star: Math.floor(Math.random() * 5) + 1 },
//   { img: "img/products/f7.jpg", brand: "adidas", name: "Cartoon Astronaut T-shirts", price: 78, star: Math.floor(Math.random() * 5) + 1 },
//   { img: "img/products/f8.jpg", brand: "adidas", name: "Cartoon Astronaut T-shirts", price: 78, star: Math.floor(Math.random() * 5) + 1 }
// ];


// productContainer.innerHTML = products.map(product => {
//   const filledStars = '<i class="fas fa-star"></i>'.repeat(product.star);
//   const emptyStars = '<i class="far fa-star"></i>'.repeat(5 - product.star);

//   return `
//     <div class="pro">
//       <img src="${product.img}" alt="">
//       <div class="des">
//         <span>${product.brand}</span>
//         <h5>${product.name}</h5>
//         <div class="star">
//           ${filledStars}${emptyStars}
//         </div>
//         <h4>$${product.price}</h4>
//       </div>
//       <a href="#" class="cart"><i class="fa-solid fa-cart-shopping"></i></a>
//     </div>
//   `;
// }).join('');



