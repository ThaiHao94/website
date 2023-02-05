import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import DATA from './Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Đem Bé Về");

    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];

    const dispatch = useDispatch();

    const handleCart = (product) => {
        if (cartBtn === "Đem Bé Về") {
            dispatch(addItem(product));
            setCartBtn("Gửi Bé Lại");
        } else {
            dispatch(delItem(product));
            setCartBtn("Đem Bé Về");
        }
    }

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.image} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        <h2 className="my-4" style={{color:"yellowgreen"}}>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Đ</h2>
                        <p className="lead">{product.description}</p>
                        <button onClick={() => handleCart(product)} className="btn btn-outline-success my-5">
                            {cartBtn}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
