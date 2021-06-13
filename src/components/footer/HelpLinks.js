import React from 'react'
import { Link } from 'react-router-dom'

export default function HelpLinks() {
    return (
        <>
            <div className="footer-content-wrapper help">
                <div className="title-wrapper">
                    <h4>Help</h4>
                </div>
                <div className="link-wrapper">
                    <ul>
                        <li>
                            <Link to='/ExternalPage' className="link">Payments</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">Shipping</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">Cancellation & Returns</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">FAQ</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">Report Infringement</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
