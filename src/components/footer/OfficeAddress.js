import React from 'react'

export default function OfficeAddress() {
    return (
        <>
            <div className="footer-content-wrapper office-address">
                <div className="title-wrapper">
                    <h4 className="title">Registered Office Address:</h4>
                </div>
                <div className="info-wrapper">
                    <ul>
                        <li>
                            <p className="text">Smartcart Ltd.</p>
                        </li>
                        <li>
                            <p className="text">House: 5/A, Road: 94, <br />Gulshan-2, Dhaka-1212, <br />Bangladesh.</p>
                        </li>
                        <li>
                            <p className="text">
                                <a href="tel:+8802-986-0084" className="d-block text-reset">Telephone: +8802-986-0084</a>
                            </p>
                        </li>
                        <li>
                            <p className="text">
                                <a href="tel:+8801939-993000" className="d-block text-reset">Mobile: +8801939-993000</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
