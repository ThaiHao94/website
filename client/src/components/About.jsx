import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">Về Chúng Tôi</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugit, architecto harum nulla error amet odit quaerat, dolore quam, 
                            officiis recusandae quia delectus corrupti consequatur ducimus voluptas 
                            quisquam numquam similique eum impedit repudiandae tempora nisi aut. Molestias 
                            odio, quo ad officia excepturi eveniet error debitis commodi omnis adipisci 
                            quisquam autem suscipit? Delectus ipsum esse voluptatibus alias assumenda. 
                            Tenetur quasi similique aliquid natus aspernatur soluta, ipsa quibusdam 
                            doloremque. Fuga corrupti distinctio quaerat nesciunt, numquam doloribus 
                            debitis voluptates eos suscipit hic iusto reiciendis cupiditate commodi, 
                            laborum ea id. Perferendis sit quidem, voluptatem temporibus blanditiis iste, 
                            tenetur deserunt dolorem qui inventore velit sed consequuntur.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">
                            Liên Hệ Với Chúng Tôi</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="./assets/images/about.png" height="400px" width="400px" alt="About Us" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
