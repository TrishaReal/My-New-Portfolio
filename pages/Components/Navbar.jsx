import React, { useState } from 'react';

const Navbar = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('');

    const menuData = [
        {
            title: 'Home',
            link: '#',
            dataScroll: '0',
        },
        {
            title: 'Skills',
            link: '#skills-education-experience',
            dataScroll: '1',
        },
        {
            title: 'Portfolio',
            link: '#projects',
            dataScroll: '2',
        },
        {
            title: 'Contact',
            link: '#contact',
            dataScroll: '3',
        },
    ];

    return (
        <header className='main-header'>
            <nav className='navbar header-nav navbar-expand-lg one-page-nav'>
                <div className='container'>
                    {/* <Languages /> */}
                    <a className='navbar-brand' href='#'>
                        <img
                            src='assets/img/logo/logo02.png'
                            title='Trisha Sairene Real'
                            alt='My Logo'
                        />
                    </a>

                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbar-collapse-toggle'
                        aria-controls='navbar-collapse-toggle'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div
                        className='collapse navbar-collapse justify-content-end'
                        id='navbar-collapse-toggle'
                    >
                        <ul className='navbar-nav mx-auto'>
                            {menuData.map((val, key) => {
                                return (
                                    <li key={key}>
                                        <a
                                            className={`nav-link ${
                                                activeMenuItem == val.link
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                setActiveMenuItem(val.link)
                                            }
                                            data-scroll-nav={val.dataScroll}
                                            href={val.link}
                                            title={val.title}
                                        >
                                            <span>{val.title}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className='ms-auto d-none d-lg-block right-btns'>
                        <a
                            className='px-btn px-btn-theme2'
                            data-scroll-nav='4'
                            href='#contact'
                            title='Contattami'
                        >
                            Contatti
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
