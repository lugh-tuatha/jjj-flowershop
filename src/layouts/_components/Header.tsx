import React, { useState } from 'react'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu)
    }

    return (
        <>
        <nav className="bg-primary h-20 flex items-center">
            <main className='max-w-7xl w-full mx-auto px-4'>
                <div className="flex justify-between items-center">
                    <a href="/">
                        <img src="/images/logo.png" alt="brand logo" className='h-12' />
                    </a>

                    <ul className="hidden sm:flex gap-6 text-2xl">
                        <li><a href="/">Home</a></li>
                        <li><a href="/categories">Category</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/faqs">Faqs</a></li>
                    </ul>

                    <button className="hidden sm:block px-5 py-2 cursor-pointer text-xl bg-accent p-4 hover:opacity-100 opacity-80">Inquire Now</button>
                    <i className="fa-solid fa-bars text-3xl cursor-pointer sm:hidden" onClick={toggleMenu}></i>
                </div>
            </main>
        </nav>

        <div className={`${openMenu ? 'right-0' : '-right-full'} bg-primary fixed w-full h-screen z-10 duration-100 top-0  px-4`}>
            <div className="flex h-20 justify-between items-center">
                <a href="/">
                    <img src="/images/logo.png" alt="brand logo" className='h-12' />
                </a>

                <i className="fa-solid fa-x text-3xl cursor-pointer" onClick={toggleMenu}></i>
            </div>
            <ul className="space-y-4 text-2xl text-center">
                <li><a href="/">Home</a></li>
                <li><a href="/categories">Category</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/faqs">Faqs</a></li>
            </ul>
        </div>
        </>

    )
}

export default Header;