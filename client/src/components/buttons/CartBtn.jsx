import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
    const state = useSelector((state) => state.addItems)
    return (
        <>
            <NavLink to="/cart" className="btn btn-success ms-2">
                <span className="fa fa-shopping-cart me-1"></span>Giỏ Hàng ({state.length})
            </NavLink>
        </>
    );
}

export default CartBtn;
