import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductCart,
  removeProductCart,
  ClearCart,
  getProducts,
  ADD_TO_CART,
  addLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
} from "../../actions";
// import ProductCart from './ProductCart';
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartShp from "./CartShp";
import Loading from "../loading/Loading";

function ShoppingCart({ name, price, image, id, } ) {

  const dispatch = useDispatch()
  const cart = useSelector( (state) => state.productCart);
  const product = useSelector((state) => state.products);
  const localStorage = useSelector((state) => state.arrayStorages);

  const [allProducts, setAllProducts] = useState([]);

  //consologuea el localStorage
  useEffect(() => {
    console.log(localStorage);
  }, [localStorage]);

  useEffect(() => {
    const dbProducts = () => {
      setAllProducts(product);
    };
    dbProducts();
  }, [product]);

  const addToCart = (el) => {
    dispatch(addLocalStorage(el));
    dispatch(addProductCart(el.id));
    console.log();
  };

  const delFromCart = () => {};

  const clearCart = () => {};

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 400);
  }, []);

  if (!loading) {
    return <Loading />;
  } else {

const addToCart = (id) => {
  dispatch(addProductCart(id))}
// const addToCart = (el) => {
//   dispatch(addLocalStorage(el))
//   dispatch(addProductCart(el.id))
//   console.log()

// }
    return (
      <div>
        <div>
        {/* <button type="button" class="btn btn-outline-secondary">
          🛒<a href="/order" target="_blank" rel="nofollow" class="badge badge-light">
          <span id="cart_menu_num" data-action="cart-can" class=" rounded-circle">{1}</span></a>
        </button> */}
        </div>
      <div class="cart_section">
         <div class="container-fluid">
         <div class="row">
        <h2> •••»   SIMULADOR DE HOME   «•••☻</h2>
        <div class="shadow-none p-3 mt-2 mb-4 bg-light rounded">
        <h3 class="d-flex justify-content-center">Carrito de Compras</h3>
        <div class="d-flex justify-content-end">
        </div>
       <article>          
         {cart.map( (item, index) => 
         <CartItem key={index} data={item} />
         )}
       </article>
       <div class="d-flex justify-content-end">
         <button type="button" class="btn btn-danger" onClick={() => clearCart()}>Limpiar Carrito</button>
       </div>
       </div>
       <hr/>
         <h3>PRODUCTOS</h3>
         <article class=" d-flex row col-md-12 mt-5">
         {allProducts ? allProducts.map((el) => (
                    <div class="col-md-2" >
                      <div class="card">
                        <div class="card-body">
                          <div class="card-img-actions">
                            <Link to={`/detail/${el.id}`}>
                              <img
                                src={el.image}
                                class="card-img img-fluid"
                                height="45px"
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div class="card-body bg-light text-center">
                          <div class="mb-2">
                            <h6 class="font-weight-semibold mb-2">
                               <h3 class="mb-0 font-weight-semibold">{el.name}</h3> 
                            </h6>
                          </div>
                          <h3 class="mb-0 font-weight-semibold">
                            ${el.price}.00
                          </h3>
                          <button
                            onClick={(el) => addToCart(el)}
                            type="button"
                            class="btn bg-cart"
                          >
                            <i class="fa fa-cart-plus mr-2"></i> Agregar
                          </button>
                        </div>
                      </div>
                    </div>
                  )) : <div>...loading</div>}
         </article>
        </div>
         </div>
     </div>
     </div>
    )
  }
}

export default ShoppingCart;
