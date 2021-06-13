import React from 'react'

export default function MailInfo() {
    return (
        <>
            <div className="footer-content-wrapper mail-info">
                <div className="title-wrapper">
                    <h4 className="title">Mail Us:</h4>
                </div>
                <div className="info-wrapper">
                    <ul>
                        <li>
                            <p className="text">Smartcart Ltd.</p>
                        </li>
                        <li>
                            <p className="text">Kanchan Bridge, <br />(Left side just before the toll) <br />Purbachal, Dhaka, <br />Bangladesh.</p>
                        </li>
                        <li>
                            <p className="text">
                                <a href="maito:info@smartcartbd.com" className="text-reset">Email: info@smartcartbd.com</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
