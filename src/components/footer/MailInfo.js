import React from 'react'

export default function MailInfo() {
    return (
        <>
            <div className="footer-content-wrapper main-info">
                <div className="title-wrapper">
                    <h4>Mail Us:</h4>
                </div>
                <div className="info-wrapper">
                    <ul>
                        <li>
                            <p className="text">Smartcart Ltd.</p>
                        </li>
                        <li>
                            <p className="text">Kanchan Bridge, (Left side just before the toll) Purbachal, Dhaka, Bangladesh.</p>
                        </li>
                        <li>
                            <p className="text">
                                <a href="maito:info@smartcartbd.com" className="text-reset">info@smartcartbd.com</a>
                            </p>
                        </li>
                        <li>
                            <p className="text">
                                <a href="maito:admin@smartcartbd.com" className="text-reset">admin@smartcartbd.com</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
