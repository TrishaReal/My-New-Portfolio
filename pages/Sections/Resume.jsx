import React from 'react';

const Resume = () => {
    return (
        <section data-scroll-index='2' className='section experience-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='section-heading'>
                            <h6>
                                <span>Experience</span>
                            </h6>
                            <h3>
                                <span>
                                    Skills and <br />
                                    Experience
                                </span>
                            </h3>
                            <p>
                                I design and develop services for customers of
                                all sizes, specializing in creating stylish,
                                modern websites, web services and online stores.
                            </p>
                        </div>
                        <div className='skill-box'>
                            <h3>My Skills</h3>
                            <div className='row g-3'>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <i className='fab fa-html5'></i>
                                        </div>
                                        <h6>HTML</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <i className='fab fa-css3'></i>
                                        </div>
                                        <h6>CSS</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <i className='fab fa-react'></i>
                                        </div>
                                        <h6>React JS</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <i className='fab fa-angular'></i>
                                        </div>
                                        <h6>Angular</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <i className='fab fa-apple'></i>
                                        </div>
                                        <h6>iOs App</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <i className='fab fa-android'></i>
                                        </div>
                                        <h6>App Dev</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0'>
                        <div className='experience-box'>
                            <h3>Experience</h3>
                            <ul>
                                <li>
                                    <h6>Jan 2021 - Present</h6>
                                    <div className='eb-right'>
                                        <h5>Creative Director</h5>
                                        <span>pxdraft Ltd, UK</span>
                                    </div>
                                </li>
                                <li>
                                    <h6>Jan 2021 - Present</h6>
                                    <div className='eb-right'>
                                        <h5>Creative Director</h5>
                                        <span>pxdraft Ltd, UK</span>
                                    </div>
                                </li>
                                <li>
                                    <h6>Jan 2021 - Present</h6>
                                    <div className='eb-right'>
                                        <h5>Creative Director</h5>
                                        <span>pxdraft Ltd, UK</span>
                                    </div>
                                </li>
                                <li>
                                    <h6>Jan 2021 - Present</h6>
                                    <div className='eb-right'>
                                        <h5>Creative Director</h5>
                                        <span>pxdraft Ltd, UK</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='experience-user'>
                            <span className='eu-1'>
                                <img
                                    src='assets/img/effect-3.svg'
                                    title=''
                                    alt=''
                                />
                            </span>
                            <span className='eu-2'>
                                <img
                                    src='assets/img/effect-4.svg'
                                    title=''
                                    alt=''
                                />
                            </span>
                            <div className='avatar'>
                                <img
                                    src='assets/img/avatar.png'
                                    title=''
                                    alt=''
                                />
                            </div>
                            <a className='px-btn px-btn-theme2' href='#'>
                                Hire me{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
