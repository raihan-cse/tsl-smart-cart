import React from 'react'
import { Link } from 'react-router-dom'

export default function MainMenu() {
    const mainMenuData = [
        {
            id: 1,
            title: "grocery ",
            pLink: "/ExternalPage"
        },
        {
            id: 2,
            title: "beauty/personal care",
            pLink: "/ExternalPage"
        },
        {
            id: 3,
            title: "toys",
            pLink: "/ExternalPage"
        },
        {
            id: 4,
            title: "fashion",
            pLink: "/"
        },
        {
            id: 5,
            title: "electronics",
            pLink: "/ExternalPage"
        },
        {
            id: 6,
            title: "appliance",
            pLink: "/ExternalPage"
        },
        {
            id: 7,
            title: "home & Furniture",
            pLink: "/ExternalPage"
        },
        {
            id: 8,
            title: "pharmacy",
            pLink: "/ExternalPage"
        },
        {
            id: 9,
            title: "flower",
            pLink: "/ExternalPage"
        },{
            id: 10,
            title: "construction",
            pLink: "/ExternalPage"
        }
    ]
    return (
        <>
            <div className="main-menu-wrapper">
                <ul className="main-menu-items">
                    {mainMenuData.map((data) =>
                        <li key={data.id}>
                            <Link to={data.pLink}>{data.title}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}
