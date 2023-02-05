import React from 'react';
import { NavLink } from 'react-router-dom';



const Footer = () => {
    return (
        <section id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</NavLink></li>
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>About</NavLink></li>
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</NavLink></li>
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</NavLink></li>
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</NavLink></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</NavLink></li>
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>About</NavLink></li>
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</NavLink></li>
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</NavLink></li>
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</NavLink></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</NavLink></li>
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>About</NavLink></li>
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</NavLink></li>
						<li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</NavLink></li>
						<li><NavLink to="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</NavLink></li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><NavLink to="javascript:void();"><i className="fa fa-facebook"></i></NavLink></li>
						<li className="list-inline-item"><NavLink to="javascript:void();"><i className="fa fa-twitter"></i></NavLink></li>
						<li className="list-inline-item"><NavLink to="javascript:void();"><i className="fa fa-instagram"></i></NavLink></li>
						<li className="list-inline-item"><NavLink to="javascript:void();"><i className="fa fa-google-plus"></i></NavLink></li>
						<li className="list-inline-item"><NavLink to="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></NavLink></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><NavLink to="https://www.nationaltransaction.com/">National Transaction Corporation</NavLink></u> is NavLink Registered MSP/ISO of Elavon, Inc. Georgia [NavLink wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
					<p className="h6">&copy All right Reversed.<NavLink className="text-green ml-2" to="https://www.sunlimetech.com" target="_blank">Sunlimetech</NavLink></p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>
    );
}

export default Footer;
