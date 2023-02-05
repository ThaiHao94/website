import React from 'react';

const Signup = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-success ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Đăng Ký
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="signupModalLabel">Đăng Ký</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-success w-100 mb-4">
                                <span className="fa fa-google me-2"></span>
                                Đăng Ký Với Google
                            </button>
                            <button className="btn btn-success w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span>
                                Đăng Ký Với Facebook
                            </button>
                            <form className="needs-validation">
                                <div className="mb-3 was-validated">
                                    <label htmlFor="exampleInput" className="form-label">
                                        Tên Người Dùng</label>
                                    <input type="text" className="form-control" required id="exampleInput" />
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Tên Người Dùng
                                    </div>
                                </div>
                                <div className="mb-3 was-validated">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Địa Chỉ Email</label>
                                    <input type="email" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">
                                    Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</div>
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Email
                                    </div>
                                </div>
                                <div className="mb-3 was-validated">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Mật Khẩu
                                    </label>
                                    <input type="password" className="form-control" required id="exampleInputPassword1" />
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Mật Khẩu
                                    </div>
                                </div>
                                <div className="mb-3 was-validated">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Nhập Lại Mật Khẩu
                                    </label>
                                    <input type="password" className="form-control" required id="exampleInputPassword1" />
                                    <div className="invalid-feedback">
                                        Vui Lòng Nhập Lại Mật Khẩu
                                    </div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Nhớ Mật Khẩu</label>
                                </div>
                                <button type="submit" className="btn btn-outline-success w-100 mt-5">Đăng Ký</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
