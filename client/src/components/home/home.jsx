import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/index";
import StyledDiv from "./styled";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import HomeProductsCards from '../homeProductsCards/homeProducts';

export default function Home() {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products);

    const [allProducts, setAllProducts] = useState([]);
<<<<<<< HEAD
    const showProducts = allProducts
    const [page, setPage] = useState(1);
=======
>>>>>>> 73f56f07ee18b13f449c016513a0ad18436e6413

    const [numberPage, setnumberPage] = useState(1);
    const initialProducts = 4;
    const conteoFinal = numberPage * initialProducts;
    const conteoInicial = conteoFinal - initialProducts;

    const showProducts = allProducts.slice(conteoInicial, conteoFinal)


    //console.log(product);


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

    if (numberPage < 1) setnumberPage(1);
    if (numberPage > 25) setnumberPage(25);


    return (
        <StyledDiv>
            <div>
                <Nav />
                <div className="div_container">
                    <div className=''>
                        <button onClick={() => setnumberPage(numberPage - 1)}> 👈🏼 </button>
                    </div>
                    {showProducts && showProducts.map(el => (
                        <HomeProductsCards
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            price={el.price}
                            image={el.image}
                        />
                    ))}
                    <div className=''>
                    <div className=''>
                        <button onClick={() => setnumberPage(numberPage + 1)}> 👉🏼 </button>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        </StyledDiv>
    );
}