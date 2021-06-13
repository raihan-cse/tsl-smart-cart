import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutLinks() {
    return (
        <>
            <div className="footer-content-wrapper about">
                <div className="title-wrapper">
                    <h4>About</h4>
                </div>
                <div className="link-wrapper">
                    <ul>
                        <li>
                            <Link to='/ExternalPage' className="link">Conatact Us</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">About Us</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">Careers</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">Press</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">Flipcart Wholesale</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
