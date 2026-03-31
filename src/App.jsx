// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import Navbar from './components/Navbar';
// import Banner from './components/Banner';
// import Stats from './components/Stats';
// import ProductCard from './components/ProductCard';
// import Steps from './components/Steps';
// import Pricing from './components/Pricing';
// import Footer from './components/Footer';
// import productsData from './products.json';

// function App() {
//   const [cart, setCart] = useState([]);
//   const [view, setView] = useState('products');

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const isExist = prev.find(item => item.id === product.id);
//       if (isExist) {
//         toast.info(`${product.name} is already in your cart!`, { theme: "colored" });
//         return prev;
//       }
//       toast.success(`${product.name} added to cart!`, { theme: "colored" });
//       return [...prev, product];
//     });
//   };

//   const removeFromCart = (id, name) => {
//     setCart((prev) => prev.filter(item => item.id !== id));
//     toast.warning(`${name} removed from cart!`, { theme: "colored" });
//   };

//   const proceedToCheckout = () => {
//     if (cart.length === 0) {
//       toast.error("Your cart is empty!", { theme: "colored" });
//       return;
//     }
//     setCart([]);
//     toast.success("🛒 Success! All products purchased and cleared.", { theme: "colored" });
//     setView('products');
//   };

//   const totalCartPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

//   return (
//     <div className="min-h-screen bg-slate-50 text-secondary font-sans selection:bg-primary/20">
//       <Navbar cartCount={cart.length} onCartClick={() => setView('cart')} />

//       {view === 'products' ? (
//         <div className="fade-in">
//           <Banner />
//           <Stats />

//           <section id="main" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
//             <div className="flex flex-col items-center gap-8 mb-16">
//               <div className="text-center">
//                 <h2 className="text-4xl font-black text-secondary mb-2">Discover Our <span className="text-primary italic">Digital</span> Catalog</h2>
//                 <p className="text-gray-400 font-medium max-w-md mx-auto">Premium tools curated for modern creators and entrepreneurs.</p>
//               </div>

//               <div className="flex bg-white p-2 rounded-2xl gap-2 shadow-xl border border-gray-100">
//                 <button
//                   onClick={() => setView('products')}
//                   className={`btn rounded-xl px-12 border-none transition-all duration-300 ${view === 'products' ? 'btn-primary text-white shadow-lg' : 'bg-transparent text-gray-400 hover:bg-gray-100'}`}
//                 >
//                   Product
//                 </button>
//                 <button
//                   onClick={() => setView('cart')}
//                   className={`btn rounded-xl px-12 border-none transition-all duration-300 ${view === 'cart' ? 'btn-primary text-white shadow-lg' : 'bg-transparent text-gray-400 hover:bg-gray-100'}`}
//                 >
//                   Cart ({cart.length})
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {productsData.map(product => (
//                 <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
//               ))}
//             </div>
//           </section>

//           <Steps />
//           <Pricing />
//         </div>
//       ) : (
//         <section className="py-20 px-4 md:px-12 max-w-5xl mx-auto fade-in min-h-[70vh]">
//           <div className="flex justify-between items-end mb-10 border-b-2 border-primary/10 pb-6">
//             <div>
//               <button
//                 onClick={() => setView('products')}
//                 className="text-primary font-bold mb-2 flex items-center gap-1 hover:underline underline-offset-4"
//               >
//                 ← Back to Products
//               </button>
//               <h2 className="text-4xl font-black text-secondary">Your <span className="text-primary italic">Cart</span></h2>
//             </div>
//             <div className="text-right">
//               <p className="text-gray-400 font-medium">Total Items</p>
//               <p className="text-3xl font-black text-primary">{cart.length}</p>
//             </div>
//           </div>

//           {cart.length === 0 ? (
//             <div className="flex flex-col items-center justify-center bg-white p-20 rounded-3xl shadow-xl border border-gray-100 text-center space-y-4">
//               <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
//                 <i className="fa-solid fa-bag-shopping text-5xl"></i>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-400">Your cart is empty</h3>
//               <p className="text-gray-400 px-10 pb-4">You haven't added any digital tools to your collection yet. Start browsing to find your next superpower!</p>
//               <button onClick={() => setView('products')} className="btn btn-primary text-white px-10">Start Shopping</button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               <div className="lg:col-span-2 space-y-4">
//                 {cart.map(item => (
//                   <div key={item.id} className="flex items-center justify-between bg-white p-6 rounded-3xl shadow-lg border border-gray-50 hover:border-primary/20 transition-all hover:translate-x-2">
//                     <div className="flex items-center gap-6">
//                       <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center p-3">
//                         <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
//                       </div>
//                       <div>
//                         <h4 className="text-lg font-bold text-secondary">{item.name}</h4>
//                         <p className="text-primary font-black">${item.price}</p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => removeFromCart(item.id, item.name)}
//                       className="btn btn-circle btn-ghost text-red-400 hover:bg-red-50 hover:text-red-600"
//                     >
//                       <i className="fa-solid fa-trash-can text-xl"></i>
//                     </button>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-fit sticky top-24">
//                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
//                   <i className="fa-solid fa-credit-card text-primary text-2xl"></i> Order Summary
//                 </h3>
//                 <div className="space-y-4 mb-8">
//                   <div className="flex justify-between text-gray-500 font-medium">
//                     <span>Subtotal</span>
//                     <span>${totalCartPrice}</span>
//                   </div>
//                   <div className="flex justify-between text-gray-500 font-medium">
//                     <span>Platform Fee</span>
//                     <span className="text-green-500 font-bold">Free</span>
//                   </div>
//                   <div className="border-t border-dashed pt-4 flex justify-between">
//                     <span className="text-lg font-bold">Total Amount</span>
//                     <span className="text-2xl font-black text-primary">${totalCartPrice}</span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={proceedToCheckout}
//                   className="btn btn-primary w-full btn-lg text-white rounded-2xl shadow-lg shadow-primary/30"
//                 >
//                   Proceed to Checkout
//                 </button>
//                 <p className="text-center text-xs text-gray-400 mt-6 px-4">
//                   Secure checkout powered by DigiTools. No credit card required for free trials.
//                 </p>
//               </div>
//             </div>
//           )}
//         </section>
//       )}

//       <Footer />
//     </div>
//   );
// }

// export default App;
