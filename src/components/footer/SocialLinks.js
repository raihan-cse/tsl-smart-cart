import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialLinks() {
    return (
        <>
            <div className="footer-content-wrapper social">
                <div className="title-wrapper">
                    <h4 className="title">Social</h4>
                </div>
                <div className="link-wrapper">
                    <ul>
                        <li>
                            <Link to='https://www.facebook.com/timessquare.com.bd' className="link" target="_blank">Facebook</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link disabled-link" target="_blank">Twitter</Link>
                        </li>
                        <li>
                            <Link to='https://timessquare.com.bd/times-square-videos/' className="link" target="_blank">YouTube</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
