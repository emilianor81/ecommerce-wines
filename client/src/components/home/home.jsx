import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/index";
import StyledDiv from "./styled";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import { Link } from 'react-router-dom';
import Pages from "./paginado";
import NavCategories from "../navCategories/navCategories";
import { addProductCart } from "../../actions/index";
// import ShoppingCart from "../shoppingCart/ShoppingCart";
import Loading from "../loading/Loading";

export default function Home({ location }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (location.search !== '') {
      setPage(parseInt(location.search.slice(location.search.indexOf('=') + 1)));
    }
  }, [location.search])


  useEffect(() => {
    const dbProducts = () => {
      dispatch(getProducts());
    };
    dbProducts();
  }, [dispatch]);


  useEffect(() => {
    const dbProducts = () => {
      setAllProducts(product);
    };
    dbProducts();
  }, [product]);

  const addToCart = (id) => {
    // showalert('Producto Agregado al carrito')
    dispatch(addProductCart(id))
  }
 
  const [loading, setLoading] = useState(false)

	useEffect(() => {
		setTimeout(() => setLoading(true), 400)
	}, [])

  if(!loading) {
    return (
      <Loading />
    )
  } else {
  return (
    <>
      <Nav />
        <NavCategories />
      <StyledDiv>
        <div>
          {/* <div class='mt-5 mb-3' >{carritoOn===true?<ShoppingCart/>:null}</div>  */}
          <div className="div_container">
            <div class="container d-flex justify-content-center mt-50 mb-50">
              <div class="row container-product">
                {allProducts &&
                  allProducts.length > 0 ? allProducts.slice((page - 1) * 9, page * 9).map((el) => {
                   return el.stock>0?<>
                    <div class="col-md-4 mt-2">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-img-actions">
                            <Link to={`/detail/${el.id}`}>
                              <img
                                src={el.image}
                                class="card-img img-fluid"
                                height="100"
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div class="card-body bg-light text-center">
                          <div class="mb-2">
                            <h6 class="font-weight-semibold mb-2">
                              {" "}
                              <a href={`/detail/${el.id}`}
                                class="text-default mb-2"
                                data-abc="true"
                              >
                                {el.name}
                              </a>
                            </h6>
                          </div>
                          <h3 class="mb-0 font-weight-semibold">$ {el.price}</h3>
                          <div class="text-muted mb-3">34 reviews</div>
                          <button type="button" onClick={()=>addToCart(el.id)} class="btn bg-cart">
                            <i class="fa fa-cart-plus mr-2"></i> Agregar
                          </button>
                        </div>
                      </div>
                    </div>
                  </>: null}) : null}
              </div>
            </div>
          </div>
        </div>
      </StyledDiv>
      <Pages product={product} page={page} />
      <Footer />
    </>
    )
  }
}

