import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delItem } from '../redux/actions/index'
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const state = useSelector((state) => state.addItems);
    const dispatch = useDispatch();
    const handleClose = (item) => {
        dispatch(delItem(item));
    }
    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <img src={cartItem.image} alt={cartItem.title} height="250px" width="280px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">{cartItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Đ</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return (
            <>
                <div className="px-4 my-5 bg-light rounded-3 py-5" >
                    <div className="container py-4">
                        <div className="row">
                            <h3>Không Có Bé Nào Cả</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center mx-auto">
                    <NavLink to="/products" className="btn btn-outline-success">
                        Quay Lại Đón Bé</NavLink>
                </div>
            </>
        );
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-success mb-5 w-25 mx-auto">
                        Thanh Toán</NavLink>
                </div>
                <div className="row">
                    <NavLink to="/products" className="btn btn-outline-success mb-5 w-25 mx-auto">
                        Quay Lại Đón Bé</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    );
}

export default Cart;
