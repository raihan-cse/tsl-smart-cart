import React from 'react'
import {Link} from 'react-router-dom'

export default function ControlWrapper() {
    return (
        <>
        <div className="control-wrapper">
                    <div className="language-box">
                            <Link to='/ExternalPage' className="link">
                                <img src={process.env.PUBLIC_URL + "assets/img/bd-flag.png"} alt="" className="img-fluid" />
                                <p>বাংলা</p>
                            </Link>
                    </div>
                    <div className="login-box">
                        <div className="login-box-inner">
                        <Link to='/ExternalPage' className="link">
                                <img src={process.env.PUBLIC_URL + "assets/img/sign-icon-trns.png"} alt="" className="img-fluid" />
                                <p>Sign in <br /> Join Free</p>
                            </Link>
                        </div>
                    </div>
                    <div className="appslink-box">
                        <div className="appslink-box-inner">
                        <Link to='/ExternalPage' className="link">
                                <img src={process.env.PUBLIC_URL + "assets/img/app-icon-trns.png"} alt="" className="img-fluid" />
                                <p>Apps</p>
                            </Link>
                        </div>
                    </div>
                    <div className="head-cart-box">
                        <div className="cart-box-inner">
                        <Link to='/ExternalPage' className="link">
                                <img src={process.env.PUBLIC_URL + "assets/img/cart-trns.png"} alt="" className="img-fluid" />
                                <p className="number d-none">0</p>
                                <p>Cart</p>
                            </Link>
                        </div>
                    </div>
                </div>
            
        </>
    )
}
