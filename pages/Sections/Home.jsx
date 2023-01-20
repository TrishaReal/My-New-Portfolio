import React from 'react';

const Home = () => {
    return (
        <section data-scroll-index='0' className='home-section'>
            <div className='effect-1'>
                <img src='assets/img/effect-1.svg' title='' alt='' />
            </div>
            <div className='effect-2'>
                <img src='assets/img/effect-2.svg' title='' alt='' />
            </div>
            <div className='container'>
                <div className='row min-vh-100 align-items-center'>
                    <div className='col-lg-6 pe-xl-5 py-5'>
                        <div className='home-intro one-page-nav'>
                            <h6>
                                <span>Hello.</span>
                            </h6>
                            <h1>
                                We Have <br />
                                Design
                                <br />
                                Experience
                            </h1>
                            <p>
                                I design and develop services for customers of
                                all sizes, specializing in creating stylish,
                                modern websites, web services and online stores.
                            </p>
                            <div className='btn-bar'>
                                <a
                                    className='px-btn px-btn-theme'
                                    data-scroll-nav='4'
                                    href='#contactus'
                                >
                                    Let’s Talk
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='home-image'>
                            <img
                                src='assets/img/home-banner.png'
                                title=''
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
