import React from 'react'
import { Link } from 'react-router-dom'

export default function ExternalPage() {
    return (
        <>
            <div className="external-page">
                <div className="content">
                    <h1>External Page for Link Testing</h1>
                    <Link to='/'>Back to Home</Link>
                </div>
            </div>
        </>
    )
}
