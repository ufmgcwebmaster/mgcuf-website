import Image from "next/image"
import Link from "next/link"

import { useState } from "react"

import mgcLogo from "/public/images/mgc-logo.png"

export default function Navbar() {
    const pages = ["Organizations", "Our Team", "Social Media", "Gallery", "Sponsors"]

    const listItems = pages.map((page) => (
        <li key={page}>
            {(page === "Social Media") ?
                <a href="https://instagram.com/uf_mgc" target="_blank" rel="noreferrer noopener" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white border-gray-700">{page}</a> :
                <Link href={"/" + page.toLowerCase().replace(" ", "-")} className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white border-gray-700">{page}</Link>
            }
        </li>
    ))
    const [collapsed, setCollapsed] = useState(true)

    return (
        <nav className="px-2 sm:px-4 py-2.5 bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-600">
            <div className="container flex flex-wrap md:flex-nowrap items-center justify-center mx-auto">
                <Link href="/" className="flex items-center mr-auto">
                    <Image src={mgcLogo} alt="MGC Logo" width={80}/>
                </Link>
                <div className="flex md:order-2">
                    <button className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-5 mr-4 md:mr-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Get Involved</button>
                    <button onClick={() => setCollapsed((currentCollapse) => !currentCollapse)} className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 mr-1" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className={"items-center justify-between w-full md:w-auto " + (collapsed ? "hidden" : "flex") + " md:flex md:order-1"}>
                    <ul className="flex flex-col w-full md:w-auto p-4 mt-4 border rounded-lg md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                        {listItems}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

/*
<a href="https://www.instagram.com/uf_mgc/" className="hidden lg:flex items-center ml-5">
    <Image src={instagramLogo} alt="Instagram" width={30}/>
</a>
<a href="https://www.facebook.com/theufmgc/" className="hidden lg:flex items-center ml-1">
    <Image src={facebookLogo} alt="Facebook" width={30}/>
</a>
*/