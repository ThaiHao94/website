// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import DATA from '../Data';

// const Product = () => {

//     const cardItem = (item) => {
//         return (
//             <div className="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
//                 <img src={item.image} className="card-img-top" height="250px" alt={item.title} />
//                 <div className="card-body text-center">
//                     <h5 className="card-title">{item.title}</h5>
//                     <p className="lead">{item.price}Đ</p>
//                     <NavLink to={`/products/${item.id}`} className="btn btn-outline-success">
//                         Rước Bé Về</NavLink>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div>
//             <div className="container py-5">
//                 <div className="row">
//                     <div className="col-12 text-center">
//                         <h1>Product</h1>
//                         <hr />
//                     </div>
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="row justify-content-around">
//                     {DATA.map(cardItem)}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Product;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DATA from './Data'

const Product = () => {

    const [filter, setFilter] = useState(DATA);

    const filterProduct = (cartItem) => {
        const updatedList = DATA.filter((item) => item.category === cartItem);
        setFilter(updatedList);
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-success me-2"
                        onClick={() => setFilter(DATA)}>Tất Cả</button>
                    <button className="btn btn-outline-success me-2"
                        onClick={() => filterProduct("cho")}>Chó Cảnh</button>
                    <button className="btn btn-outline-success me-2"
                        onClick={() => filterProduct("meo")}>Mèo Cảnh</button>
                    <button className="btn btn-outline-success me-2"
                        onClick={() => filterProduct("phukiencho")}>Đồ Cho Chó</button>
                    <button className="btn btn-outline-success me-2"
                        onClick={() => filterProduct("phukienmeo")}>Đồ Cho Mèo</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4 my-5" style={{width: "20rem"}}>
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top"
                                        alt={product.title} height="200px" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text lead fw-bold" style={{color:"yellowgreen"}}>
                                            {(product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Đ
                                        </p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-success">
                                            Mua Ngay
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder
                        text-center">Nhoi's Family</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {<ShowProduct />}
                </div>
            </div>
        </div>
    );
}

export default Product;
