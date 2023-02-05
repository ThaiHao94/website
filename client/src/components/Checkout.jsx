import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const state = useSelector((state) => state.addItems)
    var total = 0;
    const itemList = (item) => {

        total += item.price;

        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Đ</span>
            </li>
        )
    }
    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-success">Giỏ Hàng Của Bạn</span>
                            <span className="badge bg-success rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Tổng Cộng (VND)</span>
                                <strong>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Đ</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Mã Khuyến Mại" />
                                <button type="submit" className="btn btn-outline-success">Sử Dụng</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Thông Tin Nhận Hàng</h4>
                        <form className="needs-validation has-validation">
                            <div className="row g-3 was-validated">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Họ</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Thái" required />
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Họ Của Bạn.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Tên</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Hạo" required />
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Tên Của Bạn.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Tên Người Dùng</label>
                                    <div className="input-group">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username" placeholder="thaihao1994" required />
                                        <div className="invalid-feedback">
                                            Vui Lòng Nhập Tên Người Dùng Của Bạn.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12" >
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted"></span></label>
                                    <input type="email" className="form-control" id="email" placeholder="thaihao1994@gmail.com" required />
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Email Của Bạn.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Địa Chỉ</label>
                                    <input type="text" className="form-control" id="address" placeholder=" Số 1 Hùng Vương, Ba Đình, Hà Nội " required />
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Địa Chỉ Của Bạn.
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Tỉnh/Thành Phố</label>
                                    <select className="form-select" id="country" required>
                                        <option value="">Nhấp Chọn</option>
                                        <option>Hà Nội</option>
                                        <option>TP. Hồ Chí Minh</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Vui Lòng Chọn Tỉnh/Thành Phố
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">Quận/Huyện</label>
                                    <select className="form-select" id="state" required>
                                        <option value="">Nhấp Chọn</option>
                                        <option>Quận Ba Đình</option>
                                        <option>Quận 1</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Vui Lòng Chọn Quận/Huyện.
                                    </div>
                                </div>


                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">
                                    Địa Chỉ Giao Hàng Giống Với Địa Chỉ Thanh Toán Của Tôi</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Lưu Thông Tin</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Thanh Toán Trực Tuyến</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" />
                                    <label className="form-check-label" htmlFor="credit">Thẻ Tín Dụng</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" />
                                    <label className="form-check-label" htmlFor="debit">Thẻ Ghi Nợ</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" />
                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <div className="row gy-3 was-validated">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Tên Trên Thẻ</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                    <small className="text-muted">Tên Đầy Đủ Hiển Thị Trên Thẻ</small>
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Tên Trên Thẻ.
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">Số Thẻ</label>
                                    <input type="number" className="form-control" id="cc-number" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Số Thẻ.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Ngày Phát Hành</label>
                                    <input type="date" className="form-control" id="cc-expiration" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Ngày Phát Hành.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">Ngày Hêt Hạn</label>
                                    <input type="date" className="form-control" id="cc-cvv" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Ngày Hết Hạn.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-outline-success btn-lg" type="submit">Hoàn Tất Thanh Toán</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
