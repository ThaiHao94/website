import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 className="text-secondary">Các Con Sen Có Vài Câu Hỏi?
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="Contact Us"
                            height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form className="needs-validation">
                            <div className="mb-3 was-validated">
                                <label htmlFor="exampleForm" className="form-label">
                                    Họ Tên</label>
                                <input type="text" className="form-control form-control-secondary" id="exampleForm"
                                    placeholder="Thái Hạo" required />
                                <div className="invalid-feedback">
                                        Vui Lòng Nhập Họ Tên Của Bạn.
                                </div>
                            </div>
                            <div className="mb-3 was-validated">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Địa Chỉ Email</label>
                                <input type="email" className="form-control form-control-secondary" id="exampleFormControlInput1"
                                    placeholder="thaihao1994@gmail.com" required/>
                                <div className="invalid-feedback">
                                        Vui Lòng Nhập Email Của Bạn.
                                </div> 
                            </div>
                            <div className="mb-3 was-validated">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label" >
                                    Nội Dung</label>
                                <textarea className="form-control form-control-secondary" id="exampleFormControlTextarea1" rows="5" required ></textarea>
                                <div className="invalid-feedback">
                                        Vui Lòng Nhập Nội Dung.
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-secondary">
                                Gửi Tin Nhắn</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
